import { Box, Text, Heading, useColorModeValue, Flex } from '@chakra-ui/react';

interface RoomCardProps {
  readonly name: string;
  readonly maxAdults: number;
  readonly maxChildren: number;
  readonly description: string;
}

export const RoomCard = (props: RoomCardProps) => {
  const roomCardBgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');

  return (
    <Flex
      direction="column"
      bgColor={roomCardBgColor}
      borderRadius="1rem"
      p={['2rem', '2rem', '3rem']}
      mt={['2rem', '2rem', '3rem']}
      fontWeight={500}
      fontSize={['.9rem', '.9rem', '1.1rem']}
    >
      <Box>
        <Heading
          as="h3"
          fontWeight={600}
          fontSize={['1.1rem', '1.1rem', '1.3rem']}
        >
          {props.name}
        </Heading>
        <Text pt=".5rem">Adults: {props.maxAdults}</Text>
        <Text>Children: {props.maxChildren}</Text>
      </Box>
      <Box flexGrow={1} textAlign="justify" pt="2rem">
        {props.description}
      </Box>
    </Flex>
  );
};
