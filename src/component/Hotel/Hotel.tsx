import React from 'react'
import styles from "./Hotel.module.scss"
import {IHotel} from "../../model";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getDate} from "../../util/util";
import goldStar from "../../asset/goldStar.svg"
import grayStar from "../../asset/grayStar.svg"
import heart from "../../asset/heart.svg"
import greyHeart from "../../asset/greyHeart.svg"
import {hotelSlice} from "../../features/hotel/hotelSlice";


export function Hotel({hotel}: { hotel: IHotel }) {
  const {days, checkIn} = useAppSelector(state => state.hotels)
  const {addToFav, removeFromFav} = hotelSlice.actions
  const dispatch = useAppDispatch()

  function addToFavHandler() {
    dispatch(addToFav(hotel))
  }

  function removeFromFavHandler() {
    dispatch(removeFromFav(hotel.hotelId))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>{hotel.hotelName}</p>
        {hotel.isFav
          ? <img src={heart} alt="" onClick={removeFromFavHandler}/>
          : <img src={greyHeart} alt="" onClick={addToFavHandler}/>
        }
      </div>
      <div className={styles.date}>
        <p>
          {getDate(checkIn)} — {days} дней
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