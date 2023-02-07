import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h="90vh" p="16">
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
      <Heading textTransform={'uppercase'}>
          payment Fail
        </Heading>

        <Link to="/subscribe">
          <Button variant={'ghost'}>Try again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
