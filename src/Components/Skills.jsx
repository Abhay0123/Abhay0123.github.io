import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Rotate from 'react-reveal/Rotate';
import React from "react";
const Skills = () => {
  return (
    <Box id="skills" data-aos="fade-right">
      <Box mt="20px" w="100%" >
        <Box w="max-content" align="center" className="heading-hover" margin={'auto'}  mb='30px'>
          <Text
            className="about-H"
            fontSize={["2xl", "2xl", "3xl", "4xl"]}
            as="b"
            fontWeight='extrabold'
          >
            Tech Stack
          </Text>
          <span className='underline-about'><span className='underline-about1'>Hands On Skills</span></span>
        </Box>

       
       
              <SimpleGrid
                columns={{ base: 2, sm: 3, md: 3, lg: 4 }}
                padding='8px'
                className="tech"
                gap='40px'
              >
                <Box
                  
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                   className="skills-card"
                >
                  <Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
                    alt="HTML"
                  ></Image></Rotate>
                  <Text as="b" align="center" fontWeight="800" className="skills-card-name">
                    HTML
                  </Text>
                </Box>

                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                >
                  <Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
                    alt="CSS"
                  ></Image></Rotate>
                  <Text as="b" align="center" fontWeight="800" className="skills-card-name">
                    CSS
                  </Text>
                </Box>
                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
                    alt="javascript"
                  ></Image></Rotate>
                  <Text as="b" align="center" fontWeight="800" className="skills-card-name">
                    JAVASCRIPT
                  </Text>
                </Box>
                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
                    alt="react"
                  ></Image></Rotate>
                  <Text align="center" className="skills-card-name" fontWeight="800" as="b">
                    REACTJS
                  </Text>
                </Box>
                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                >
                  {" "}<Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                    alt="react"
                  ></Image></Rotate>
                  <Text as="b" align="center" className="skills-card-name" fontWeight="800">
                    JAVA
                  </Text>
                </Box>
               
                <Box
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                   className="skills-card"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://camo.githubusercontent.com/9f6fbaa3154800eef23c4dc7ed718f911deb50e0d5f58f9226d7dc278d901973/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f61746c61737369616e5f6a6972612f61746c61737369616e5f6a6972612d69636f6e2e737667"
                    alt="Selenium"
                  ></Image></Rotate>
                  <Text as="b" align="center" fontWeight="800" className="skills-card-name">
                    JIRA 
                  </Text>
                </Box>

                <Box
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                   className="skills-card"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg"
                    alt="Selenium"
                  ></Image></Rotate>
                  <Text as="b" align="center" fontWeight="800" className="skills-card-name">
                    SELENIUM
                  </Text>
                </Box>

                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    mt="10px"
                    boxSize="80px"
                    src="https://blog.knoldus.com/wp-content/uploads/2022/04/cypress.png"
                    alt="CYPRESS"
                ></Image></Rotate>
                  <Text
                    align="center"
                    mt="9px"
                    fontWeight="800"
                    className="skills-card-name"
                    as="b"
                  >
                    CYPRESS
                  </Text>
                </Box>


                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    mt="10px"
                    boxSize="80px"
                    src="https://wedevx.cdn.prismic.io/wedevx/9453029c-c498-4c6a-a9cb-fc399c334195_rest-api-icon+1.svg"
                    alt="CYPRESS"
                ></Image></Rotate>
                  <Text
                    align="center"
                    mt="9px"
                    fontWeight="800"
                    className="skills-card-name"
                    as="b"
                  >
                    API
                  </Text>
                </Box>

                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    mt="10px"
                    boxSize="80px"
                    src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_cucumber_icon_130657.png"
                    alt="CYPRESS"
                ></Image></Rotate>
                  <Text
                    align="center"
                    mt="9px"
                    fontWeight="800"
                    className="skills-card-name"
                    as="b"
                  >
                    CUCUMBER
                  </Text>
                </Box>

                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                >
                <Rotate>
                  <Image
                    className="skills-card-img"
                    mt="10px"
                    boxSize="80px"
                    src="https://camo.githubusercontent.com/4253eb6921d60a216772940978dea3a0cf2113f2f29b5545720d3b5b6960e467/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6d6f6368616a732f6d6f6368616a732d69636f6e2e737667"
                    alt="MOCHA"
                  ></Image></Rotate>
                  <Text
                    align="center"
                    fontWeight="800"
                    className="skills-card-name"
                    mt="8px"
                    as="b"
                  >
                    MOCHA
                  </Text>
                </Box>
                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"
                    alt="POSTMAN"
                  ></Image></Rotate>
                  <Text align="center" as="b" className="skills-card-name" fontWeight="800">
                    POSTMAN
                  </Text>
                </Box>

                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://www.simplilearn.com/ice9/tools_covered/junit.png"
                    alt="react"
                  ></Image></Rotate>
                  <Text align="center" fontWeight="800" className="skills-card-name" as="b">
                    JUNIT
                  </Text>
                </Box>
               
                <Box
                   className="skills-card"
                  bg="black"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                ><Rotate>
                  <Image
                    className="skills-card-img"
                    boxSize="100px"
                    src="https://camo.githubusercontent.com/265574c40f0816ed0fd67127cfbc382866182a7ec468c614906103c15700e707/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a656e6b696e732f6a656e6b696e732d69636f6e2e737667"
                    alt="react"
                  ></Image></Rotate>
                  <Text align="center" fontWeight="800" className="skills-card-name" as="b">
                    JENKINS
                  </Text>
                </Box>
              </SimpleGrid>
          
           

      </Box>
    </Box>
  );
};

export default Skills;
