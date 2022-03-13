import { BASE_API_HOTELS_URL, BASE_API_ROOMS_URL } from '../utils/constants';
import type { Hotel, HotelData, Rooms } from '../utils/types';
import axios from 'axios';

// TypeScript infered types here but I wanted to make sure the returned data has correct type
export const fetchHotels = async (): Promise<Hotel[]> => {
  const { data } = await axios.get<Hotel[]>(BASE_API_HOTELS_URL);

  return data;
};

export const fetchRoomsAndSerialize = async (
  hotel: Hotel,
): Promise<HotelData> => {
  const { data } = await axios.get<Rooms>(BASE_API_ROOMS_URL + hotel.id);

  return {
    name: hotel.name,
    address1: hotel.address1,
    address2: hotel.address2,
    starRating: +hotel.starRating,
    images: hotel.images,
    rooms: data.rooms.map(room => ({
      name: room.name,
      description: room.longDescription,
      maxAdults: +room.occupancy.maxAdults,
      maxChildren: +room.occupancy.maxChildren,
    })),
  };
};
