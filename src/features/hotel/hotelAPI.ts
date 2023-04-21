import axios from "axios";

const baseURl = process.env.REACT_APP_URL;

export async function fetchHotels(
  location = "Moscow",
  checkIn = new Date(),
  checkOut = new Date(),
  limit = 10
) {
  const cin = checkIn.toISOString().split("T")[0];
  const cout = checkOut.toISOString().split("T")[0];
  const { data } = await axios.get(
    `${baseURl}location=${location}&currency=rub&checkIn=${cin}&checkOut=${cout}&limit=${limit}`
  );
  return data;
}