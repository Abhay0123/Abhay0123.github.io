import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { slideInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
const Github = () => {
  return (
    <BouncyDiv>
      <Box mt="40px">
        <Box w="max-content" align="center"  className="heading-hover" margin={'auto'} mb='40px'>
          <Text
            className="about-H"
            fontSize={["2xl", "2xl", "3xl", "4xl"]}
            as="b"
            fontWeight='extrabold'
          >
            GitHub Status
          </Text>
          <span className='underline-about'><span className='underline-about1'>Eat/Sleep/Code</span></span>
        </Box>

        <Box margin={"auto"} w="90%">
          <GitHubCalendar
            username="Abhay0123"
            blockSize={16}
            blockMargin={5}
            style={{ margin: "auto" }}
            color="red"
            fontSize={16}
          />
        </Box>
        <Box
          w={{ base: "90%", sm: "95%", md: "100%", lg: "85%" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin="auto"
          mt="20px"
        >
          {" "}
          <SimpleGrid columns={{ base: 1, sm: 1, md: 3, lg: 3 }} gap='6px'>
            <Box >
              <img 
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=Abhay0123&show_icons=true&theme=dark&locale=en"
                alt="Abhay0123"
              />
            </Box>
            <Box >
              <img
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=Abhay0123&show_icons=true&theme=dark"
                alt="Abhay0123"
              />
            </Box>
            <Box > 
            <img id="github-top-langs"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abhay0123&show_icons=true&theme=dark&locale=en&layout=compact" alt="Abhay0123" />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </BouncyDiv>
  );
};

export default Github;
const bounceAnimation = keyframes`${slideInUp}`;
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

