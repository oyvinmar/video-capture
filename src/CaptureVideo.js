import React from 'react';
import { css } from 'emotion';
import { Box, Button, Flex, Text } from 'rebass';
import { getAllVideos, storeVideo } from './db';

const inputStyle = css({
  width: '0.1px',
  height: '0.1px',
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  zIndex: '-1',
});

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
};

export function CaptureVideo({ setVideos }) {
  async function handleChange(e) {
    let file = e.target.files[0];
    await storeVideo(file);
    console.log('Video written to indexedDB');
    const all = await getAllVideos();
    setVideos(all);
  }

  return (
    <Flex justifyContent="space-between">
      <Box p={3}>
        <Button sx={buttonStyle} as="label">
          <Text>Record</Text>
          <input
            type="file"
            accept="video/*"
            capture
            onChange={handleChange}
            className={inputStyle}
          />
        </Button>
      </Box>
      <Box p={3}>
        <Button sx={buttonStyle} as="label">
          <input
            type="file"
            accept="video/*"
            onChange={handleChange}
            className={inputStyle}
          />
          Upload
        </Button>
      </Box>
    </Flex>
  );
}
