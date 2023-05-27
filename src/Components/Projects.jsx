import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithubSquare} from "react-icons/fa";
import {HiDocumentReport} from "react-icons/hi";
import Zoom from 'react-reveal/Zoom';

const Projects = () => {
  return (
    <Box id="projects">
      <Box mt={{ base: "100px", sm: "130px", md: "150px", lg: "100px" }} mb='40px'>
        <Box w="max-content" align="center" mb='30px' className="heading-hover" margin={'auto'}>
          <Text
            className="about-H"
            fontSize={["2xl", "2xl", "3xl", "4xl"]}
            as="b"
            fontWeight='extrabold'
          >
            My Projects
          </Text>
          <span className='underline-about'><span className='underline-about1'>Hands On Project</span></span>
        </Box>
     
      </Box>
  
      <Box
        w={{ base: "100%", sm: "60%", md: "80%", lg: "100%" }}
        margin="auto"
        id="projects"
      >
        {/*================================================== First Project ==================================== */}
        <SimpleGrid columns={{ base: 1, sm: 1, md: 4, lg: 4 }}>
        <Zoom><Box
            margin="auto"
            className="project-card"
            w="90%"
            h={{ base: "410px", sm: "400px", md: "450px", lg: "550px" }}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={{ base: "140px", sm: "80px" }}
            borderRadius="4px"
          >
            <Box className="front" height="580px">
              <Box className="p1">
                
                <Box>
                  <Text as="b" fontSize="2xl" noOfLines={2} mt="10px" className="project-title">
                  MXPlayer Website Testing
                  </Text>
                  <Text as="abbr" textAlign="center" className="project-description">
                  MX Player is a video streaming app that offers thousands of hours of premium, exclusive and original content from leading Producers and Publishers.
          </Text>

          <br/>
                </Box>
                <Box>
                  {" "}
                  <Text as="b" fontSize="2xl" noOfLines={1}></Text>
                </Box>
                <Box display='grid'>
                   <Text as='b'>Areas of Responsibilities</Text>
                       <Text as='md'>1. Created XMind Map</Text>  
                       <Text as='md'>2. Worked on Jira Dashboard and Selenium Project Framework</Text>
                       <Text as='md'>3. Implemented Selenium with java on Test Cases </Text>
                       <Text as='md'>4. Tested the GO-ADD-FREE section</Text>
                       <Text as='md'>5. Generated Reports using TestNG</Text>
                </Box>

                <Text as="b">
                  Tech Used: <Text as="b" className="project-tech-stack" >XMind Map | Jira | Selenium | Git </Text> 
                </Text>

                <Box
                  mt="30px"
                  display="flex"
                  justifyContent="center"
                  gap="40px"
                  className="git-link"
                >
                  <Box className="project-github-link">
                    <a
                      href="https://github.com/Abhay0123/Selenium_Framework/tree/master/final-framework-testng"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithubSquare size="50px" />
                    </a>{" "}
                  </Box>
                  <Box className="project-deployed-link">
                    <a
                      href="https://drive.google.com/drive/folders/1EA9UkQXKNUj8iVZd6YLBf9X5RjbAW8EL"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <HiDocumentReport size="50px" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box></Zoom>
       
          {/*====================================== second  project =======================================*/}
          <Zoom><Box
            margin="auto"
            className="project-card"
            w="90%"
            h={{ base: "410px", sm: "400px", md: "450px", lg: "450px" }}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={{ base: "140px", sm: "80px" }}
            borderRadius="4px"
          >
            <Box className="front" height="540px">
              <Box className="p1">
                
                <Box>
                  <Text as="b" fontSize="2xl" noOfLines={2} mt="10px" className="project-title">
                  AJIO website Testing
                  </Text>
                  <Text as="abbr" textAlign="center" className="project-description">
                  AJIO, a fashion and lifestyle brand, is Reliance Retail’s digital commerce initiative and is the ultimate fashion destination for styles that are the best.</Text>
                  
                  <br/>

                </Box>
                <Box>
                  {" "}
                  <Text as="b" fontSize="2xl" noOfLines={1}></Text>
                </Box>
                <Box display='grid'>
                   <Text as='b'>Areas of Responsibilities</Text>
                       <Text as='md'>1. Created XMind Map</Text>
                       <Text as='md'>2. Created Test cases and automate them</Text>  
                       <Text as='md'>3. Implemented cypress on test cases</Text>
                       <Text as='md'>4. Project Report on cypress-mochawesome-reporter </Text>
                       <Text as='md'>5. Project Repo Readme file Update</Text>
                </Box>

                <Text as="b">
                  Tech Used: <Text as="b" className="project-tech-stack">Cypress | JavaScript | cypress-mochawesome-reporte </Text> 
                </Text>

                <Box
                  mt="30px"
                  display="flex"
                  justifyContent="center"
                  gap="40px"
                  className="git-link"
                >
                  <Box className="project-github-link">
                    <a
                      href="https://github.com/Mamta305/Ajio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithubSquare size="50px" />
                    </a>{" "}
                  </Box>
                  <Box className="project-deployed-link">
                    <a
                      href="https://drive.google.com/drive/u/0/folders/1UIPxuqweugbUBZHRztGxTJMdpOLR2ztj"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <HiDocumentReport size="50px" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box></Zoom>
         
          {/*================================================================= Third project ============================================*/}
          <Zoom><Box
            margin="auto"
            className="project-card"
            w="90%"
            h={{ base: "410px", sm: "400px", md: "450px", lg: "450px" }}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={{ base: "140px", sm: "80px" }}
            borderRadius="4px"
          >
            <Box className="front" height="500px">
              <Box className="p1">
                
                <Box>
                  <Text as="b" fontSize="2xl" noOfLines={2} mt="10px" className="project-title">
                  GitHub API Testing
                  </Text>
                  <Text as="abbr" textAlign="center" className="project-description">
Github APIs( or Github ReST APIs) are the APIs that you can use to interact with GitHub. They allow you to create and manage repositories, branches, issues, pull requests, and many more.
          </Text>

          <br/>
                </Box>
                <Box>
                  {" "}
                  <Text as="b" fontSize="2xl" noOfLines={1}></Text>
                </Box>
                <Box display='grid'>
                   <Text as='b'>Areas of Responsibility</Text>
                       <Text as='md'>1. Create, update and get Repository</Text>  
                       <Text as='md'>2. Update file content and fork Repository</Text>
                       <Text as='md'>3. Delete the Repository </Text>
                       <Text as='md'>4. Generate Reports</Text>
                </Box>

                <Text as="b">
                  Tech Used: <Text as="b" className="project-tech-stack" > Rest Assured | Postman | Cypress | Selenium | Cucumber </Text> 
                </Text>

                <Box
                  mt="30px"
                  display="flex"
                  justifyContent="center"
                  gap="40px"
                  className="git-link"
                >
                  <Box className="project-github-link">
                    <a
                      href="https://github.com/Mamta305/Api-testing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithubSquare size="50px" />
                    </a>{" "}
                  </Box>
                  <Box className="project-deployed-link">
                    <a
                      href="https://drive.google.com/drive/folders/1m_yrY2Gfwqe-OoIciqP-ncsXOGyIBc8z?usp=share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <HiDocumentReport size="50px" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box></Zoom>
          {/* ================================================Fourth project======================================= */}
          <Zoom><Box
            margin="auto"
            className="project-card"
            w="90%"
            h={{ base: "410px", sm: "400px", md: "450px", lg: "450px" }}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={{ base: "140px", sm: "80px" }}
            borderRadius="4px"
          >
            <Box className="front" height="480px">
              <Box className="p1">
                
                <Box>
                  <Text as="b" fontSize="2xl" noOfLines={2} mt="10px" className="project-title">
                  Khan Academy App Testing
                  </Text>
                  <Text as="abbr" textAlign="center" className="project-description">
                  Khan Academy is a mobile app where we can join any course for compitative examinations. And you can do live classes on that also.
          </Text>

          <br/>
                </Box>
                <Box>
                  {" "}
                  <Text as="b" fontSize="2xl" noOfLines={1}></Text>
                </Box>
                <Box display='grid'>
                   <Text as='b'>Areas of Responsibility</Text>
                       <Text as='md'>1. Configure POM in this project</Text>  
                       <Text as='md'>2. Implemented Wdio and appium with Javascript on Test Cases </Text>
                       <Text as='md'>3. Report Generation using Allure</Text>
                </Box>

                <Text as="b">
                  Tech Used: <Text as="b" className="project-tech-stack" > WDIO | Appium | Emulator | VS Code | Git </Text> 
                </Text>

                <Box
                  mt="30px"
                  display="flex"
                  justifyContent="center"
                  gap="40px"
                  className="git-link"
                >
                  <Box className="project-github-link">
                    <a
                      href="https://github.com/pratibhavgupta/Khan_Academy_App_Testing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithubSquare size="50px" />
                    </a>{" "}
                  </Box>
                  <Box className="project-deployed-link">
                    <a
                      href="https://drive.google.com/drive/folders/1WtcQxa9ddWFwRPPle3FHAy0FvIIks-Wi?usp=share_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <HiDocumentReport size="50px" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box></Zoom>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
