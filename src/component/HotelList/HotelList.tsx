import React, {Fragment, useEffect} from 'react'
import {Hotel} from "../Hotel/Hotel";
import {HotelSlider} from "../HotelSlider/HotelSlider";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchHotelsRoutine} from "../../features/hotel/hotelSlice";
import {IHotel} from "../../model";
import {addDays} from "../../util/util";
import arrow from "../../asset/hotelList/arrow.svg"
import hotel from "../../asset/hotelList/hotel.svg"
import styles from "./HotelList.module.scss"

export function HotelList() {
  const {location, checkIn, favHotels, hotels} = useAppSelector(state => state.hotels)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const location = "Москва"
    const checkIn = new Date()
    const checkOut = addDays(checkIn, 1)
    const days = 1

    dispatch(fetchHotelsRoutine({
      location: location, checkIn: checkIn, checkOut: checkOut, days: days
    }))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.location}>
          <h1>Отели</h1>
          <img src={arrow} alt=""/>
          <h1>{location}</h1>
        </div>
        <p>{checkIn}</p>
      </div>
      <HotelSlider/>
      <p>Добавлено в Избранное: <strong>{favHotels.length}</strong> отелей</p>
      <div className={`${styles.hotelList} scrollable`}>
        {hotels.map((h: IHotel) =>
          <Fragment key={h.hotelId}>
            <div className={styles.hotel}>
              <div className={styles.circle}>
                <img src={hotel} alt=""/>
              </div>
              <Hotel hotel={h}/>
            </div>
            <div className={styles.separator}/>
          </Fragment>
        )}
      </div>
    </div>)
}