import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const[newPassword, setNewPassword]= useState("")
  return (
    <Container py="16" minH={'90vh'}>
      <form>
        <Heading
        textTransform={'uppercase'}
          children="Change Password"
          my="16"
          textAlign={['center', 'left']}
        >
         
        </Heading>
        <VStack spacing={'8'}>
        <Input
          type={"password"}
          required
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
          placeholder="Enter the old password"
          focusBorderColor='yellow.500'
        />
        <Input
        type={"password"}
        required
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        placeholder="Enter the New password"
        focusBorderColor='yellow.500'
      />
      <Button w="full" colorScheme={"yellow"} type="submit">Change</Button>
      </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
