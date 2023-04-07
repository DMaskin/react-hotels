import React from 'react'
import {Header} from "../../component/Header/Header";
import styles from "./HotelsPage.module.scss"
import {SearchCard} from "../../component/SearchCard/SearchCard";

export function HotelsPage() {
  return (
    <>
      <Header/>
      <div className={styles.pageContainer}>
        <div className={styles.cardsContainer}>
          <SearchCard/>
        </div>
      </div>
    </>
  )
}