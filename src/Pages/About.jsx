import MySelf from "./MySelf.jpg";

import { SimpleGrid, Box, Image, Heading, Text } from "@chakra-ui/react";
import Github from "./Github";
const About = () => {
  return (
    <>
      <Text className="about" fontSize="5xl" as="b">
        About me
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        <Box boxSize="sm" m="80px">
          <Image
            src={MySelf}
            alt="AbhayKumar"
            w="300px"
            borderRadius="20px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          />
        </Box>
        <Box> </Box>
      </SimpleGrid>
      <Heading className="text">GitHub Status</Heading>
      {/* <Box
        widht="700px"
        height="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid red"
      >
        <Github />
      </Box> */}
    </>
  );
};
export default About;
