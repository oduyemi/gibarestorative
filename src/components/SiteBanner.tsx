"use client";
import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";

interface BannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  backgroundImage: string;
}

export const SiteBanner: React.FC<BannerProps> = ({ title, breadcrumbs, backgroundImage }) => {
  return (
    <Box
      as="section"
      position="relative"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      py={{ base: 24, md: 32 }}
      color="white"
    >
      {/* Overlay for Readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bgGradient="linear(to-r, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))"
      />

      <Box position="relative" maxW="6xl" mx="auto" px={6}>
        <Flex direction="column" align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }}>
          {/* Breadcrumb Navigation */}
          <Text fontSize="sm" opacity={0.9} mb={2}>
            {breadcrumbs.map((crumb, index) => (
              <Text as="span" key={index}>
                {crumb.href ? (
                  <Link href={crumb.href} _hover={{ textDecoration: "underline", color: "yellow.400" }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <Text as="span" fontWeight="bold" color="yellow.300">
                    {crumb.label}
                  </Text>
                )}
                {index < breadcrumbs.length - 1 && " / "}
              </Text>
            ))}
          </Text>

          {/* Page Title */}
          <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" letterSpacing="wide">
            {title}
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};
