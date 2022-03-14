import { Text, Flex } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { HotelCard, Loading } from '../../utils/grabber';
import { ErrorAlert, Filters, useFetchQueries } from '../../utils/grabber';
import { useState } from 'react';
import type { HotelData } from '../../utils/types';

interface FiltersState {
  starRating: number;
  maxAdults: number;
  maxChildren: number;
}

export const Home = () => {
  const request = useFetchQueries();
  const [filters, setFilters] = useState<FiltersState>({
    starRating: 0,
    maxAdults: 0,
    maxChildren: 0,
  });

  const updateFilters = (newValue: number, name: string) => {
    setFilters(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  // Firstly, filter hotels by starRating, then filter rooms
  const filterHotels = (data: HotelData[]) => {
    const filteredHotels = data
      .filter(hotel => hotel.starRating >= filters.starRating)
      .map(hotel => ({
        ...hotel,
        rooms: hotel.rooms.filter(
          room =>
            room.maxAdults >= filters.maxAdults &&
            room.maxChildren >= filters.maxChildren,
        ),
      }))
      .filter(hotel => hotel.rooms.length);

    // If there are any hotels which meet our filter criteria, display them
    if (filteredHotels.length) {
      return filteredHotels.map((hotel, idx) => (
        <HotelCard key={idx} {...hotel} />
      ));
    }

    // Otherwise, inform a user there are no hotels meeting theirs criteria
    return (
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
      >
        <WarningIcon fontSize="2rem" />
        <Text fontSize="1.3rem" pt="1rem">
          No results...
        </Text>
      </Flex>
    );
  };

  return (
    <Flex
      direction="column"
      as="main"
      flexGrow={1}
      p={[
        '0 2rem 2rem 2rem',
        '0 2rem 2rem 2rem',
        '0 3rem 3rem 3rem',
        '0 4rem 4rem 4rem',
        '0 25vw 5rem 25vw',
      ]}
    >
      {request.action === 'loading' && <Loading />}
      {request.action === 'error' && <ErrorAlert error={request.error} />}
      {request.action === 'success' && (
        <>
          <Filters {...filters} updateFilters={updateFilters} />
          {filterHotels(request.data)}
        </>
      )}
    </Flex>
  );
};
