import { Box, Button, HStack, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { useRef } from 'react';
import { FaSun } from 'react-icons/fa';
import { GiMoon } from 'react-icons/gi';
import { ImFolderDownload } from 'react-icons/im';
import { AppContext } from '../Theme/ThemeContextProvider';
import About from './About';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';
import Github from './Github';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
const AllPages = () => {
    const { theme, toggleTheme } = useContext(AppContext);
    const style = {
        Light: {
          color: "black",
          backgroundColor: "#FFFFFF",
        },
        Dark: {
          color: "white",
          backgroundColor: "#171923",
        },
      };
      const Home_s=useRef(null);
      const About_s=useRef(null);
      const Skills_s=useRef(null);
      const Projects_s=useRef(null);
      const Contact_s=useRef(null);
      const scrollToSection =(elementRef)=>{
        window.scrollTo({ 
          top:elementRef.current.offsetTop,
          behavior:'smooth'
        })
      }
return (
    <>
 <Box
    
    width='100%'
    ref={Home_s}
   >
<Box margin="auto"  
      style={theme === "Dark" ? style.Dark : style.Light}
     >
     <Box h="70px" className="nav-menu-all">
        <SimpleGrid columns={6} fontSize={[10, 18, 20, 22]} id="nav-menu">
          <Box className="nav-link home"  onClick={() => scrollToSection(Home_s)}>
            <Text as="b" p="7px">
              Home
            </Text>
          </Box>
          <Box  className="nav-link about" onClick={() => scrollToSection(About_s)}>
            <Text as="b" p="7px">
              About
            </Text>
          </Box>
          <Box className="nav-link skills" onClick={() => scrollToSection(Skills_s)}>
            <Text as="b" p="7px">
              Skills
            </Text>
          </Box>
          <Box  className="nav-link projects" onClick={() => scrollToSection(Projects_s)}>
            <Text as="b" p="7px">
              Project
            </Text>
          </Box>
          <Box  className="nav-link contact" onClick={() => scrollToSection(Contact_s)}>
            <Text as="b" p="7px">
              Contact
            </Text>
          </Box>
          <Box id="resume-button-1" className="nav-link resume" display={{base:'none',sm:'block',md:'block',lg:'bloak'}}><a href="https://drive.google.com/file/d/1r7DpNgJQGB6_G5vg-4rXZwL-0auyvjWo/view?usp=share_link" download>
              <Button colorScheme="cyan" color='white' size="sm" rightIcon={<ImFolderDownload/>}>
               Resume</Button>
            </a></Box>
          
          <Box as="span" className="color-toggle" bg="black" cursor="pointer">
            {" "}
            {theme === "Light" ? (
              <Icon
                as={GiMoon}
                w={3}
                h={3}
                onClick={toggleTheme}
                color="white"
              />
            ) : (
              <Icon
                as={FaSun}
                w={3}
                h={3}
                onClick={toggleTheme}
                color="white"
              />
            )}
          </Box>
        </SimpleGrid>
      </Box>
        <Box  id="home" ref={Home_s} > <Home/></Box>
        <Box id="about" ref={About_s} > <About/></Box>
        <Box id="skills"  ref={Skills_s}  ><Skills/></Box>
        <Box  > <Github/></Box>
        <Box id="projects" ref={Projects_s} > <Projects/></Box>
        <Box ><Certificates/></Box>
        <Box id="contact" ref={Contact_s} > <Contact/></Box>
        <Box  > <Footer/></Box>
        </Box> 
      </Box>
 </>
    );
}
export default AllPages;

      

        
      