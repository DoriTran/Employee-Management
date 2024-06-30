"use client";

import { AppButton, InputProfile, EmployeeCard } from "@/components";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

const EditPage = () => {
  const router = useRouter();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.listHeader}>
        <InputProfile
          label="Search Name"
          type="text"
          width="200px"
          action={() => console.log("Search Name")}
          actionString="Search"
          labelClass={styles.label}
          actionProp={{ color: "primary", sx: { width: "50px" } }}
        />
        <AppButton color="success" onClick={() => router.push("/create")}>
          Add Employee
        </AppButton>
      </div>
      <div className={styles.listEmployee}>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
};

export default EditPage;
