import { Box, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Abhay from "../Images/Abhay.jpg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const About = () => {
  return (
    <Box  id="about" className="about section">
      <Box h="5px" bg="black"></Box>
      {/*================================================ About me section =====================================*/}
      <Box  w="100%" p="6px">
        <Box w="max-content" mb={["0px", "20px",'30px']} align="center" className="heading-hover" margin={'auto'}>
          <Text
            className="about-H"
            fontSize={["2xl", "2xl", "3xl", "4xl"]}
            as="b"
            fontWeight='extrabold'

          >
            About me
          </Text>
          <span className='underline-about'><span className='underline-about1'>Who i am</span></span>
          
        </Box>
       
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={10}>
          <Box
            fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "20px" }}
            mt={{ base: "30px", sm: "45px", md: "60px", lg: "0px" }}
            
          >
            <Text  id="user-detail-name"  as="sm" fontSize={["md", "lg", "2xl", "2xl"]}>
            
              Hello, my name is Abhay Kumar.
            </Text>
            <br />
            <Text as="sm" fontSize={["md", "lg", "2xl", "2xl"]} id="user-detail-intro">
            Dynamic and enthusiastic SDET fresher for ensuring software
quality. Seeking a challenging role in a organization where I can
utilize my knowledge of test automation frameworks to
contribute to the continuous improvement of software testing
processes and deliver reliable and efficient software solutions.
            </Text>
               
               <Tabs variant={'unstyled'}  colorScheme='black'>
                  <TabList>
                    <Box bg='#0987A0' borderRadius='2px' ><Tab>Skills</Tab></Box>
                    <Box bg='#0987A0' borderRadius='2px' ml='4px'> <Tab>Education</Tab></Box>
                   
                  </TabList>
                  <TabPanels>
                    <TabPanel> 
                        <Box>
                        <Box><Text fontSize='sm' as='em' color='cyan'>Software Development Engineer In Test</Text></Box>
                           
                            <HStack>
                            <Box><Text fontSize='sm' as='em' color='gray'>HTML |</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>CSS |</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>JavaScript |</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>Java </Text></Box>
                            </HStack>
                            <HStack>
                            
                            </HStack>
                            <HStack> 
                            <Box><Text fontSize='sm' as='em' color='gray'>Manual Testing |</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>Selenium |</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>cypress |</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>API Testing |</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>Postman |</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>Mobile App Testing </Text></Box>
                            
                            
                            </HStack>
                           
                            

                           
                        </Box>
     
                    </TabPanel>
                    <TabPanel>
                         <Box>
                             <Box><Text fontSize='sm' as='em' color='cyan'>Full Stack Web Developer</Text></Box>
                             <Box><Text fontSize='sm' as='em' color='gray'>Masai School, April 2022 - Jan 2023</Text></Box>
                           
                            <Box><Text fontSize='sm' as='em' color='cyan'>Bachelor of Technology</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>Haldia Institute of Technology</Text></Box>
                            <Box><Text fontSize='sm' as='em' color='gray'>Electrical Engineering ( 2015 - 2019)</Text></Box>
                         </Box>
                    </TabPanel>
  </TabPanels>
</Tabs>  
            </Box>
       
          <Box
            boxSize="sm"
            w={["80%", "75%", "60%", "50%"]}
            margin="auto"
            className="myself"
          >
            <Image
              className="home-img"
              src={Abhay}
              alt="AbhayKumar"
              borderRadius="20px"
               boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            />
          </Box>
        </SimpleGrid>
      </Box> 
    </Box>
  );
};

export default About;
