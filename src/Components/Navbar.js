import React from "react";
// import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { Text, Box,Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState, useContext } from "react";
import { AppContext } from "../Theme/ThemeContextProvider";
const Navbar = () => {
  
  function scrollFirst() {
  document.documentElement.scrollTop = 0;
}
function scrollSecond() {
  document.documentElement.scrollTop = 480;
}
function scrollThird() {
  document.documentElement.scrollTop = 940;
}
function scrollForth() {
  document.documentElement.scrollTop = 1340;
}
function scrollFifth() {
  document.documentElement.scrollTop = 1970;
}
function scrollSixth() {
  document.documentElement.scrollTop = 3500;
}
  const { theme, toggleTheme } = useContext(AppContext);
 
  return (
    <Box className="header"  h='70px' position='sticky' top='0'  w={{base:"200%",sm:"160%",md:"150%",lg:'100%'}}>
                       
        {/* <Link to="/"> */}
          {" "}
          <Box onClick={scrollFirst} cursor='pointer'>
            <FcHome size={30} color="black" />
           
          </Box>
        {/* </Link> */}
        {/* <Link to="/about"> */}
          {" "}
          <Box onClick={scrollSecond} cursor='pointer'>
            <Text fontWeight="500">About</Text>
          </Box>
        {/* </Link> */}
        {/* <Link to="/project"> */}
          {" "}
          <Box onClick={scrollThird} cursor='pointer'>
            <Text fontWeight="500">TechStack</Text>
          </Box>
        {/* </Link> */}
        {/* <Link to="/contact"> */}
          {" "}
          <Box onClick={scrollForth} cursor='pointer'>
            <Text fontWeight="500">GitStatus</Text>
          </Box>
        {/* </Link> */}
        {/* <Link to="/git"> */}
          {" "}
          <Box onClick={scrollFifth} cursor='pointer'>
            <Text fontWeight="500">Project</Text>
          </Box>
        {/* </Link> */}
        {/* <Link to="/earns"> */}
          {" "}
          <Box onClick={scrollSixth} cursor='pointer'>
            <Text fontWeight="500">Contact</Text>
          </Box>
        {/* </Link> */}
      <Box bg="black" cursor='pointer'>
        {theme === "Light" ? (
          <Icon as={MoonIcon} w={6} h={6} onClick={toggleTheme} />
        ) : (
          <Icon as={SunIcon} w={6} h={6} onClick={toggleTheme} />
        )}
      </Box>
    </Box>
  );
};
export default Navbar;
