import React from 'react';
import { StyledFooter, StyledFooterWrapper } from './styled';
import { Link } from 'react-router-dom';
import { images } from '@/utils/images';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <Link to={'/'}>
          <img src={images.logoBlack.src} alt={images.logoBlack.alt} />
        </Link>
        <img src={images.logoModsen.src} alt={images.logoModsen.alt} />
      </StyledFooterWrapper>
    </StyledFooter>
  );
}
