import React from 'react';
import { FC, useState } from 'react';
import {
  StyledBurgerMenu,
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledLink,
  StyledNav,
} from './styled';
import logo from '../../assets/logo.svg';
import homeIcon from '../../assets/icons/home.svg';
import bookmarkIcon from '../../assets/icons/bookmark.svg';
import { Link } from 'react-router-dom';
import burgerIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/close.svg';
import Navbar from '../Navbar/Navbar';

const navItems = [
  { title: 'Home', icon: homeIcon, url: '/' },
  { title: 'Your favorites', icon: bookmarkIcon, url: '/favorites' },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <StyledHeaderWrapper>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
          <StyledHeaderContainer>
            <StyledNav>
              {navItems.map((el) => (
                <Link to={el.url} key={el.title}>
                  <StyledLink>
                    <img src={el.icon} alt={`${el.title} icon`} /> {el.title}
                  </StyledLink>
                </Link>
              ))}
            </StyledNav>
            <StyledBurgerMenu onClick={() => setIsOpen(!isOpen)}>
              <img src={isOpen ? closeIcon : burgerIcon} alt={isOpen ? 'close btn' : 'open btn'} />
            </StyledBurgerMenu>
          </StyledHeaderContainer>
        </StyledHeaderWrapper>
      </StyledHeader>
      <Navbar isOpen={isOpen} navItems={navItems} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
