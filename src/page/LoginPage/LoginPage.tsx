import React from 'react'

import styles from "./LoginPage.module.scss"
import {useForm} from "react-hook-form";

export function LoginPage() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  const onSubmit = () => {
    //
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.header}>Simple Hotel Check</p>
        <div className={styles.textField}>
          <label htmlFor="email">Логин</label>
          <input
            id="email"
            {...register("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Некорректный email"
              }
            })}
            type="email"
          />
          {errors.email && <span role="alert">{errors.email.message as string}</span>}
        </div>
        <div className={styles.textField}>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            {...register("password", {
              required: "required",
              minLength: {
                value: 8,
                message: "Минимальная длина пароля должна составлять 8 символов"
              }
            })}
            type="password"
          />
          {errors.password && <span role="alert">{errors.password.message as string}</span>}
        </div>
        <button className={styles.button}>Войти</button>
      </form>
    </div>
  )
}