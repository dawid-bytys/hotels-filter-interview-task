import { fetchHotels, fetchRooms } from '../api/fetchData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { HotelData } from '../utils/types';

type QueriesState =
  | { action: 'loading' }
  | { action: 'error'; error: string }
  | { action: 'success'; data: HotelData[] };

export const useFetchQueries = () => {
  const [queriesState, setQueriesState] = useState<QueriesState>({
    action: 'loading',
  });

  useEffect(() => {
    const performFetchingData = async () => {
      try {
        const hotels = await fetchHotels();
        const roomsRequests = hotels.map(hotel => {
          return fetchRooms(hotel);
        });
        const hotelsWithRooms = await Promise.all(roomsRequests);

        setQueriesState({
          action: 'success',
          data: hotelsWithRooms,
        });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setQueriesState({
            action: 'error',
            error: `Error: ${err.response?.data.error}`,
          });
        }
      }
    };

    if (queriesState.action === 'loading') {
      void performFetchingData();
    }
  });

  return queriesState;
};
