import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { logAccess } from "./utils/logAccess";

export async function middleware(request) {
  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  const method = request.method;
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/contact") ||
    pathname.startsWith("/api/members/register")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token) {
    await logAccess(
      "error",
      "Unauthorized Access ",
      method,
      ip,
      userAgent,
      pathname
    );
    return new NextResponse(
      JSON.stringify({ message: "Authentication required" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("X-User-Id", token.id);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  await logAccess("info", "API Access", method, ip, userAgent, pathname);

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
