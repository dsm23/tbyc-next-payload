import type { ReactNode } from "react";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { AdminBar } from "~/components/AdminBar";
import { LivePreviewListener } from "~/components/LivePreviewListener";
import { Footer } from "~/Footer/Component";
import { Header } from "~/Header/Component";
import { Providers } from "~/providers";
import { InitTheme } from "~/providers/Theme/InitTheme";
import { cn } from "~/utilities/cn";
import { mergeOpenGraph } from "~/utilities/mergeOpenGraph";

import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LivePreviewListener />

          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SERVER_URL || "https://payloadcms.com",
  ),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};