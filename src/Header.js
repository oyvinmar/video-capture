import React from 'react';
import { Box, Text } from 'rebass';

export function Header() {
  return (
    <Box
      p="4"
      bg="primary"
      color="white"
      sx={{
        boxShadow: '0 0 2px 0 rgba(0,0,0,.24), 0 4px 4px 0 rgba(0,0,0,.12);',
      }}
    >
      <Text as="h1">Vidappture</Text>
    </Box>
  );
}
