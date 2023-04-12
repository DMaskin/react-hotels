import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHotel} from "../../model";
import {dateToString} from "../../util/util";

export interface HotelState {
  error: string,
  isLoading: boolean
  hotels: IHotel[],
  favHotels: IHotel[],
  location: string,
  days: number,
  checkIn: string
}

const initialState: HotelState = {
  error: "",
  isLoading: false,
  hotels: [] as IHotel[],
  favHotels: [] as IHotel[],
  location: "Москва",
  days: 1,
  checkIn: dateToString(new Date(), 2)
}

export const hotelSlice = createSlice({
  name: "hotels",
  initialState: initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<IHotel[]>) => {
      state.hotels = action.payload.map(h => {
        return {
          stars: h.stars,
          hotelId: h.hotelId,
          hotelName: h.hotelName,
          priceAvg: h.priceAvg,
          priceFrom: h.priceFrom,
          location: {...h.location},
          isFav: false
        }
      })
    },
    setDaysCount: (state, action: PayloadAction<number>) => {
      state.days = action.payload
    },
    setCheckIn: (state, action:  PayloadAction<string>) => {
      state.checkIn = action.payload
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
    addToFav: (state, action: PayloadAction<IHotel>) => {
      const index = state.hotels.findIndex((h) => h.hotelId === action.payload.hotelId)
      const favHotel = {...state.hotels[index], isFav: true}
      state.hotels.splice(index, 1, favHotel)
      state.favHotels.splice(state.favHotels.length, 0, favHotel)
    },
    removeFromFav: (state, action: PayloadAction<number>) => {
      const favIndex = state.favHotels.findIndex((h) => h.hotelId === action.payload)
      state.favHotels.splice(favIndex, 1)
      const index = state.hotels.findIndex((h) => h.hotelId === action.payload)
      const notFav = {...state.hotels[index], isFav: false}
      state.hotels.splice(index, 1, notFav)
    }
  }
})

export default hotelSlice.reducer