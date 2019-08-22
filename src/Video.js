import React from 'react';
import { Box } from 'rebass';

export function Video({ src, type }) {
  return (
    <Box
      sx={{
        my: 3,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        '& > video': {
          width: '100%',
        },
      }}
    >
      <video controls autoPlay playsInline muted>
        <source src={src} type={type} />
      </video>
    </Box>
  );
}
