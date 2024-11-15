"use client";

import type { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";

export const LivePreviewListener: FunctionComponent = () => {
  const router = useRouter();
  return (
    <PayloadLivePreview
      refresh={router.refresh}
      serverURL={process.env.NEXT_PUBLIC_SERVER_URL!}
    />
  );
};
