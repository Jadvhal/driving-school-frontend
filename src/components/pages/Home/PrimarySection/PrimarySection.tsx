import React, { FC } from "react";

import styles from "./PrimarySection.module.scss";
import Button from "../../../UI/Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

import Arrow from "../../../other/Icons/Arrow";

import Image from "next/image";
import { Autoplay } from "swiper";
import Link from "next/link";

import car from "/src/images/oversize/car.png";
import chart from "/src/images/icons/chart.png";
import fleet from "/src/images/icons/fleet.png";
import instructor from "/src/images/icons/instructor.png";
import discount from "/src/images/icons/discount.png";

const PrimarySection: FC = () => {
  return (
    <motion.section
      initial={{ translateY: "200px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      
<article className={`${styles.majorArticle} flex flex-col items-center justify-center`}>
  <h1 className="text-center">ChatGPT AI Content Detector</h1>

<textarea
  className="w-full p-30 border border-blue-900 rounded resize-none text-sm bg-blur-gradient shadow-lg"
  style={{ height: "300px" }}
  placeholder="Enter your document text here"
></textarea>
  <div className="flex justify-between mt-4">
    <Link href="/#form" scroll={false}>
      <Button primary>
        Detect Text <Arrow />
      </Button>
    </Link>
    
    <Button className="bg-gray-300 ml-4" primary>
      Clear <Arrow />
    </Button>

  </div>
</article>


      <div className={styles.items}>
        <article>
          <Image src={chart} alt="График" />
          <h4>Human</h4>
          <p>Human-Written</p>
        </article>
        <article>
          <Image src={fleet} alt="Автопарк" />
          <h4>AI-Generated‍</h4>
          <p>AI-Generated‍</p>
        </article>
        <article>
          <Image src={instructor} alt="Инструктора" />
          <h4>Bard</h4>
          <p>Bard-Generated‍</p>
        </article>
        <article>
          <Image src={discount} alt="Рассрочка и скидки" />
          <h4>Mixed</h4>
          <p>Mixed-Written</p>
        </article>
      </div>
   
 <div>
  <motion.section
    initial={{ translateY: "200px", opacity: 0 }}
    whileInView={{ translateY: "0px", opacity: 1 }}
    viewport={{ once: true }}
    className={styles.section}
  >
    <article className={`${styles.majorArticle} flex flex-col items-center justify-center`} style={{ marginTop: "20px" }}>
      <h2 className="text-center">AI Content Detector and Its Use</h2>

      <p>
        Recent years have witnessed more and more AI-generated content in social media, marketing, and academic fields. This has led to the questioning of the authenticity and originality of the produced or published content. As a result, creativity, innovation, and dedication to one’s work are slowly losing their importance. This not just degrades the brand’s or institution’s image but also provokes judgment on the individual’s capabilities.

        AI text detectors have come as an aid in detecting AI-generated content. With the use of algorithms, this software helps in the segregation of plagiarized content from original content. AI text detectors have proved their worth and importance for publishers and content marketing professionals. Using this software, they can easily prove or disprove the genuinity of an individual’s work.
      </p>
    </article>
  </motion.section>
</div>


      
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={chart} alt="График" />
            <h4>График</h4>
            <p>Подстраивающийся под вас</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={fleet} alt="Автопарк" />
            <h4>Автопарк</h4>
            <p>Ежегодно обновляется</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={instructor} alt="Инструктора" />
            <h4>Инструктора</h4>
            <p>С опытом не менее 5 лет</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={discount} alt="Рассрочка и скидки" />
            <h4>Рассрочка и скидки</h4>
            <p>На 12 м. и скидки студентам</p>
          </article>
          
         
          
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default PrimarySection;
