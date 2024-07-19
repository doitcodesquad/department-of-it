export async function logAccess(
  level,
  message,
  method,
  ip,
  userAgent,
  pathname,
  userId = "anonymous"
) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/audit-logs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      level,
      message: message,
      meta: { userId, method, ip, userAgent, route: pathname },
    }),
  });
}
