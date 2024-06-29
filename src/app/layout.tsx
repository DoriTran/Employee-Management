"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const title = useMemo<string>(() => {
    switch (pathname) {
      case "list":
        return "List employees";
      case "create":
        return "Create employee profile";
      case "edit":
        return "Edit employee profile";
      default:
        return "404 Page";
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <div className="main-title">{title}</div>
        {children}
      </body>
    </html>
  );
}
