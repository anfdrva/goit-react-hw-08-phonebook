import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box display="flex" alignItems="center" padding="15px">
      <NavLink to="/">
        <Box
          margin="10px"
          backgroundColor="#ffffff"
          as="button"
          p={3}
          color="black"
          fontWeight="bold"
          borderRadius="md"
          _hover={{
            backgroundColor: '#B345FE',
            color: '#ffffff',
          }}
        >
          Home
        </Box>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts">
          <Box
            backgroundColor="#ffffff"
            as="button"
            p={3}
            color="black"
            fontWeight="bold"
            borderRadius="md"
            mr="0"
            _hover={{
              backgroundColor: '#B345FE',
              color: '#ffffff',
            }}
          >
            Contacts
          </Box>
        </NavLink>
      )}
    </Box>
  );
};