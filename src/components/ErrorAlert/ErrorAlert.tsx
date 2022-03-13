import { Center, Alert } from '@chakra-ui/react';

interface ErrorAlertProps {
  readonly error: string;
}

export const ErrorAlert = ({ error }: ErrorAlertProps) => {
  return (
    <Center>
      <Alert
        status="error"
        borderRadius="1rem"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        fontWeight={500}
        mt="4rem"
      >
        {error}
      </Alert>
    </Center>
  );
};
