import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto;
  padding: 220px 0 0 0;
  @media screen and (max-width: 500px) {
    margin: 80px 0 0 25px;
    padding: 35px;
  }
`;

export default QuizContainer;