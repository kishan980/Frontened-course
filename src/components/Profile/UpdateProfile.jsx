import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const UpdateProfile = () => {
    const [name, setName]=useState("");
    const [email, setEmail] = useState("")
  return (
    <Container py="16" minH={'90vh'}>
      <form>
        <Heading
        textTransform={'uppercase'}
          children="change Profile"
          my="16"
          textAlign={['center', 'left']}
        >
         
        </Heading>
        <VStack spacing={'8'}>
        <Input
          type={"text"}
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter the name"
          focusBorderColor='yellow.500'
        />
        <Input
        type={"email"}
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter the email"
        focusBorderColor='yellow.500'
      />
      <Button w="full" colorScheme={"yellow"} type="submit">Change</Button>
      </VStack>
      </form>
    </Container>
  )
}

export default UpdateProfile