import { Menu, MenuButton, MenuList, MenuItem, Icon ,Button} from "@chakra-ui/react";
import { ChevronDownIcon } from "react-icons";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
const Menubar = () => {
  return (
    <Menu>
      <MenuButton as={Button} >
        {/* rightIcon={<ChevronDownIcon />} */}
        <Icon as={HamburgerIcon} w={8} h={8} />
      </MenuButton>
      <MenuList style={{ background: "white", color: "red" }}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/project">Project</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Menubar;
