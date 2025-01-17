import React, { FC } from "react";

import Image from "next/image";

import styles from "./Logo.module.scss";
import Link from "next/link";

import logo from "/public/favicon.png";

const Logo: FC = () => {
  return (
    <Link href="/#header" scroll={false} className={styles.logo}>
      <Image src={logo} alt="Логотип" width={48} height={51} />
      <span className={styles.title}>FAKO.IO</span>
    </Link>
  );
};

export default Logo;
