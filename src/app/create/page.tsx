import { CreateEditFooter, FullEmployeeInfo } from "@/components";
import styles from "./page.module.scss";

const CreatePage = () => {
  return (
    <div className={styles.pageContainer}>
      <FullEmployeeInfo />
      <CreateEditFooter create />
    </div>
  );
};

export default CreatePage;
