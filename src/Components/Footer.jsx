import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Footer = () => {
  return (
    <Box>
      <Box mt="20px" w="100%" margin="auto">
        <Box
          width="100%"
          height={["30px", "40px", "50px", "60px"]}
          bg="black"
          className="bottom"
          mt={{ base: "250px", sm: "100px", md: "100px", lg: "0px" }}
          margin="auto"
        >
            <Text as="b" fontSize={["xs", "lg", "xl", "xl"]} color='white'>
            <Typewriter
            words={["Ⓒ 2022 Designed and Built by Abhay with 🤍"]}
            cursor
            cursorStyle="|"
            loop={50000000}
            typeSpeed={100}
            deleteSpeed={100}
           
          />
             
            </Text>{" "}
            
         
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
