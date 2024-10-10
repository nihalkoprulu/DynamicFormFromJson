import { Select } from '@mui/material';
import { themeColors } from 'assets/theme/style';
import { fontSizes, fontWeights } from 'assets/theme/typography';
import styled from 'styled-components';

interface SelectMessageProps {
  errorMessage?: string;
}

interface SelectStyledProps {
  disabled?: boolean;
  background?: string;
}

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectPlaceholder = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-size: ${fontSizes.regular};
`;

export const SelectStyled = styled(Select)<SelectStyledProps>`
  display: flex;
  width: 100%;
  height: 36px;
  font-size: 16px !important;
  box-sizing: border-box;
  border-radius: 6px !important;
  background: ${({ disabled, background }) => setBackground(background, disabled)};
  overflow: ${({ disabled }) => disabled && 'hidden'};
  
  .MuiOutlinedInput-root {
    border: 1px solid ${themeColors.lightGrey};
  }
  .MuiSelect-icon {
    color: ${themeColors.body};
  }
  
`;

export const SelectLabel = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  font-size: ${fontSizes.regular}; 
  font-weight: ${fontWeights.semiBold};
  color: ${themeColors.primary};
  margin-bottom: 4px;
`;

export const SelectMessage = styled.span<SelectMessageProps>`
  color: ${({ errorMessage }) => errorMessage && themeColors.error};
  font-size: ${fontSizes.small}; 
  font-weight: ${fontWeights.regular};
`;

const setBackground: (
  backgroundColor: string | undefined,
  disabled: boolean | undefined
) => string = (backgroundColor, disabled) => {
  if (disabled) return themeColors.lightGrey;
  if (backgroundColor) return backgroundColor;
  return '';
};
