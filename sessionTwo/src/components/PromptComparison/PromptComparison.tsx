import styled from 'styled-components';
import { PromptCard, PromptType } from '../PromptCard';

export interface PromptExample {
  type: PromptType;
  title: string;
  prompt: string;
  result: string;
}

export interface PromptComparisonProps {
  title: string;
  description?: string;
  examples: [PromptExample, PromptExample];
}

const Container = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Title = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
`;

const ComparisonGrid = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    transform: rotate(90deg);
    padding: ${({ theme }) => theme.spacing.medium} 0;
  }
`;

export const PromptComparison: React.FC<PromptComparisonProps> = ({
  title,
  description,
  examples,
}) => {
  const [vague, engineered] = examples;

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Header>

      <ComparisonGrid>
        <PromptCard
          type={vague.type}
          title={vague.title}
          prompt={vague.prompt}
          result={vague.result}
        />
        <Arrow>→</Arrow>
        <PromptCard
          type={engineered.type}
          title={engineered.title}
          prompt={engineered.prompt}
          result={engineered.result}
        />
      </ComparisonGrid>
    </Container>
  );
};
