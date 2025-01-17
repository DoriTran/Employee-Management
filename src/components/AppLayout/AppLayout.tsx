"use client";

import { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./AppLayout.module.scss";

const queryClient = new QueryClient();

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const title = useMemo<string>(() => {
    switch (pathname) {
      case "/list":
        return "List employees";
      case "/create":
        return "Create employee profile";
      default:
        if (pathname.includes("edit")) return "Edit employee profile";
        return "404 Page Not Found";
    }
  }, [pathname]);

  return (
    <div className={styles.page}>
      <div className={styles.title}>{title}</div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default AppLayout;
