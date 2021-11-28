import React, { useEffect, useRef, useState } from "react";
import './CarouselComponent.module.scss'
import Card from "./../Card/Card";
import style from "./CarouselComponent.module.scss";

const CardArray = [
    { url: "../../../images/gallery/1.jpg" },
    { url: "../../../images/gallery/2.jpg" },
    { url: "../../../images/gallery/3.jpg" },
    { url: "../../../images/gallery/4.jpg" },
    { url: "../../../images/gallery/5.jpg" },
    { url: "../../../images/gallery/6.jpg" },
    { url: "../../../images/gallery/7.jpg" },
    { url: "../../../images/gallery/8.jpg" },
    { url: "../../../images/gallery/9.jpg" },
    { url: "../../../images/gallery/10.jpg" }
  ];

const CarouselComponent = () => {
    let carouslRef = useRef(null);

    const prev = () => {
        carouslRef &&
            carouslRef.current &&
            carouslRef.current.scrollTo({
                behavior: "smooth",
                top: 0,
                left:
                    carouslRef.current.scrollLeft - carouslRef.current.clientWidth ,
            });
    };

    const next = () => {
        carouslRef &&
            carouslRef.current &&
            carouslRef.current.scrollTo({
                behavior: "smooth",
                top: 0,
                left: carouslRef.current.scrollLeft + carouslRef.current.clientWidth ,
            });
    };

    return (
        <div className={style.carousel}>
            <button className={style.direction} onClick={prev}>
                <img className={style.arrow} src="./../../../asset/leftarrow.svg" alt="left button" />
            </button>
            <div className={style.cardDiv}>
                <main className={style.cardScroll} ref={carouslRef}>
                    {CardArray.map((carousel, i) => (
                        <Card {...carousel} key={i} />
                    ))}
                </main>
            </div>
            <button className={style.direction} onClick={next}>
                <img className={style.arrow} src="./../../../asset/img_92071.png" alt="right button" />
            </button>
        </div>
    );
}
export default CarouselComponent;
