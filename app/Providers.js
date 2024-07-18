"use client";
import { SessionProvider } from "next-auth/react";

export async function SessionProviderNextAuth({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
