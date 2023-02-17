import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithubSquare, FaExternalLinkSquareAlt } from "react-icons/fa";
import geekbuying from "../Images/geekbuying.png";
import paytmmall from "../Images/paytmmall.png";
import chargebee from "../Images/chargebee.png";
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
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }}>
        <Zoom><Box
            margin="auto"
            className="project-card"
            w="90%"
            h={{ base: "480px", sm: "500px", md: "550px", lg: "550px" }}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={{ base: "140px", sm: "80px" }}
            borderRadius="4px"
          >
            <Box className="front" height="610px">
              <Box className="p1">
                <Image
                  borderRadius="4px"
                  className="project-image"
                  mt="20px"
                  height="250px"
                  src={geekbuying}
                  alt="jiomart"
                />
                <Box>
                  <Text as="b" fontSize="2xl" noOfLines={1} mt="10px" className="project-title">
                    GeekBuying App Clone
                  </Text>
                  <Text as="abbr" textAlign="center" className="project-description">
                    Geekbuying leading online shop selling a wide range of
                    consumer electronics gadgets.
                  </Text>
                </Box>
                <Box>
                  {" "}
                  <Text as="b" fontSize="2xl" noOfLines={1}></Text>
                </Box>
                <Text as="b" fontSize="2xl">
                  Tech Used: <Text as="b" className="project-tech-stack" fontSize={["16px" , "16px","18px","xl"]}>HTML | CSS | JavaScript | React | Redux | ChakraUI </Text> 
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
                      href="https://github.com/Abhay0123/dead-meat-2472"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithubSquare size="50px" />
                    </a>{" "}
                  </Box>
                  <Box className="project-deployed-link">
                    <a
                      href="https://electronicsbazar.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <FaExternalLinkSquareAlt size="50px" />
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
            h={{ base: "480px", sm: "500px", md: "550px", lg: "550px" }}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={{ base: "140px", sm: "80px" }}
            borderRadius="4px"
          >
            <Box className="front" height="610px">
              <Box className="p1">
                <Image
                  borderRadius="4px"
                  className="project-image"
                  mt="20px"
                  height="250px"
                  src={paytmmall}
                  alt="paytmMall"
                />
                <Box>
                  <Text as="b" fontSize="2xl" noOfLines={1} mt="10px" className="project-title">
                    Paytmmall App Clone
                  </Text>
                  <Text as="abbr" textAlign="center"  className="project-description">
                    Paytm Mall is India's premier shopping app for buying Gift
                    Cards, brought to you by Paytm, India's most trusted brand
                  </Text>
                </Box>
                <Box>
                  {" "}
                  <Text as="b" fontSize="2xl" noOfLines={1}></Text>
                </Box>
                <Text as="b" fontSize="2xl">
                  Tech Used: <Text as="b" className="project-tech-stack"  fontSize={["16px" , "16px","18px","xl"]}>HTML | CSS | JavaScript | React | Redux | ChakraUI </Text> 
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
                      href="https://github.com/Bipin579/tasteful-pump-9576"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <FaGithubSquare size="50px" />
                    </a>
                  </Box>
                  <Box className="project-deployed-link">
                    <a
                      href="paytm-mall-clone-eight.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkSquareAlt size="50px" />
                    </a>{" "}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          </Zoom>
         
          {/*================================================================= Third project ============================================*/}
          <Zoom>
          <Box
            margin="auto"
            className="project-card"
            w="90%"
            h={{ base: "550px", sm: "500px", md: "550px", lg: "570px" }}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={{ base: "140px", sm: "80px" }}
            borderRadius="4px"
          >
            <Box className="front" h={["620px", "570px", "620px", "580px"]}>
              <Box className="p1">
                <Image
                  className="project-image"
                  borderRadius="4px"
                  mt="20px"
                  height="250px"
                  src="https://user-images.githubusercontent.com/105914405/195310897-76bca200-ebf7-40a4-81a5-af3b1f64494c.png"
                  alt="jiomart"
                />
                <Box>
                  <Text as="b" fontSize="2xl" noOfLines={1} mt="10px" className="project-title">
                    happyfox App Clone
                  </Text>
                  <Text as="abbr" textAlign="center" className="project-description">
                    HappyFox is a cloud-based customer support software.
                    Intuitive in its design, HappyFox is the preferred help desk
                    of many successful global organizations.
                  </Text>
                </Box>
                
                <Text as="b" fontSize="2xl" >
                  Tech Used: <Text as="b" className="project-tech-stack" fontSize={["16px" , "16px","18px","xl"]}>HTML | CSS | JavaScript </Text> 
                </Text>

                <Box
                  mt="30px"
                  display="flex"
                  justifyContent="center"
                  gap="40px"
                  className="git-link"
                >
                  <Box className="project-github-link">
                    {" "}
                    <a
                      href="https://github.com/RajputHim/HappyFox-Clone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithubSquare size="50px" />
                    </a>{" "}
                  </Box>
                  <Box  className="project-deployed-link">
                    <a
                      href="https://inspiring-sprinkles-7ae76a.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <FaExternalLinkSquareAlt size="50px" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          </Zoom>
          {/* ================================================Fourth project======================================= */}
          <Zoom>
          <Box
            margin="auto"
            className="project-card"
            w="90%"
            h={{ base: "550px", sm: "500px", md: "550px", lg: "570px" }}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={{ base: "140px", sm: "80px" }}
            borderRadius="4px"
          >
            <Box className="front" h={["620px", "570px", "620px", "580px"]}>
              <Box className="p1">
                <Image
                  borderRadius="4px"
                  className="project-image"
                  mt="20px"
                  height="250px"
                  src={chargebee}
                  alt="jiomart"
                />
                <Box>
                  <Text as="b" fontSize="2xl" noOfLines={1} mt="10px" className="project-title">
                    Chargebee App Clone
                  </Text>
                  <Text as="abbr" textAlign="center" className="project-description">
                    Chargebee is the recurring revenue management platform for
                    global scale. Leading companies trust Chargebee to power
                    their full recurring revenue lifecycle.
                  </Text>
                </Box>
                <Box>
                  {" "}
                  <Text as="b" fontSize="2xl" noOfLines={1}></Text>
                </Box>
                <Text as="b" fontSize="2xl">
                  Tech Used: <Text as="b" className="project-tech-stack" fontSize={["16px" , "16px","18px","xl"]}>HTML | CSS | JavaScript | React |ChakraUI </Text> 
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
                      href="https://github.com/Sunilkumar93/fluffy-shelf-1478"
                      target="_blank"
                      rel="noreferrer"
                    >
                     
                      <FaGithubSquare size="50px" />
                    </a>
                  </Box>
                  <Box className="project-deployed-link">
                    <a
                      href="https://fluffy-shelf-1478.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkSquareAlt size="50px" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Zoom>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
