import React from 'react';
import { StyledSubtext } from './styled';

type SubtextProps = {
  center?: boolean;
  inline?: boolean;
  defaultColor?: boolean;
  bold?: boolean;
  children: React.ReactNode;
};
export default function Subtext({ center, inline, defaultColor, bold, children }: SubtextProps) {
  return (
    <StyledSubtext $center={center} $inline={inline} $defaultColor={defaultColor} $bold={bold}>
      {children}
    </StyledSubtext>
  );
}
