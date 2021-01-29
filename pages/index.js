import styled from 'styled-components';
import db from '../db.json';
import InputAddon from '../src/components/InputAddon';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 16px;
  padding-top: 64px;

  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  position: relative;

  h1 {
    font-size: 111px;
    align-self: center;
    margin-bottom: 32px;
    margin-top: -82px;
    color: #ffffff;
    text-shadow: 0px 5px 0px ${db.theme.colors.primary};
  }

  span {
    position: absolute;
    bottom: 0; right: 0;
    padding: 5px 18px;
    background: ${db.theme.colors.primary};
    border-radius: 8px;
    transform: rotate(9.34deg);
    font-family: 'KoHo', sans-serif;
    color: white;
    font-size: 44px;
    font-weight: bold;
  }

  margin-bottom: 50px;
`

const BaseContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  margin: 0 48px;
`;

const QuizContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

const QuizHomeLink = styled.div`
  width: 100%;
  margin-bottom: 24px;

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #ffffff;

    display: flex;
    align-items: center;

    img {
      margin-right: 8px;
    }
  }
`;

export default function Home() {
  return (
  <Container>
    <BaseContainer>
      <QuizContainer>
        <Title>
          <h1>Anime</h1>
          <span>Quiz</span>
        </Title>

        {/* <QuizPrimaryInput placeholder="Insira seu nome" /> */}
        <InputAddon text='ENTRAR' placeholder="Insira seu nome" />

        <QuizHomeLink>
          <a>
            <img src="images/github-logo.svg" />
            Acesse meu repositório
          </a>
        </QuizHomeLink>
        <QuizHomeLink>
          <a>
            <img src="https://svgshare.com/i/T__.svg" />
            Confira os outros projetos
          </a>
        </QuizHomeLink>
      </QuizContainer>
    </BaseContainer>
    <BaseContainer style={{justifyContent: 'flex-start'}}>
      <img src='images/background.png' />
    </BaseContainer>
  </Container>
  );
}
