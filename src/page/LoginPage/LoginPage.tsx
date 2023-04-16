import React from 'react'
import styles from "./LoginPage.module.scss"
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../app/hooks";
import { loginRoutine} from "../../features/auth/authSlice";
import {useNavigate} from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

export function LoginPage() {
  const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data: { email: string, password: string }) => {
    dispatch(loginRoutine({data, navigate}))
  }

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
              required: "Обязательное поле",
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
              required: "Обязательное поле",
              pattern: {
                value: /^[^а-яё]+$/iu,
                message: "Пароль не может содержать символы кириллицы"
              },
              minLength: {
                value: 8,
                message: "Минимальная длина пароля должна составлять 8 символов"
              },
            })}
            type="password"
          />
          {errors.password && <span role="alert">{errors.password.message as string}</span>}
        </div>
        <button type="submit" className={styles.button}>Войти</button>
      </form>
    </div>
  )
}