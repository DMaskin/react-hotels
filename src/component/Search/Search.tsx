import React, { FormEvent, ForwardedRef, forwardRef, useState } from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import ru from "date-fns/locale/ru" // the locale you want
import { useAppDispatch } from "../../app/hooks"
import { fetchHotelsRoutine } from "../../features/hotel/hotelSlice"
import { addDays } from "../../util/util"
import calendarIcon from "../../asset/search/calendar.svg"
import styles from "./Search.module.scss"
import "react-datepicker/dist/react-datepicker.css"

registerLocale("ru", ru)

// interface FormFields {
//
// }

export function Search() {
  const [date, setDate] = useState(new Date())
  const [loc, setLoc] = useState("Москва")
  const [days, setDays] = useState(1)
  const dispatch = useAppDispatch()

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const newDate = addDays(date, days)
    dispatch(
      fetchHotelsRoutine({
        location: loc,
        checkIn: date,
        checkOut: newDate,
        days,
      })
    )
  }

  const CustomInput = forwardRef(
    (
      {
        value,
        onClick,
      }: {
        value: string
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
      },
      ref: ForwardedRef<HTMLButtonElement>
    ) => (
      <button
        className={styles.datePicker}
        ref={ref}
        value={value}
        onClick={(e) => {
          e.preventDefault()
          onClick(e)
        }}
      >
        {value}
        <img src={calendarIcon} alt="" />
      </button>
    )
  )
  CustomInput.displayName = "CustomInput"

  return (
    <div className={styles.searchCard}>
      <form onSubmit={onSubmit} id="external-form">
        <div className={styles.textField}>
          <label htmlFor="location">Локация</label>
          <input type="text" value={loc} onChange={(e) => setLoc(e.target.value)} />
        </div>
        <div className={styles.textField}>
          <label htmlFor="datepicker">Дата заселения</label>
          <DatePicker
            id="datepicker"
            locale="ru"
            selected={date}
            minDate={new Date()}
            maxDate={addDays(new Date(), 90)}
            onChange={(date: Date) => setDate(date)}
            customInput={React.createElement(CustomInput)}
          />
        </div>
        <div className={styles.textField}>
          <label htmlFor="days">Количество дней</label>
          <input id="days" type="number" value={days} onChange={(e) => setDays(Number(e.target.value))} />
        </div>
        <button type="submit" className={styles.searchButton}>
          Найти
        </button>
      </form>
    </div>
  )
}
