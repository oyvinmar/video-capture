import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from 'rebass';
import { getAllVideos } from './db';
import { VideoList } from './VideoList';
import { Video } from './Video';
import { CaptureVideo } from './CaptureVideo';
import { Header } from './Header';

export function Main() {
  let [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
    async function loadVideos() {
      const all = await getAllVideos();
      setVideos(all);
    }
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
          py: 4,
        }}
      >
        <CaptureVideo setVideos={setVideos} />
        <VideoList videos={videos}></VideoList>
      </Box>
    </>
  );
}
