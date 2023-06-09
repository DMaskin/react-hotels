import { call, put, takeLatest } from "redux-saga/effects"
import { fetchHotels } from "../hotel/hotelAPI"
import { PayloadAction } from "@reduxjs/toolkit"
import { fetchHotelsRoutine } from "../hotel/hotelSlice"
import { dateToString } from "../../util/util"
import { IHotel } from "../../model"

interface FetchArgs {
  location: string
  checkIn: Date
  checkOut: Date
  days: number
}

function* fetchHotelsWorker(action: PayloadAction<FetchArgs>) {
  const { location, checkIn, checkOut, days } = action.payload
  const { request, success, failure, fulfill } = fetchHotelsRoutine

  try {
    yield put(request())
    const hotels: IHotel[] = yield call(async () => await fetchHotels(location, checkIn, checkOut))
    const checkInStr = dateToString(checkIn, 2)
    yield put(success({ hotels, location, checkIn: checkInStr, days }))
  } catch (e) {
    yield put(failure(e))
  } finally {
    yield put(fulfill())
  }
}

export function* fetchHotelsWatcher() {
  yield takeLatest(fetchHotelsRoutine.TRIGGER, fetchHotelsWorker)
}
