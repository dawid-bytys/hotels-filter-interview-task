import {
  Box,
  Image,
  useColorModeValue,
  Flex,
  Text,
  Heading,
  Center,
  IconButton,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { StarIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { RoomCard } from '../RoomCard/RoomCard';
import { useWindowDimensions } from '../../utils/grabber';
import type { HotelData } from '../../utils/types';
import styles from './HotelCard.module.scss';
import 'swiper/css';
import 'swiper/css/effect-cards';

export const HotelCard = (props: HotelData) => {
  const { isOpen, onToggle } = useDisclosure();
  const { width } = useWindowDimensions();
  const hotelCardBgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.200');
  const emptyStarColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');
  const toggleRoomsBtnColor = useColorModeValue('purple', 'yellow');

  return (
    <Flex
      direction="column"
      bgColor={hotelCardBgColor}
      borderRadius="1rem"
      p={['2rem', '2rem', '3rem']}
      mt={['2rem', '2rem', '3rem', '4rem', '5rem']}
    >
      <Flex direction={['column', 'row']} w="100%">
        <Box>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={styles.swiper}
          >
            {props.images.map((image, idx) => {
              return (
                <SwiperSlide key={idx} className={styles.swiperSlide}>
                  <Image src={image.url} alt="Hotel image" boxSize="100%" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
        <Flex
          direction="column"
          flexGrow={1}
          pl={[0, '2rem', '3rem']}
          pt={['2rem', 0]}
          justifyContent={['space-between', 'initial']}
        >
          <Flex
            direction={['column', 'row']}
            justifyContent="space-between"
            pb={['1rem', 0]}
          >
            <Center justifyContent="initial">
              <Heading
                as="h2"
                fontWeight={600}
                fontSize={['1.1rem', '1.1rem', '1.3rem', '1.5rem']}
              >
                {props.name}
              </Heading>
            </Center>
            <Center justifyContent="initial" pt={['.5rem', 0]}>
              {[...Array(5)].map((_, idx) => (
                <StarIcon
                  key={idx}
                  fontSize={['1.1rem', '1.1rem', '1.3rem']}
                  ml=".2rem"
                  color={
                    idx < Number(props.starRating)
                      ? 'yellow.400'
                      : emptyStarColor
                  }
                />
              ))}
            </Center>
          </Flex>
          <Flex
            direction="column"
            pt={[0, '.5rem', '.5rem', '1rem']}
            fontWeight={500}
            fontSize={['1rem', '1rem', '1.1rem']}
          >
            <Text>{props.address1}</Text>
            {props.address2 && <Text>{props.address2}</Text>}
          </Flex>
          <Flex direction="row" justifyContent="flex-end" mt="auto">
            <IconButton
              aria-label="Toggle rooms"
              colorScheme={toggleRoomsBtnColor}
              icon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
              onClick={onToggle}
              size={width && width < 768 ? 'md' : 'lg'}
            ></IconButton>
          </Flex>
        </Flex>
      </Flex>
      {props.rooms.map((room, idx) => (
        <Collapse key={idx} in={isOpen} animateOpacity>
          <RoomCard {...room} />
        </Collapse>
      ))}
    </Flex>
  );
};
