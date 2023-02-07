import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import cursor from '../../../assets/images/cursor.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import dataImage from '../../../assets/images/cursor.png';
import CourseModel from './CourseModel';
const AdminCourses = () => {
  const courses = [
    {
      _id: '324234',
      title: 'kishan',
      category: 'user',
      poster: { url: dataImage },
      createdBy: 'kishan@gmail.com',
      views: 123,
      numOfVideos: 12,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();
  const coursesDetailsHandler = userId => {
    onOpen();
  };

  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  const deleteLectureHandler = (courseId, lectureId) => {
    console.log(
      '🚀 ~ file: AdminCourses.jsx:46 ~ deleteLectureHandler ~ courseId,lectureId',
      courseId,
      lectureId
    );
  };

  const addLectureHandler = (e, title,courseId, description, video) =>{
 e.preventDefault()
  }

  return (
    <Grid
      className="cursor"
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflow="auto">
        <Heading
          textTransform={'uppercase'}
          children="all User"
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  coursesDetailsHandler={coursesDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  item={item}
                  key={item._id}
                />
              ))}
            </Tbody>
          </Table>
          <CourseModel
            isOpen={isOpen}
            onClose={onClose}
            id={'djfbhsdjhkfdhj'}
            courseTitle={"react course"}
            deleteLectureHandler={deleteLectureHandler}
            addLectureHandler={addLectureHandler}
            lecture
          />
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

function Row({ item, coursesDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td width="100px">
        <Image src={item.poster.url} alt="not found img" />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td>{item.views}</Td>
      <Td>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => coursesDetailsHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            Views Lectures
          </Button>
          <Button
            color={'purple.600'}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
