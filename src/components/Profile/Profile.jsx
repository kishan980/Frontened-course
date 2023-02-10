import {
  Avatar,
  Container,
  Heading,
  HStack,
  Stack,
  VStack,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import study from '../../assets/images/study.jpg';
import { fileUploadCss } from './../Auth/register/Register';
// tuje abhi chye kya ?haaaaaaa bas me ker key api hai oo coll karu ga yaha p
const user = {
  name: 'kishan yadav',
  email: 'kishany980@gmail.com',
  createdAt: String(new Date().toISOString()),
  role: 'user',
  subscription: {
    status: 'active',
  },
  playlist: [
    {
      course: '32847r363785',
      poster: study,
    },
  ],
};

const removeFormPlaylistHandler = id => {
  console.log(id);
};

const changeImageSubmitHandler = (e,image) =>{
e.preventDefault();
console.log(image)

}

const Profile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <button colorScheme={'yellow'} variant="ghost" onClick={onOpen}>
            Change photo
          </button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="createdAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          <HStack>
            {user.role !== 'admin' && (
              <HStack>
                <Text children="Subscription" fontWeight={'bold'} />
                {user.subscription.status === 'active' ? (
                  <Button colorScheme={'yellow'}>
                    Cancel Button subscription
                  </Button>
                ) : (
                  <Button colorScheme={'yellow'}>
                    <Link to="/Subscribe" />
                    Subscribe
                  </Button>
                )}
              </HStack>
            )}
          </HStack>

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateProfile">
              <Button>Update Profile</Button>
            </Link>

            <Link to="/changePassword">
              <Button>Change password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="playlist" size={'md'} my="8" />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap="wrap"
          p="4"
        >
          {user.playlist.map((element, index) => (
            <VStack w="48" m="2" key={element.course}>
              <Image
                boxSize={'full'}
                objectFit="contain"
                src={element.poster}
              />

              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFormPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = ()=>{
    onClose();
    setImage("")
    setImagePrev("")
  }
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
      <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Container>
            <form onSubmit={(e) =>changeImageSubmitHandler(e,image)}>
              <VStack spacing={'8'}>
                {imagePrev ? (
                  <Avatar boxSize={'48'} src={imagePrev} />
                ) : (
                  <Avatar boxSize={'48'} />
                )}

                <input
                  type={'file'}
                  css={{ '&:file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />
                <Button w="full" colorScheme={'yellow'} type="submit">
                 Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
