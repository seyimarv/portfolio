import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  text-transform: uppercase;
  padding: ${({ padding }) => padding || "1.5rem 4rem"};
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.6rem;
  background: transparent;
  color: ${({ color, theme }) => color || theme.colors.textSecondary};
  border: ${({ theme }) => `1px solid ${theme.colors.quaternary}`};
  box-sizing: border-box;
  cursor: pointer;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
    border-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: inset 2px 2px 34px 18px rgba(96, 153, 45, 0.1),
      2px 2px 34px -5px rgba(96, 153, 45, 0.6);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const Button = ({
  children,
  height,
  width,
  toggleBackground,
  roundedCorners,
  onClick,
  padding,
  disabled,
  maxWidth,
  ...props
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      height={height}
      width={width}
      padding={padding}
      disabled={disabled}
      maxWidth={maxWidth}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const IconWrapper = styled.div`
  margin-right: 1.6rem;
`;
export const IconButton = ({
  children,
  height,
  width,
  toggleBackground,
  roundedCorners,
  onClick,
  padding,
  Icon,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      height={height}
      width={width}
      toggleBackground={toggleBackground}
      roundedCorners={roundedCorners}
      padding={padding}
    >
      <IconWrapper>{Icon}</IconWrapper>
      {children}
    </ButtonWrapper>
  );
};
