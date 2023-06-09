import React from "react"
import { Header } from "../../component/Header/Header"
import { Search } from "../../component/Search/Search"
import { FavHotelList } from "../../component/FavHotelList/FavHotelList"
import { HotelList } from "../../component/HotelList/HotelList"
import styles from "./HotelsPage.module.scss"

export function HotelsPage() {
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.cardsContainer}>
          <Search />
          <FavHotelList />
        </div>
        <HotelList />
      </div>
    </>
  )
}
