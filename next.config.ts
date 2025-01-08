import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const url = new URL(process.env.NEXT_PUBLIC_PAYLOAD_URL || "");
const protocol = url.protocol.slice(0, -1) as "http" | "https" | undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol,
        hostname: url.hostname,
      },
    ],
  },
};

export default withPayload(nextConfig);
