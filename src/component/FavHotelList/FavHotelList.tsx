import React, { useState } from 'react'
import styles from "./FavHotelList.module.scss"
import {Hotel} from "../Hotel/Hotel";
import {hotelSlice} from "../../features/hotel/hotelSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import disabledArrows from "../../asset/favHotels/disabledArrows.svg"
import ascend from "../../asset/favHotels/ascend.svg"
import descend from "../../asset/favHotels/descend.svg"

export function FavHotelList() {
  const {favHotels} = useAppSelector(state => state.hotels)
  const [isAscend, setIsAscend] = useState(true)
  const [rateChecked, setRateChecked] = useState(true)
  const dispatch = useAppDispatch()
  const {sortFavHotelsByProperty} = hotelSlice.actions
  const RATE = "stars"
  const PRICE = "priceAvg"

  function rateChangeHandler() {
    setRateChecked(true)
  }

  function priceChangeHandler() {
    setRateChecked(false)
  }

  function clickHandler() {
    rateChecked
      ? isAscend
        ? dispatch(sortFavHotelsByProperty({property: RATE, isAscend: true}))
        : dispatch(sortFavHotelsByProperty({property: RATE, isAscend: false}))
      : isAscend
        ? dispatch(sortFavHotelsByProperty({property: PRICE, isAscend: true}))
        : dispatch(sortFavHotelsByProperty({property: PRICE, isAscend: false}))

    setIsAscend(!isAscend)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Избранное</h2>
      </div>
      <div className={styles.buttonBlock}>
        <div className={styles.radio}>
          <input id="rate"
                 type="radio"
                 name="rate"
                 value="off"
                 checked={rateChecked}
                 onChange={rateChangeHandler}
                 onClick={clickHandler}
          />
          <label htmlFor="rate">
            Рейтинг
            {!rateChecked
              ? <img src={disabledArrows} alt=""/> :
              isAscend
                ? <img src={ascend} alt=""/>
                : <img src={descend} alt=""/>
            }
          </label>
        </div>
        <div className={styles.radio}>
          <input id="price"
                 type="radio"
                 name="price"
                 value="off"
                 checked={!rateChecked}
                 onChange={priceChangeHandler}
                 onClick={clickHandler}
          />
          <label htmlFor="price">
            Цена
            {rateChecked
              ? <img src={disabledArrows} alt=""/> :
              isAscend
                ? <img src={ascend} alt=""/>
                : <img src={descend} alt=""/>
            }
          </label>
        </div>
      </div>
      <div className={`${styles.hotelsList} scrollable`}>
        {favHotels.map((h) =>
          <div key={h.hotelId} className={styles.hotel}>
            <Hotel hotel={h}/>
            <div className={styles.separator}/>
          </div>
        )}
      </div>
    </div>
  )
}