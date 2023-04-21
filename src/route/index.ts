import { LoginPage } from "../page/LoginPage/LoginPage";
import { HotelsPage } from "../page/HotelsPage/HotelsPage";
import React from "react";

export interface IRoute {
  path: string;
  component: () => React.ReactElement;
}

export enum RouteNames {
  HOTELS = "/hotels",
  LOGIN = "/login",
}

export const authorizedRoutes: IRoute[] = [
  { path: RouteNames.HOTELS, component: HotelsPage },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: LoginPage },
];