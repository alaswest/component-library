import styled from 'styled-components'
import { ButtonProps } from './Button'

export const StyledButton = styled.button<ButtonProps>`
  font-family: Verdana;
  font-size: 1rem;
  letter-spacing: 0.01px;
  color: #fefbf8;
  background-color: #006ab1;
  border: 0;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #004081;
  }
  &:disabled {
    background-color: #747474;
    cursor: not-allowed;
  }
  ${props => props.variant === 'secondary' && `
    background-color: #7d2e8a;
    &:hover {
      background-color: #551a5f;
    }  
  `}

`