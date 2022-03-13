import axios from 'axios';
import { BASE_API_HOTELS_URL, BASE_API_ROOMS_URL } from '../utils/constants';
import type { Hotel, Rooms } from '../utils/types';

export const fetchHotels = async () => {
  const { data } = await axios.get<Hotel[]>(BASE_API_HOTELS_URL);

  return data;
};

export const fetchRooms = async (hotel: Hotel) => {
  const { data } = await axios.get<Rooms>(BASE_API_ROOMS_URL + hotel.id);

  return {
    id: hotel.id,
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
