import React from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { Text, Box,Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState, useContext } from "react";
import Menubar from "./Chakras";
//import logo_portfolio from "./logo_portfolio.jpg";

import { AppContext } from "../Theme/ThemeContextProvider";
const Navbar = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const { theme, toggleTheme } = useContext(AppContext);
  const handleClick = () => {
    setClickMenu(!clickMenu);
  };
  return (
    <div className="header">
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black"
        }}
      >
        <img src={logo_portfolio} width="16%" className="logo" alt="logo" />

        <Link to="/">
          <Text className="text" fontSize="2xl" as="b">
            Abhay Kumar
          </Text>
        </Link>
      </div> */}
      <ul className={clickMenu ? "nav-menu active" : "nav-menu"}>
        <Link to="/">
          {" "}
          <Box className="rotate">
            <FcHome size={30} color="black" />
            {/* <Text>Home</Text> */}
          </Box>
        </Link>
        <Link to="/about">
          {" "}
          <Box className="rotate">
            <Text fontWeight="500">About</Text>
          </Box>
        </Link>
        <Link to="/project">
          {" "}
          <Box className="rotate">
            <Text fontWeight="500">Project</Text>
          </Box>
        </Link>
        <Link to="/contact">
          {" "}
          <Box className="rotate">
            <Text fontWeight="500"> Contact</Text>
          </Box>
        </Link>
        <Link to="/git">
          {" "}
          <Box className="rotate">
            <Text fontWeight="500"> GitStatus</Text>
          </Box>
        </Link>
        <Link to="/earns">
          {" "}
          <Box className="rotate">
            <Text fontWeight="500"> Earns</Text>
          </Box>
        </Link>
      </ul>
      <Box bg="black">
        {theme === "Light" ? (
          <Icon as={MoonIcon} w={6} h={6} onClick={toggleTheme} />
        ) : (
          <Icon as={SunIcon} w={6} h={6} onClick={toggleTheme} />
        )}
      </Box>
      <div className="bimenu">
        {clickMenu ? (
          <Box onClick={handleClick} size={30} style={{ color: "white" }} />
        ) : (
          <Menubar onClick={handleClick} />
          // <BiMenu onClick={handleClick} size={30} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};
export default Navbar;
