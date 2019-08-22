import React, { useState } from 'react';
import { Box, Card, Flex, Button, Text } from 'rebass';

function createObjectURL(video) {
  let file = new Blob([video.data], { type: video.type });
  return URL.createObjectURL(file);
}

export function VideoItem({ video }) {
  let [preview, setPreview] = useState(false);

  function togglePreview() {
    setPreview(!preview);
  }

  return (
    <Card py={2}>
      <Flex onClick={togglePreview}>
        <Button bg="transparent" onClick={togglePreview}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </Button>
        <Box>
          <Text py={1}>Filnavn: {video.file.name}</Text>
          <Text color="muted">Size {video.file.size / 1000000} Mb</Text>
        </Box>
      </Flex>
      {preview && (
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
            <source src={createObjectURL(video)} type={video.file.type} />
          </video>
        </Box>
      )}
    </Card>
  );
}
