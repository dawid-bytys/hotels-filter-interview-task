import { Flex } from '@chakra-ui/react';
import { Header, Home } from './utils/grabber';

export const App = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Home />
    </Flex>
  );
};
