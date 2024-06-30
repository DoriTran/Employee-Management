import { FullEmployeeInfo } from "@/components";
import styles from "./page.module.scss";

const EditPage = () => {
  return (
    <div className={styles.pageContainer}>
      <FullEmployeeInfo edit />
    </div>
  );
};

export default EditPage;
