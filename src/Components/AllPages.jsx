import { Box, Button, IconButton, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useRef } from 'react';
import { ImFolderDownload } from 'react-icons/im';
import About from './About';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';
import Github from './Github';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
 
  MenuOptionGroup,

} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
const AllPages = () => {
   const [color,setColor]= useState('black');

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

const handleClick=(c)=>{
   console.log(c);
   setColor(c);
}

return (
    <>
 <Box
   
    width='100%'
   >
<Box margin="auto"  
       className={color}
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
          <Box className="nav-link resume" display={{base:'none',sm:'block',md:'block',lg:'bloak'}}>
            <a id="resume-link-1" href="https://drive.google.com/file/d/1g2MdmOHk5ezX1fMlr60k3fDVSe0KzRxO/view?usp=share_link" download>
              <Button id="resume-button-1"  colorScheme="cyan" color='white' size="sm" rightIcon={<ImFolderDownload/>}>
               Resume</Button>
            </a></Box>
          
          <Box className="color-toggle" mt={['-12px','0px','0px','0px']}>
          <Menu closeOnSelect={true} >
  <MenuButton  as={IconButton} colorScheme='black' 
    aria-label='Options'
    icon={<HamburgerIcon />}>
    
  </MenuButton>
  <MenuList minWidth='10px' className="menu-list" color='black' background='#00B5D8'>
   
    <MenuOptionGroup defaultValue='b'  type='radio'>
      <MenuItemOption colorScheme='black'  value='p' onClick={()=>handleClick('purple')}>🟣</MenuItemOption>
      <MenuItemOption  value='r' onClick={()=>handleClick('red')}>🔴</MenuItemOption>
      <MenuItemOption  value='b' onClick={()=>handleClick('black')}>⚫</MenuItemOption>
      <MenuItemOption  value='w' onClick={()=>handleClick('white')}>⚪</MenuItemOption>

    </MenuOptionGroup>
    
   
  </MenuList>
</Menu>
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

      

        
      