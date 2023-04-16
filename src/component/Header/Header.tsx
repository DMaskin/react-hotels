import React from 'react'
import styles from "./Header.module.scss"
import {logoutRoutine} from "../../features/auth/authSlice";
import {useAppDispatch} from "../../app/hooks";
import {useNavigate} from "react-router-dom";
import door from "../../asset/header/door.svg"

export function Header() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleClick() {
    dispatch(logoutRoutine({navigate}))
  }

  return (
    <div className={styles.container}>
      <div className={styles.brandContainer}>
        <h1>Simple Hotel Check</h1>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick}>
          Выйти
          <img src={door} alt=""/>
        </button>
      </div>
    </div>
  )
}