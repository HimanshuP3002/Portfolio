"use client";

import dynamic from "next/dynamic";

const CornerWidget = dynamic(() => import("./CornerWidget"), { ssr: false });

export default function CornerWidgetWrapper() {
  return <CornerWidget />;
}
