import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Box
        paddingTop="20px"
        backgroundImage="linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4))"
    >
      <Helmet>
        <title>Save Contacts</title>
      </Helmet>
      <Text
          height="100%"
          textAlign="center"
          margin="15px"
          fontWeight="bold"
          color="black"
          fontSize="24px"
      >
         I am glad to welcome you to the phone book application!
        <div>Keep your contacts safe!</div>
      </Text>
    </Box>
  );
}