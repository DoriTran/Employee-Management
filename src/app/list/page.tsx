import { CreateEditFooter, FullEmployeeInfo } from "@/components";
import styles from "./page.module.scss";

const EditPage = () => {
  return (
    <div className={styles.pageContainer}>
      <FullEmployeeInfo />
      <CreateEditFooter edit />
    </div>
  );
};

export default EditPage;
