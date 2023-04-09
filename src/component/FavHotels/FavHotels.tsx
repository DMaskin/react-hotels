import React from 'react'
import styles from "./FavHotels.module.scss"
import {SmallHotel} from "../SmallHotel/SmallHotel";

export function FavHotels() {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Избранное</h2>
      </div>
      <div className={styles.buttonBlock}>
        <button>
          Рейтинг
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7.24264L12.4393 8.3033L9.25736 5.12132L6.07538 8.3033L5.01472 7.24264L9.25736 3L13.5 7.24264Z" fill="#41522E"/>
            <path d="M13.5 10.8324L12.4393 9.77179L9.25736 12.9538L6.07538 9.77179L5.01472 10.8324L9.25736 15.0751L13.5 10.8324Z" fill="#41522E" fillOpacity="0.3"/>
          </svg>
        </button>
        <button>
          Цена
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7.24264L12.4393 8.3033L9.25736 5.12132L6.07538 8.3033L5.01472 7.24264L9.25736 3L13.5 7.24264Z" fill="black" fillOpacity="0.32"/>
            <path d="M13.5 10.8325L12.4393 9.77181L9.25736 12.9538L6.07538 9.77181L5.01472 10.8325L9.25736 15.0751L13.5 10.8325Z" fill="black" fillOpacity="0.32"/>
          </svg>
        </button>
      </div>
      <div className={styles.hotelsBlock}>
        <SmallHotel/>
        <div className={styles.separator}/>
        <SmallHotel/>
        <div className={styles.separator}/>
        <SmallHotel/>
      </div>
    </div>
  )
}