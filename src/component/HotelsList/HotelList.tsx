import React from 'react'
import styles from "./HotelList.module.scss"
import hotel from "../../asset/hotel.svg"
import {Hotel} from "../Hotel/Hotel";
import arrow from "../../asset/arrow.svg"
import {HotelSlider} from "../HotelSlider/HotelSlider";

export function HotelList() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.location}>
          <h1>Отели</h1>
          <img src={arrow} alt=""/>
          <h1>Москва</h1>
        </div>
        <p>07 июля 2020</p>
      </div>
        <HotelSlider/>
      <p>Добавлено в Избранное: <strong>3</strong> отеля</p>
      <div className={`${styles.hotelList} scrollable`}>
        <div className={styles.hotel}>
          <div className={styles.circle}>
            <img src={hotel} alt=""/>
          </div>
          <Hotel/>
        </div>
        <div className={styles.separator}/>
        <div className={styles.hotel}>
          <div className={styles.circle}>
            <img src={hotel} alt=""/>
          </div>
          <Hotel/>
        </div>
        <div className={styles.separator}/>
        <div className={styles.hotel}>
          <div className={styles.circle}>
            <img src={hotel} alt=""/>
          </div>
          <Hotel/>
        </div>
        <div className={styles.separator}/>
        <div className={styles.hotel}>
          <div className={styles.circle}>
            <img src={hotel} alt=""/>
          </div>
          <Hotel/>
        </div>
        <div className={styles.separator}/>
        <div className={styles.hotel}>
          <div className={styles.circle}>
            <img src={hotel} alt=""/>
          </div>
          <Hotel/>
        </div>
        <div className={styles.separator}/>
        <div className={styles.hotel}>
          <div className={styles.circle}>
            <img src={hotel} alt=""/>
          </div>
          <Hotel/>
        </div>
        <div className={styles.separator}/>
      </div>
    </div>
  )
}