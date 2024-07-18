import clientPromise from "@/lib/mongodb";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
const DB_NAME = "codesquad-dit";
const logToDb = async (level, message, meta) => {
  const startTime = Date.now();
  const headersList = headers();

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const duration = Date.now() - startTime;
  const request = {
    host: headersList.get("host"),
    duration,
    userId: headersList.get("X-User-Id") || "anonymous",
  };
  await db.collection("audit_logs").insertOne({
    level,
    message,
    ...meta,
    ...request,
    timestamp: new Date(),
  });
};

const logger = {
  info: async (message, meta) => {
    await logToDb("info", message, meta);
  },
  warn: async (message, meta) => {
    await logToDb("warn", message, meta);
  },
  error: async (message, meta) => {
    await logToDb("error", message, meta);
  },
};

export default logger;
