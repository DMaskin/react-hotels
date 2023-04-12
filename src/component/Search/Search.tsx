import React, {FormEvent, ForwardedRef, forwardRef, useState} from 'react'
import DatePicker from "react-datepicker"
import {useAppDispatch} from "../../app/hooks";
import {fetchHotels} from "../../features/hotel/hotelAPI";
import {hotelSlice} from "../../features/hotel/hotelSlice";
import {addDays} from "../../util/util";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../asset/calendar.svg"
import styles from "./Search.module.scss"

export function Search() {
  const [date, setDate] = useState(new Date())
  const [loc, setLoc] = useState("Москва")
  const [days, setDays] = useState(1)
  const dispatch = useAppDispatch()
  const {setHotels, setDaysCount, setCheckIn, setLocation} = hotelSlice.actions

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    let newDate = addDays(date, days)

    fetchHotels(loc, date, newDate)
      .then((hotels) => {
        dispatch(setHotels(hotels))
        dispatch(setCheckIn(date))
        dispatch(setDaysCount(days))
        dispatch(setLocation(loc))
      })
  }

  const ExampleCustomInput =
    forwardRef(({value, onClick}: {
                  value: string,
                  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
                },
                ref: ForwardedRef<HTMLButtonElement>) => (
      <button className={styles.datePicker} ref={ref} value={value}
              onClick={(e) => {e.preventDefault(); onClick(e)}}>
        {value}
        <img src={calendarIcon} alt=""/>
      </button>
    ));

  return (
    <div className={styles.searchCard}>
      <form onSubmit={onSubmit} id="external-form">
        <div className={styles.textField}>
          <label htmlFor="location">Локация</label>
          <input type="text"
                 value={loc}
                 onChange={e => setLoc(e.target.value)}
          />
        </div>
        <div className={styles.textField}>
          <label htmlFor="datepicker">Дата заселения</label>
          <DatePicker
            id="datepicker"
            selected={date}
            onChange={(date: Date) => setDate(date)}
            customInput={React.createElement(ExampleCustomInput)}
          />
        </div>
        <div className={styles.textField}>
          <label htmlFor="days">Количество дней</label>
          <input id="days"
                 type="number"
                 value={days}
                 onChange={(e) => setDays(Number(e.target.value))}/>
        </div>
        <button type="submit" className={styles.searchButton}>Найти</button>
      </form>
    </div>
  )
}