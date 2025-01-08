"use client";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import { useEffect, useState } from "react";

export const RefreshRouteOnSave = () => {
  const router = useRouter();
  const [origin, setOrigin] = useState("");
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  if (!origin) {
    return null;
  }

  return (
    <PayloadLivePreview refresh={() => router.refresh()} serverURL={origin} />
  );
};
