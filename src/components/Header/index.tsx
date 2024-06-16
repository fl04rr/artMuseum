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
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { icons, images } from '@/utils/images';

const navItems = [
  { title: 'Home', icon: icons.homeIcon.src, url: '/' },
  { title: 'Your favorites', icon: icons.bookmarkIcon.src, url: '/favorites' },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <StyledHeaderWrapper>
          <Link to={'/'}>
            <img src={images.logoWhite.src} alt={images.logoWhite.src} />
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
              <img
                src={isOpen ? icons.closeIcon.src : icons.menuIcon.src}
                alt={isOpen ? 'close btn' : 'open btn'}
              />
            </StyledBurgerMenu>
          </StyledHeaderContainer>
        </StyledHeaderWrapper>
      </StyledHeader>
      <Navbar isOpen={isOpen} navItems={navItems} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
