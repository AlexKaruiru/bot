import React from 'react';
import { Box, Center, Button } from '@chakra-ui/react';

const HomeScreen = () => {
  return (
    <Box p='4' minHeight='100vh' display='flex' flexDirection='column' alignItems='center'>
      {/* Title */}
      <Box my='4'>
        <h1>WhatsApp Bot Testing</h1>
      </Box>

      {/* Customer and Restaurant Login Buttons */}
      <Center my='4'>
        <Button as='a' href='/' colorScheme='blue' bg='blue.200' mr='4' borderRadius='60px'>
          Whatsapp 
        </Button>
        <Button as='a' href='/' colorScheme='blue' bg='blue.200' borderRadius='60px'>
          Web Chat
        </Button>
      </Center>
    </Box>
  );
};

export default HomeScreen;
