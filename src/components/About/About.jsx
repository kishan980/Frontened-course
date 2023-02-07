import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import introVideo from '../../assets/videos/demo.mp4';
import React from 'react';
import abhiImage from '../../assets/images/25058652.jpg';
import { Link } from 'react-router-dom';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src={abhiImage} boxSize={['40', '48']} />
      <Text children="Co-founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Mr xxxxxx" size={['md', 'xl']} />
      <Text
        alignItems={['center', 'left']}
        children={`Hi, I am full stack developer `}
      />
    </VStack>
  </Stack>
);
const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & condition"
      textAlign={['center', 'left']}
      my="4"
    />
    <Box h="sm" p="4">
      <Text letterSpacing={'widest'} fontFamily={'heading'}>
        {termsAndCondition}
      </Text>
      <Heading my="4" size={"xs"} children="Refund only applicable for within 7 day" ></Heading>
    </Box>
  </Box>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      muted
      controls
      controlsList="nodownload  noremoteplayback nofullscreen"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />

      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={`termsAndCondition`} />
      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by RazorPay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
