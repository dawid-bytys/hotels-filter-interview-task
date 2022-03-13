import { Spinner, Center, useColorModeValue } from '@chakra-ui/react';

export const Loading = () => {
  const spinnerColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500');

  return (
    <Center flexGrow={1}>
      <Spinner color={spinnerColor} size="xl" speed="0.65s"></Spinner>
    </Center>
  );
};
