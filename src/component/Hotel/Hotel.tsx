import React from 'react'
import styles from "./Hotel.module.scss"
import goldStar from "../../asset/goldStar.svg"
import grayStar from "../../asset/grayStar.svg"
import heart from "../../asset/heart.svg"
import {IHotel} from "../../model";
import {useAppSelector} from "../../app/hooks";
import {getDate} from "../../util/util";


export function Hotel({hotel}: { hotel: IHotel }) {
  const {daysCount, checkIn} = useAppSelector(state => state.hotels)

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>{hotel.hotelName}</p>
        <img src={heart} alt=""/>
      </div>
      <div className={styles.date}>
        <p>
          {getDate(checkIn)} — {daysCount} дней
        </p>
      </div>
      <div className={styles.ratingAndPrice}>
        <div className={styles.rating}>
          {[...Array(5)].map((x, i) =>
            (i <= hotel.stars - 1)
              ? <img src={goldStar} alt="" key={i}/>
              : <img src={grayStar} alt="" key={i}/>
          )}
        </div>
        <div className={styles.price}>
          <p>Price: </p>
          <span>{hotel.priceAvg} ₽</span>
        </div>
      </div>
    </div>
  )
}