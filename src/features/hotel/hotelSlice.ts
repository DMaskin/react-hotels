import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHotel} from "../../model";

export interface HotelState {
  error: string,
  isLoading: boolean
  hotels: IHotel[],
  favHotels: IHotel[],
  location: string,
  daysCount: number,
  checkIn: Date
}

const initialState: HotelState = {
  error: "",
  isLoading: false,
  hotels: [] as IHotel[],
  favHotels: [] as IHotel[],
  location: "Москва",
  daysCount: 1,
  checkIn: new Date()
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
  }
})

export default hotelSlice.reducer