import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { ImFolderDownload } from "react-icons/im";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <Box  id="home">
      <Box Box mt={["6px", "10px", "20px", "30px"]} p="5px">
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={10}>
          <Box mt={["12px", "30px", "40px", "50px"]}>
            <Box margin="auto">
            <Box
              
              className="about-H"
              fontSize={["2xl", "3xl", "4xl", "5xl"]}
               >
            <Typewriter
            words={["Hi there,I'm Abhay Kumar"]}
            loop={5000000000}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
          />
         
            </Box>

            </Box>
            <Box mt={["12px", "20px", "30px", "40px"]}>
              
              <Text fontSize={["lg", "xl", "2xl", "2xl"]} as="b">
              Software Development Engineer in Test
              </Text>
            </Box>
            <Box>
             
              <Text
                fontSize={["md", "lg", "2xl", "2xl"]}
                as="i"
                fontWeight="400"
              >
               
                <br />
                Dynamic and enthusiastic SDET. To take the challenging role as an SDET and utilize my skills to create an effective test automation framework.
              </Text>
            </Box>

            <Box display={['grid' ,'flex','flex' ,'flex']}>
           
            <Box><Button id="resume-button-2" colorScheme="cyan" color='white'  height='48px' width='200px'  mt="30px" size="xl" rightIcon={<ImFolderDownload size="30px"/>}>
              <a id="resume-link-2" href="https://drive.google.com/file/d/1g2MdmOHk5ezX1fMlr60k3fDVSe0KzRxO/view?usp=share_link" download>
               Resume</a>
              </Button>
            </Box></Box>
          </Box>

          <Box className="landingPage">
            <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/man-working-in-office-4938654-4122865.png"></Image>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
