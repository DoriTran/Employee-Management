"use client";

import { Paper } from "@mui/material";
import { Carousel } from "antd";
import Image from "next/image";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./EmployeeCard.module.scss";
import AppButton from "../AppButton/AppButton";

interface EmployeeCardProps {
  employee?: any;
}

const EmployeeCard: FC<EmployeeCardProps> = ({ employee }) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Paper className={styles.card} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {(!employee.allPortfolioImages || employee.allPortfolioImages.length === 0) && (
        <Image
          src="/No Portfolio.png"
          alt="No portfolio"
          width={300}
          height={200}
          objectFit="cover"
          loading="lazy"
          onClick={() => router.push("/edit")}
        />
      )}
      {employee.allPortfolioImages?.length !== 0 && (
        <Carousel
          arrows
          autoplay
          fade
          autoplaySpeed={5000}
          prevArrow={<FontAwesomeIcon icon={faCircleChevronLeft} fixedWidth />}
          nextArrow={<FontAwesomeIcon icon={faCircleChevronRight} fixedWidth />}
        >
          {employee.allPortfolioImages.map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={`fallback portfolio ${index}`}
              width={300}
              height={200}
              objectFit="cover"
              loading="lazy"
              onClick={() => router.push("/edit")}
            />
          ))}
        </Carousel>
      )}
      <div className={styles.cardbody}>
        <div className={styles.info} onClick={() => router.push("/edit")}>
          <div className={styles.personal}>
            <div className={styles.name}>{employee.name}</div>
            <div>{employee.allPositions}</div>
          </div>
          <div>{`${employee.totalExperience} years`} </div>
        </div>
        <div className={styles.description} onClick={() => router.push("/edit")}>
          {employee.fullDescription}
        </div>
      </div>
      <div className={styles.button}>{isHover && <AppButton color="error">Delete</AppButton>}</div>
    </Paper>
  );
};

export default EmployeeCard;
