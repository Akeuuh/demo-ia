import styled from 'styled-components';

export type PromptType = 'vague' | 'engineered';

export interface PromptCardProps {
  type: PromptType;
  title: string;
  prompt: string;
  result?: string;
}

const Card = styled.div<{ $type: PromptType }>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.large};
  border-left: 4px solid
    ${({ theme, $type }) => ($type === 'vague' ? theme.colors.warning : theme.colors.success)};
  flex: 1;
  min-width: 300px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Badge = styled.span<{ $type: PromptType }>`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ theme, $type }) =>
    $type === 'vague' ? theme.colors.warning : theme.colors.success}20;
  color: ${({ theme, $type }) =>
    $type === 'vague' ? theme.colors.warning : theme.colors.success};
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const PromptBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Label = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const PromptText = styled.pre`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.875rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;

const ResultBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px dashed ${({ theme }) => theme.colors.textMuted}40;
`;

const ResultText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-style: italic;
  line-height: 1.5;
`;

export const PromptCard: React.FC<PromptCardProps> = ({ type, title, prompt, result }) => {
  return (
    <Card $type={type}>
      <Header>
        <Badge $type={type}>{type === 'vague' ? 'Vague' : 'Engineered'}</Badge>
        <Title>{title}</Title>
      </Header>

      <PromptBlock>
        <Label>Prompt</Label>
        <PromptText>{prompt}</PromptText>
      </PromptBlock>

      {result && (
        <ResultBlock>
          <Label>Result</Label>
          <ResultText>{result}</ResultText>
        </ResultBlock>
      )}
    </Card>
  );
};
