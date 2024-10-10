import { themeColors } from 'assets/theme/style';
import { fontSizes, fontWeights } from 'assets/theme/typography';
import styled from 'styled-components';
import { TextInputProps } from './TextInput';
import TextField from '@mui/material/TextField';

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextInputStyled = styled(TextField)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background-color: ${themeColors.white};
  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: ${themeColors.body};
      -webkit-box-shadow: 0 0 0px 1000px ${themeColors.white} inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :disabled {
    background-color: ${themeColors.lightGrey};
    color: ${themeColors.darkGrey} !important;
  }
  .MuiOutlinedInput-root {
    font-size: ${fontSizes.regular}; 
    font-family: 'Source Sans Pro', sans-serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .MuiOutlinedInput-input {
      height: 36px;
      border-radius: 6px;
      font-size: ${fontSizes.regular};
      padding: 0 6px 0 12px;
      &.Mui-disabled {
          background-color: ${themeColors.lightGrey};
          color: ${themeColors.darkGrey} !important;
          -webkit-text-fill-color: ${themeColors.darkGrey} !important;
      }
    
  }
`;

export const TextInputLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  font-size: ${fontSizes.regular}; 
  font-weight: ${fontWeights.semiBold};
  color: ${themeColors.primary};
  margin-bottom: 4px;
`;

export const TextInputMessage = styled.span<TextInputProps>`
  color: ${({ errorMessage }) => errorMessage && themeColors.error};
  font-size: ${fontSizes.small}; 
  font-weight: ${fontWeights.regular}
`;
