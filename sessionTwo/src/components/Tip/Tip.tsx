import styled from 'styled-components';

export interface TipProps {
  variant?: 'tip' | 'warning';
  title?: string;
  children: React.ReactNode;
}

const StyledTip = styled.div<{ $variant: TipProps['variant'] }>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-left: 4px solid
    ${({ theme, $variant }) =>
      $variant === 'warning' ? theme.colors.warning : theme.colors.primary};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.medium};
`;

const TipHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const TipIcon = styled.span<{ $variant: TipProps['variant'] }>`
  color: ${({ theme, $variant }) =>
    $variant === 'warning' ? theme.colors.warning : theme.colors.primary};
  font-weight: bold;
`;

const TipContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const Tip: React.FC<TipProps> = ({
  variant = 'tip',
  title,
  children,
}) => {
  const icon = variant === 'warning' ? '!' : '*';

  return (
    <StyledTip
      $variant={variant}
      role="note"
      aria-label={title}
    >
      {title && (
        <TipHeader>
          <TipIcon $variant={variant}>{icon}</TipIcon>
          {title}
        </TipHeader>
      )}
      <TipContent>{children}</TipContent>
    </StyledTip>
  );
};
