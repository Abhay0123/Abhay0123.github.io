import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Zmc from "../Images/Zmc.jpg";
import JsBasic from "../Images/JsBasic.jpg";
import CSS from "../Images/CSS.png";
const Certificates = () => {
  return (
    <Box>
      <Box w="100%" align="center">
        <Text className="about-H" fontSize={["xl", "xl", "xl", "xl"]} as="b"  fontWeight='extrabold'>
          Certificates
        </Text>
      </Box>

      <SimpleGrid
        columns={[1, null, 3]}
        spacing="20px"
        padding="30px"
        className="certificate"
      >
        <Box>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={Zmc}
            alt="Zoom_marathon_challenge"
          />
        </Box>
        <Box>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={JsBasic}
            alt="Zoom_marathon_challenge"
          />
        </Box>
        <Box>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={CSS}
            alt="Zoom_marathon_challenge"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Certificates;
