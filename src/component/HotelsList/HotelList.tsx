import React from 'react'
import styles from "./HotelList.module.scss"
import hotel from "../../asset/hotel.svg"
import {Hotel} from "../Hotel/Hotel";

export function HotelList() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{`Отели > Москва`}</h1>
        <p>07 июля 2020</p>
      </div>
      <div className={styles.slider}>
        slider
      </div>
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