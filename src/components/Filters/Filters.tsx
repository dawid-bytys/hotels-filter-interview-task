import {
  Flex,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import { StarRating } from '../StarRating/StarRating';

interface FiltersProps {
  updateFilters: (newValue: number, name: string) => void;
}

export const Filters = (props: FiltersProps) => {
  // Higher Order Function because I cannot access the name attribute via Chakra's onChange event
  const handleChange =
    (name: string) => (_valueAsString: string, valueAsNumber: number) => {
      props.updateFilters(valueAsNumber, name);
    };

  return (
    <Flex
      direction={['column', 'column', 'row']}
      justifyContent="space-between"
      mt={['3rem', '4rem', '5rem']}
      fontSize="1.1rem"
      fontWeight={500}
    >
      <StarRating updateFilters={props.updateFilters} />
      <Flex direction={['column', 'row']} mt={[0, '2rem', 0]}>
        <HStack m={['2rem 0', 0]}>
          <Text>Adults:</Text>
          <NumberInput
            size="md"
            maxW={20}
            defaultValue={0}
            min={0}
            max={10}
            onChange={handleChange('maxAdults')}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <HStack ml={[0, '2rem']}>
          <Text>Children:</Text>
          <NumberInput
            size="md"
            maxW={20}
            defaultValue={0}
            min={0}
            max={10}
            onChange={handleChange('maxChildren')}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
      </Flex>
    </Flex>
  );
};
