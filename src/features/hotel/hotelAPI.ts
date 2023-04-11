import axios from "axios";

const baseURl = process.env.REACT_APP_URL

export async function fetchHotels(city = "Moscow", checkIn= new Date(),
                                  checkOut = new Date(), limit = 10) {
  const cin = checkIn.toISOString().split('T')[0]
  const cout = checkOut.toISOString().split('T')[0]
  const {data} = await axios.get(`${baseURl}location=${city}&currency=rub&checkIn=${cin}&checkOut=${cout}&limit=${limit}`)
  return data
}

//https://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-04-10&checkOut=2023-04-12&limit=10
//https://engine.hotellook.com/api/v2/lookup.json?location=Moscow&currency=rub&checkIn=2023-04-11&checkOut=2023-04-11&limit=3