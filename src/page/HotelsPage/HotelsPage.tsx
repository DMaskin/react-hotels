import React from 'react'
import {Header} from "../../component/Header/Header";
import styles from "./HotelsPage.module.scss"
import {Search} from "../../component/Search/Search";
import {FavHotels} from "../../component/FavHotels/FavHotels";
import {HotelsCard} from "../../component/HotelsCard/HotelsCard";

export function HotelsPage() {
  return (
    <>
      <Header/>
      <div className={styles.pageContainer}>
        <div className={styles.cardsContainer}>
          <Search/>
          <FavHotels/>
        </div>
        <HotelsCard/>
      </div>
    </>
  )
}