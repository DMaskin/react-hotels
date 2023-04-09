import React from 'react'
import {Header} from "../../component/Header/Header";
import styles from "./HotelsPage.module.scss"
import {Search} from "../../component/Search/Search";
import {FavHotelList} from "../../component/FavHotelList/FavHotelList";
import {HotelList} from "../../component/HotelsList/HotelList";

export function HotelsPage() {
  return (
    <>
      <Header/>
      <div className={styles.pageContainer}>
        <div className={styles.cardsContainer}>
          <Search/>
          <FavHotelList/>
        </div>
        <HotelList/>
      </div>
    </>
  )
}