"use client";
import { Box, SimpleGrid } from "@chakra-ui/react";

export const SemaVideos: React.FC = () => {
  return (
    <Box py={{ base: 8, md: 12 }} px={{ base: 6, md: 8 }} textAlign="center">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {/* Video 1 */}
        <Box
          as="iframe"
          width="100%"
          height="315px"
          src="https://www.youtube.com/embed/fMEZdNodGM0?si=IlUjiPfkpAgR6JSW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* Video 2 */}
        <Box
          as="iframe"
          width="100%"
          height="315px"
          src="https://www.youtube.com/embed/wXjQHAxopzk?si=JSiYqIY9gMX4Cf3D"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </SimpleGrid>
    </Box>
  );
};
