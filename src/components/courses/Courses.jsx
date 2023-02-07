import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/study.jpg";
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={img} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
        children={title }
      />
      <Text
        noOfLines={3}
        children={description }
      />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`lecture-:${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        textAlign={'center'}
        size="xs"
        children={`views:${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch New</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlayListHandler(id)}
        >
          Add to playList
        </Button>
      </Stack>
    </VStack>
  );
};
const Courses = () => {
  const [keyword, setKeyWord] = useState();
  const [category, setCategory] = useState();
  const addToPlayListHandler = () =>{

  }
  const categories = [
    'Web development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'App development',
    'Data science',
    'Game development',
  ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Course" m={"8"} />
      <Input
        type="text"
        value={keyword}
        onChange={e => setKeyWord(e.target.value)}
        placeholder="Search a course"
        focusBorderColor="yellow.500"
      />

      <HStack
        overflow={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((items, index) => (
          <Button minW={'60'} key={index} onClick={() => setCategory(items)}>
            <Text children={items} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course  
        title={'simple'}
        description={'simple'}
        views={23}
        imageSrc={'simple'}
        id={`simple`}
        creator={'simple boy'}
        lectureCount={2}
        addToPlayListHandler={addToPlayListHandler}
            
        />
      </Stack>
    </Container>
  );
};

export default Courses;
