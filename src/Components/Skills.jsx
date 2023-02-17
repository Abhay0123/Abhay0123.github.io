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
                    alt="react"
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
                    alt="react"
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
                    alt="react"
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
                    src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
                    alt="react"
                  ></Image></Rotate>
                  <Text as="b" align="center" className="skills-card-name" fontWeight="800">
                    REDUX
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
                    src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
                    alt="react"
                  ></Image></Rotate>
                  <Text as="b" align="center" fontWeight="800" className="skills-card-name">
                    NODEJS
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
                    src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"
                    alt="react"
                ></Image></Rotate>
                  <Text
                    align="center"
                    mt="9px"
                    fontWeight="800"
                    className="skills-card-name"
                    as="b"
                  >
                    EXPRESSJS
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
                    src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
                    alt="react"
                  ></Image></Rotate>
                  <Text
                    align="center"
                    fontWeight="800"
                    className="skills-card-name"
                    mt="8px"
                    as="b"
                  >
                    NEXTJS
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
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                    alt="react"
                  ></Image></Rotate>
                  <Text align="center" as="b" className="skills-card-name" fontWeight="800">
                    MONGODB
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
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                    alt="react"
                  ></Image></Rotate>
                  <Text align="center" fontWeight="800" className="skills-card-name" as="b">
                    GITHUB
                  </Text>
                </Box>
               
                
              </SimpleGrid>
          
       
      </Box>
    </Box>
  );
};

export default Skills;
