import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h="90vh" p="16">
      <Heading my="8" textAlign={'center'}>
        You have Pro pack
      </Heading>
      <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
        <Box
          w="full"
          bg="yellow.400"
          p="4"
          css={{ borderRadius: '8px 8px  0 0' }}
        >
          <Text color={'black'}>Payment success</Text>
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>
              Congratulation you're a pro member . you have access to premium
              content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
            <Link to="/profile">
              <Button variant={'ghost'}>Go to profile</Button>
              <Heading size={"xs"}>Reference:okay</Heading>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
