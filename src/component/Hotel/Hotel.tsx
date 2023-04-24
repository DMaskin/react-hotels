import React from "react"
import styles from "./Hotel.module.scss"
import { IHotel } from "../../model"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import goldStar from "../../asset/hotel/goldStar.svg"
import grayStar from "../../asset/hotel/grayStar.svg"
import heart from "../../asset/hotel/heart.svg"
import greyHeart from "../../asset/hotel/greyHeart.svg"
import { addToFav, removeFromFav, selectCheckIn, selectDays } from "../../features/hotel/hotelSlice"
import { createLabel } from "../../util/util"

export function Hotel({ hotel }: { hotel: IHotel }) {
  const days = useAppSelector(selectDays)
  const checkIn = useAppSelector(selectCheckIn)
  const dispatch = useAppDispatch()

  function addToFavHandler() {
    dispatch(addToFav(hotel.hotelId))
  }

  function removeFromFavHandler() {
    dispatch(removeFromFav(hotel.hotelId))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>{hotel.hotelName}</p>
        {hotel.isFav ? (
          <img src={heart} alt="" onClick={removeFromFavHandler} />
        ) : (
          <img src={greyHeart} alt="" onClick={addToFavHandler} />
        )}
      </div>
      <div className={styles.date}>
        <p>{`${checkIn.substring(0, checkIn.length - 5)} — ${days} ${createLabel(days, ["день", "дня", "дней"])}`}</p>
      </div>
      <div className={styles.ratingAndPrice}>
        <div className={styles.rating}>
          {[...Array(5)].map((x, i) =>
            i <= hotel.stars - 1 ? <img src={goldStar} alt="" key={i} /> : <img src={grayStar} alt="" key={i} />
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
