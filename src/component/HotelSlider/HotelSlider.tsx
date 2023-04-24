import React from "react"
import Slider from "react-slick"
import hotel1 from "../../asset/hotelImgs/hotel1.jpg"
import hotel2 from "../../asset/hotelList/hotel2.jpg"
import hotel3 from "../../asset/hotelList/hotel3.jpg"
import hotel4 from "../../asset/hotelList/hotel4.jpg"
import hotel5 from "../../asset/hotelList/hotel5.jpg"
import styles from "./HotelSlider.module.scss"

export function HotelSlider() {
  const settings = {
    infinite: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    variableWidth: true,
  }

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.sliderItem}>
          <img src={hotel1} alt="" />
        </div>
        <div className={styles.sliderItem}>
          <img src={hotel2} alt="" />
        </div>
        <div className={styles.sliderItem}>
          <img src={hotel3} alt="" />
        </div>
        <div className={styles.sliderItem}>
          <img src={hotel4} alt="" />
        </div>
        <div className={styles.sliderItem}>
          <img src={hotel5} alt="" />
        </div>
      </Slider>
    </div>
  )
}
