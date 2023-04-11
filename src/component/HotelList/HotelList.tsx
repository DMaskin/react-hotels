import React, {Fragment, useEffect} from 'react'
import styles from "./HotelList.module.scss"
import hotel from "../../asset/hotel.svg"
import {Hotel} from "../Hotel/Hotel";
import arrow from "../../asset/arrow.svg"
import {HotelSlider} from "../HotelSlider/HotelSlider";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchHotels} from "../../features/hotel/hotelAPI";
import {hotelSlice} from "../../features/hotel/hotelSlice";
import {IHotel} from "../../model";
import {getDate} from "../../util/util";

export function HotelList() {
  const {location, checkIn, favHotels, hotels} = useAppSelector(state => state.hotels)
  const dispatch = useAppDispatch()
  const {setHotels} = hotelSlice.actions

  useEffect(() => {
    fetchHotels().then(hotels => {
      dispatch(setHotels(hotels))
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.location}>
          <h1>Отели</h1>
          <img src={arrow} alt=""/>
          <h1>{location}</h1>
        </div>
        <p>{getDate(checkIn)}</p>
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