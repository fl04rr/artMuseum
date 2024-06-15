import React from 'react';
import { StyledFooter, StyledFooterWrapper } from './styled';
import logo from '../../assets/logo-2.svg';
import modsenLogo from '../../assets/modsen.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <img src={modsenLogo} alt="logo" />
      </StyledFooterWrapper>
    </StyledFooter>
  );
}
