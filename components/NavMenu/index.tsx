import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import NavItem from "./NavItem";

interface NavMenuProps {
  leftSide: string;
  rightSide: { navName: string; link: string }[];
}

const NavMenu = ({ leftSide, rightSide }: NavMenuProps) => (
  <Navbar position="static" className="left-0 w-full mt-6 text-lg text-inherit">
    <NavbarBrand className="w-2/3">{leftSide}</NavbarBrand>
    <NavbarContent>
      {rightSide.map((item) => (
        <NavItem title={item.navName} url={item.link} key={item.navName} />
      ))}
    </NavbarContent>
  </Navbar>
);

export default NavMenu;
