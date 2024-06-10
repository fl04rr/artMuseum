import React from "react";
import { NavbarLink, StyledNavbar } from "./styled";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { NavItem } from "@/utils/types";
import { StyledNav } from "../Header/styled";
import { ItemTitle } from "../Texts/styled";

type NavbarProps = {
  isOpen: boolean;
  navItems: NavItem[];
  setIsOpen: (isOpen: boolean) => void;
};
export default function Navbar({ isOpen, navItems, setIsOpen }: NavbarProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      <StyledNavbar $isOpen={isOpen}>
        <StyledNav $column>
          {navItems.map((el) => (
            <Link to={el.url} key={el.title} onClick={() => setIsOpen(!isOpen)}>
              <NavbarLink>
                <img src={el.icon} alt={`${el.title} icon`} />
                <ItemTitle>{el.title}</ItemTitle>
              </NavbarLink>
            </Link>
          ))}
        </StyledNav>
      </StyledNavbar>
    </>
  );
}
