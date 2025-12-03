import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Button } from './components/Button';

const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.large};
  max-width: 400px;
`;

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Title>{t('title')}</Title>
      <ButtonContainer>
        <Button onClick={() => alert(t('buttons.alerts.primary'))}>
          {t('buttons.primary')}
        </Button>
        <Button variant="secondary" onClick={() => alert(t('buttons.alerts.secondary'))}>
          {t('buttons.secondary')}
        </Button>
        <Button variant="outline" onClick={() => alert(t('buttons.alerts.outline'))}>
          {t('buttons.outline')}
        </Button>
        <Button size="small">{t('buttons.small')}</Button>
        <Button size="large">{t('buttons.large')}</Button>
        <Button disabled>{t('buttons.disabled')}</Button>
      </ButtonContainer>
    </div>
  );
}

export default App;
