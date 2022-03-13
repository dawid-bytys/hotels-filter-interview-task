import { Flex, IconButton, useColorModeValue } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

interface StarRatingProps {
  readonly updateFilters: (newValue: number, name: string) => void;
}

/*
 * There are plenty of out of the box star rating components on the Internet
 * but I wanted to do it myself
 */
export const StarRating = ({ updateFilters }: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const { width } = useWindowDimensions();
  const emptyStarColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');

  const handleStarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    updateFilters(+e.currentTarget.value, e.currentTarget.name);
    setRating(+e.currentTarget.value);
  };

  return (
    <Flex direction="row">
      {[...Array(5)].map((_, idx) => {
        const ratingValue = idx + 1;

        return (
          <IconButton
            aria-label="Set star rating"
            name="starRating"
            value={ratingValue}
            icon={
              <StarIcon
                color={ratingValue <= rating ? 'yellow.400' : emptyStarColor}
                fontSize={['1.3rem', '1.4rem', '1.6rem']}
              />
            }
            key={idx}
            size={width && width < 768 ? 'xs' : 'md'}
            mr="0.1rem"
            bgColor="transparent"
            onClick={handleStarClick}
            _hover={{ bgColor: 'transparent' }}
          ></IconButton>
        );
      })}
    </Flex>
  );
};
