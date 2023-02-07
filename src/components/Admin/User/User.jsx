import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import cursor from '../../../assets/images/cursor.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const User = () => {
  const users = [
    {
      _id: '324234',
      name: 'kishan',
      role: 'user',
      subscription: { status: 'active' },
      email: 'kishan@gmail.com',
    },
  ];

  const updateHandler = userId =>{
    console.log(userId)
  }

  const deleteButtonHandler = userId =>{
    console.log(userId)
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
      <Box p={["0","16"]} overflow="auto">
        <Heading
          textTransform={'uppercase'}
          children="all User"
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available user in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row  updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} item={item} key={item._id} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default User;

function Row({item, updateHandler, deleteButtonHandler}) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription.status === 'active' ? 'Active' : 'not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=> updateHandler(item._id)} variant={'outline'} color="purple.500">
            Change Role
          </Button>
          <Button color={'purple.600'} onClick={()=> deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
