"use client";

import { FullEmployeeInfo } from "@/components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getEmployee } from "@/actions";
import styles from "./page.module.scss";

const EditPage = () => {
  const pathname = usePathname();
  const [employee, setEmployee] = useState<any>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      // Extract the employeeId from the URL path
      const segments = pathname.split("/");
      const employeeId = segments[segments.length - 1];

      if (!employeeId) return;

      const id = parseInt(employeeId, 10);
      const fetchedEmployee = await getEmployee(id);
      setEmployee(fetchedEmployee);
    };

    fetchEmployee();
  }, [pathname]);

  return (
    <div className={styles.pageContainer}>
      <FullEmployeeInfo edit={employee} />
    </div>
  );
};

export default EditPage;
