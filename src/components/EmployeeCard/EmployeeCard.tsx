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
      <Carousel
        arrows
        autoplay
        fade
        autoplaySpeed={5000}
        prevArrow={<FontAwesomeIcon icon={faCircleChevronLeft} fixedWidth />}
        nextArrow={<FontAwesomeIcon icon={faCircleChevronRight} fixedWidth />}
      >
        <Image
          src="/profile.png"
          alt="fallback portfolio 1"
          width={300}
          height={200}
          objectFit="cover"
          loading="lazy"
          onClick={() => router.push("/edit")}
        />
        <Image
          src="/profile1.png"
          alt="fallback portfolio 2"
          width={300}
          height={200}
          objectFit="cover"
          loading="lazy"
          onClick={() => router.push("/edit")}
        />
        <Image
          src="/profile2.png"
          alt="fallback portfolio 3"
          width={300}
          height={200}
          objectFit="cover"
          loading="lazy"
          onClick={() => router.push("/edit")}
        />
        {employee?.images.map((image: string, index: number) => (
          <Image
            key={index}
            src={image}
            alt={`fallback portfolio ${index}`}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        ))}
      </Carousel>
      <div className={styles.cardbody}>
        <div className={styles.info} onClick={() => router.push("/edit")}>
          <div className={styles.personal}>
            <div className={styles.name}>Nguyen Thi B</div>
            <div>Frontend developer</div>
          </div>
          <div>5 years</div>
        </div>
        <div className={styles.description} onClick={() => router.push("/edit")}>
          This is description ...
        </div>
      </div>
      <div className={styles.button}>{isHover && <AppButton color="error">Delete</AppButton>}</div>
    </Paper>
  );
};

export default EmployeeCard;
