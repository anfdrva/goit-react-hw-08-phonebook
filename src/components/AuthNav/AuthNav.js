import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Box display="flex" marginBottom="10px">
      <NavLink to="/register">
        <Text
          backgroundColor="#ffffff"
          marginLeft="15px"
          marginRight="10px"
          fontSize="large"
          border="2px solid #B345FE"
          padding="10px"
          borderRadius="md"
          _hover={{
            backgroundColor: '#B345FE',
            color: '#ffffff',
          }}
        >
          Register
        </Text>
      </NavLink>
      <NavLink to="/login">
        <Text
          backgroundColor="#ffffff"
          width="85px"
          textAlign="center"
          fontSize="large"
          border="2px solid #B345FE"
          padding="10px"
          borderRadius="md"
          _hover={{
            backgroundColor: '#B345FE',
            color: '#ffffff',
          }}
        >
          Log In
        </Text>
      </NavLink>
    </Box>
  );
};