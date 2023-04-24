import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { authorizedRoutes, publicRoutes, RouteNames } from "../route"
import { useAppSelector } from "../app/hooks"
import { selectIsAuth } from "../features/auth/authSlice"

export function AppRouter() {
  const isAuth = useAppSelector(selectIsAuth)

  return isAuth ? (
    <Routes>
      {authorizedRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOTELS} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  )
}
