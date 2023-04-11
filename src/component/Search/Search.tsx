import React, {ForwardedRef, forwardRef, useState} from 'react'
import styles from "./Search.module.scss"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchHotels} from "../../features/hotel/hotelAPI";
import {hotelSlice} from "../../features/hotel/hotelSlice";

type FormValues = {
  formLocation: string;
  formDays: number
};

export function Search() {
  const {location, checkIn, daysCount} = useAppSelector(state => state.hotels)
  const [startDate, setStartDate] = useState(checkIn)
  const dispatch = useAppDispatch()
  const {setHotels} = hotelSlice.actions
  const {register, handleSubmit} = useForm<FormValues>({
    defaultValues: {
      formDays: daysCount,
      formLocation: location
    }});

  const onSubmit = async (data: FormValues) => {
    // const newDate = (daysCount <= 31)
    //   ? new Date(checkIn.setDate(checkIn.getDate() + daysCount))
    //   : new Date(checkIn.setMonth(checkIn.getMonth() + daysCount / 30))

    console.log(data.formDays)
    let newDate = new Date(startDate.setDate(startDate.getDate() + data.formDays))
    console.log(newDate)
    fetchHotels(data.formLocation, startDate, newDate)
      .then((hotels) => dispatch(setHotels(hotels)))
  }

  const ExampleCustomInput =
    forwardRef(({value, onClick}: {
                  value: string,
                  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
                },
                ref: ForwardedRef<HTMLButtonElement>) => (
      <button className={styles.datePicker} ref={ref} value={value} onClick={onClick}>
        {value}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z"
            fill="black" fillOpacity="0.48"/>
          <path fillRule="evenodd" clipRule="evenodd"
                d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
                fill="black" fillOpacity="0.48"/>
        </svg>
      </button>
    ));

  return (
    <div className={styles.searchCard}>
      <form onSubmit={handleSubmit(onSubmit)} id="external-form">
        <div className={styles.textField}>
          <label htmlFor="location">Локация</label>
          <input
            id="location"
            {...register("formLocation", {
              required: "required",
            })}
            type="text"
          />
        </div>
        <div className={styles.textField}>
          <label htmlFor="datepicker">Дата заселения</label>
          <DatePicker
            id="datepicker"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            customInput={React.createElement(ExampleCustomInput)}
          />
        </div>
        <div className={styles.textField}>
          <label htmlFor="days">Количество дней</label>
          <input
            id="days"
            {...register("formDays", {
              required: "required",
            })}
            type="number"
          />
        </div>
        <button type="submit" className={styles.searchButton}>Найти</button>
      </form>
    </div>
  )
}