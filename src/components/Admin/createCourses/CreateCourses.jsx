import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import cursor from '../../../assets/images/cursor.png';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};
const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};
const CreateCourses = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    'Web development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'App development',
    'Data science',
    'Game development',
  ];

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid
      className="cursor"
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box>
        <Container py="16">
          <form>
            <Heading
              textTransform={'uppercase'}
              children="Create course"
              my="16"
              textAlign={['center', 'left']}
            />
            <VStack m="auto" spacing={'8'}>
              <Input
                type="text"
                required
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
                focusBorderColor="purple.300"
                value={title}
              />
              <Input
                type="text"
                required
                placeholder="Description"
                onChange={e => setDescription(e.target.value)}
                focusBorderColor="purple.300"
                value={description}
              />
              <Input
                type="text"
                required
                value={createdBy}
                placeholder="Create name"
                onChange={e => setCreatedBy(e.target.value)}
                focusBorderColor="purple.300"
              />
              <Select
                focusBorderColor="purple.300"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="">Category</option>
                {categories.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>

              <Input
                type="file"
                required
                accept="image/*"
                focusBorderColor="purple.300"
                css={{
                  '&::file-selector-button': {
                    ...fileUploadStyle,
                    color: 'purple.300',
                  },
                }}
                onChange={changeImageHandler}
              />

              {imagePrev && (
                <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
              )}
              <Button w="full" colorScheme={'purple'} type="submit">
                Create Course
              </Button>
            </VStack>
          </form>
        </Container>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourses;
