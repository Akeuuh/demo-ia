import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Title>{t('title')}</Title>
    </div>
  );
}

export default App;
