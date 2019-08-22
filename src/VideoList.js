import React from 'react';
import { Box } from 'rebass';
import { VideoItem } from './VideoItem';

export function VideoList({ videos }) {
  return (
    <Box>
      {videos.map((video, i) => (
        <VideoItem key={i} video={video}></VideoItem>
      ))}
    </Box>
  );
}
