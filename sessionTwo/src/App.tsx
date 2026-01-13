import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { PromptComparison, PromptExample } from './components/PromptComparison';
import { Tip } from './components/Tip';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 0 ${({ theme }) => theme.spacing.medium} 0;
`;

const Intro = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PillarsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const PillarsTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.large} 0;
  text-align: center;
  font-size: 1.5rem;
`;

const PillarsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium};
  flex-wrap: wrap;
`;

const Pillar = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  text-align: center;
  min-width: 120px;

  &:nth-child(1) {
    border-top: 3px solid #ef4444;
  }
  &:nth-child(2) {
    border-top: 3px solid #f59e0b;
  }
  &:nth-child(3) {
    border-top: 3px solid #22c55e;
  }
  &:nth-child(4) {
    border-top: 3px solid #3b82f6;
  }
  &:nth-child(5) {
    border-top: 3px solid #a855f7;
  }
`;

const PillarNumber = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const PillarName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

function App() {
  const { t } = useTranslation();

  const componentExamples: [PromptExample, PromptExample] = [
    {
      type: 'vague',
      title: t('prompts.component.vague.title'),
      prompt: t('prompts.component.vague.prompt'),
      result: t('prompts.component.vague.result'),
    },
    {
      type: 'engineered',
      title: t('prompts.component.engineered.title'),
      prompt: t('prompts.component.engineered.prompt'),
      result: t('prompts.component.engineered.result'),
    },
  ];

  const bugfixExamples: [PromptExample, PromptExample] = [
    {
      type: 'vague',
      title: t('prompts.bugfix.vague.title'),
      prompt: t('prompts.bugfix.vague.prompt'),
      result: t('prompts.bugfix.vague.result'),
    },
    {
      type: 'engineered',
      title: t('prompts.bugfix.engineered.title'),
      prompt: t('prompts.bugfix.engineered.prompt'),
      result: t('prompts.bugfix.engineered.result'),
    },
  ];

  const refactorExamples: [PromptExample, PromptExample] = [
    {
      type: 'vague',
      title: t('prompts.refactor.vague.title'),
      prompt: t('prompts.refactor.vague.prompt'),
      result: t('prompts.refactor.vague.result'),
    },
    {
      type: 'engineered',
      title: t('prompts.refactor.engineered.title'),
      prompt: t('prompts.refactor.engineered.prompt'),
      result: t('prompts.refactor.engineered.result'),
    },
  ];

  return (
    <Container>
      <Header>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Intro>{t('intro')}</Intro>
      </Header>

      <PillarsSection>
        <PillarsTitle>{t('pillars.title')}</PillarsTitle>
        <PillarsGrid>
          <Pillar>
            <PillarNumber>1</PillarNumber>
            <PillarName>{t('pillars.persona')}</PillarName>
          </Pillar>
          <Pillar>
            <PillarNumber>2</PillarNumber>
            <PillarName>{t('pillars.task')}</PillarName>
          </Pillar>
          <Pillar>
            <PillarNumber>3</PillarNumber>
            <PillarName>{t('pillars.context')}</PillarName>
          </Pillar>
          <Pillar>
            <PillarNumber>4</PillarNumber>
            <PillarName>{t('pillars.format')}</PillarName>
          </Pillar>
          <Pillar>
            <PillarNumber>5</PillarNumber>
            <PillarName>{t('pillars.examples')}</PillarName>
          </Pillar>
        </PillarsGrid>
      </PillarsSection>

      <TipsGrid>
        <Tip variant="tip" title={t('tips.iterate.title')}>
          {t('tips.iterate.content')}
        </Tip>
        <Tip variant="warning" title={t('tips.responsibility.title')}>
          {t('tips.responsibility.content')}
        </Tip>
      </TipsGrid>

      <PromptComparison
        title={t('examples.component.title')}
        description={t('examples.component.description')}
        examples={componentExamples}
      />

      <PromptComparison
        title={t('examples.bugfix.title')}
        description={t('examples.bugfix.description')}
        examples={bugfixExamples}
      />

      <PromptComparison
        title={t('examples.refactor.title')}
        description={t('examples.refactor.description')}
        examples={refactorExamples}
      />
    </Container>
  );
}

export default App;
