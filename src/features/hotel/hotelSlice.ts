import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IHotel, SortingProperty } from "../../model"
import { dateToString } from "../../util/util"
import { createRoutine } from "redux-saga-routines"
import { RootState } from "../../app/store"

export interface HotelState {
  error: string
  isLoading: boolean
  hotels: IHotel[]
  favHotels: IHotel[]
  location: string
  days: number
  checkIn: string
}

const initialState: HotelState = {
  error: "",
  isLoading: false,
  hotels: [] as IHotel[],
  favHotels: [] as IHotel[],
  location: "Москва",
  days: 1,
  checkIn: dateToString(new Date(), 2),
}

export const fetchHotelsRoutine = createRoutine("hotels/fetch")

interface FetchHotelsPayload {
  hotels: IHotel[]
  location: string
  checkIn: string
  days: number
}

export const hotelSlice = createSlice({
  name: "hotels",
  initialState: initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<IHotel[]>) => {
      state.hotels = action.payload.map((h) => {
        return {
          stars: h.stars,
          hotelId: h.hotelId,
          hotelName: h.hotelName,
          priceAvg: h.priceAvg,
          priceFrom: h.priceFrom,
          location: { ...h.location },
          isFav: false,
        }
      })
    },
    setDays: (state, action: PayloadAction<number>) => {
      state.days = action.payload
    },
    setCheckIn: (state, action: PayloadAction<string>) => {
      state.checkIn = action.payload
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
    addToFav: (state, action: PayloadAction<number>) => {
      const index = state.hotels.findIndex((h) => h.hotelId === action.payload)
      const favHotel = {
        ...state.hotels[index],
        isFav: true,
      }
      state.hotels.splice(index, 1, favHotel)
      state.favHotels.splice(state.favHotels.length, 0, favHotel)
    },
    removeFromFav: (state, action: PayloadAction<number>) => {
      const favIndex = state.favHotels.findIndex((h) => h.hotelId === action.payload)
      state.favHotels.splice(favIndex, 1)
      const index = state.hotels.findIndex((h) => h.hotelId === action.payload)
      const notFav = {
        ...state.hotels[index],
        isFav: false,
      }
      state.hotels.splice(index, 1, notFav)
    },
    sortFavHotelsByProperty: (
      state,
      action: PayloadAction<{
        property: SortingProperty
        isAscend: boolean
      }>
    ) => {
      const { property, isAscend } = action.payload
      isAscend
        ? (state.favHotels = [...state.favHotels.sort((a, b) => (a[property] < b[property] ? 1 : -1))])
        : (state.favHotels = [...state.favHotels.sort((a, b) => (a[property] > b[property] ? 1 : -1))])
    },
  },
  extraReducers: {
    [fetchHotelsRoutine.REQUEST]: (state) => {
      state.isLoading = true
    },
    [fetchHotelsRoutine.SUCCESS]: (state, action: PayloadAction<FetchHotelsPayload>) => {
      const { hotels, location, checkIn, days } = action.payload
      hotelSlice.caseReducers.setHotels(state, {
        ...action,
        payload: hotels,
      })
      hotelSlice.caseReducers.setCheckIn(state, {
        ...action,
        payload: checkIn,
      })
      hotelSlice.caseReducers.setDays(state, {
        ...action,
        payload: days,
      })
      hotelSlice.caseReducers.setLocation(state, {
        ...action,
        payload: location,
      })
    },
    [fetchHotelsRoutine.FAILURE]: (state, action) => {
      state.error = (action.payload as Error).message
    },
    [fetchHotelsRoutine.FULFILL]: (state) => {
      state.isLoading = false
    },
  },
})

export const { setDays, setLocation, setCheckIn, sortFavHotelsByProperty, setHotels, addToFav, removeFromFav } =
  hotelSlice.actions

export const selectError = (state: RootState) => state.hotels.error
export const selectIsLoading = (state: RootState) => state.hotels.isLoading
export const selectHotels = (state: RootState) => state.hotels.hotels
export const selectFavHotels = (state: RootState) => state.hotels.favHotels
export const selectDays = (state: RootState) => state.hotels.days
export const selectCheckIn = (state: RootState) => state.hotels.checkIn
export const selectLocation = (state: RootState) => state.hotels.location

export default hotelSlice.reducer
