export interface IUser {
  email: string,
  password: string
}

export interface IHotel {
  stars: number,
  hotelId: number,
  hotelName: string,
  priceAvg: number,
  priceFrom: number,
  location: {
    state: string | null,
    country: string,
    name: string,
  }
  isFav: boolean
}