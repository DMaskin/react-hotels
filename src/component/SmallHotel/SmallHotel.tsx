import React from 'react'
import styles from "./SmallHotel.module.scss"
import goldStar from "../../asset/goldStar.svg"
import grayStar from "../../asset/grayStar.svg"
import heart from "../../asset/heart.svg"


export function SmallHotel() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Moscow Marriot Grand Hotel</p>
        <img src={heart} alt=""/>
      </div>
      <div className={styles.date}>
        <p>28 June — 1 день</p>
      </div>
      <div className={styles.ratingAndPrice}>
        <div className={styles.rating}>
          <img src={goldStar} alt=""/>
          <img src={goldStar} alt=""/>
          <img src={goldStar} alt=""/>
          <img src={grayStar} alt=""/>
          <img src={grayStar} alt=""/>
        </div>
        <div className={styles.price}>
          <p>Price: </p>
          <span>23924 ₽</span>
        </div>
      </div>
    </div>
  )
}