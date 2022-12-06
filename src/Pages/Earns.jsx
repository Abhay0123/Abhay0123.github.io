import { Image, Box, SimpleGrid, Text } from "@chakra-ui/react";
import Zmc from "./Zmc.jpg";
import JsBasic from "./JsBasic.jpg";
import CSS from "./CSS.png";
const Earns = () => {
  return (
    <>
      <Text fontSize="5xl" as="b" className="earns">
        Certificates
      </Text>
      <SimpleGrid
        columns={[2, null, 2]}
        spacing="40px"
        padding="60px"
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
    </>
  );
};
export default Earns;
