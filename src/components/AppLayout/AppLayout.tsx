"use client";

import { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import styles from "./AppLayout.module.scss";

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
      case "/edit":
        return "Edit employee profile";
      default:
        return "404 Page";
    }
  }, [pathname]);

  return (
    <div className={styles.page}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
};

export default AppLayout;
