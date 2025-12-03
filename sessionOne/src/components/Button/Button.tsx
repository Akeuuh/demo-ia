import styled from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          padding: 0.4em 1em;
          font-size: 0.875rem;
        `;
      case 'large':
        return `
          padding: 0.8em 2em;
          font-size: 1.125rem;
        `;
      default:
        return `
          padding: 0.6em 1.5em;
          font-size: 1rem;
        `;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: transparent;
          color: ${theme.colors.text};
          border-color: ${theme.colors.text};
          
          &:hover:not(:disabled) {
            background-color: rgba(255, 255, 255, 0.1);
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary};
            color: white;
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary};
          color: white;
          border-color: ${theme.colors.primary};
          
          &:hover:not(:disabled) {
            background-color: #535bf2;
            border-color: #535bf2;
          }
        `;
    }
  }}

  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
};
