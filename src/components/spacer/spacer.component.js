import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size) => {
   const sizeIndex = sizeVariant[size];
   const property = positionVariant[position];
   const value = theme.space[sizeIndex];
 
   return `${property}:${value}`;
};

export const Spacer = styled.View`y
  ${({ position, size, theme }) => getVariant(position, size, theme)} 

`; 

Spacer.defaultProps = {
  position = 'top',
  size = 'small',
};