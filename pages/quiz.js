/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';

function LoadingWidget(){
    return (
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>

            <Widget.Content>
                [Desafio do Loading]
            </Widget.Content>
        </Widget>
    );
}

function QuestionWindget({
    question,
    totalQuestions,
    questionIndex,
    onSubmit,
}) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(-1);
    const questionId = `question__${questionIndex}`;
    return (
        <Widget>
            <Widget.Header>
                {/* <BackLinkArrow href="/"> */}
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>

            <img
            alt="Descrição"
            style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
            }}
            src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>

                <form onSubmit={(infosDoEvento) => {
                    infosDoEvento.preventDefault();
                    onSubmit();
                    setSelectedAlternative(-1);
                }}>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        return (
                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeId}
                            >
                            {alternative}
                            <input
                                // styled={{ display: 'none' }}
                                id={alternativeId}
                                name={questionId}
                                type="radio"
                                onChange={(evt) => {setSelectedAlternative(alternativeIndex)}}
                                checked={alternativeIndex===selectedAlternative}
                            />
                            </Widget.Topic>
                        );
                    })}

                    {/*<pre>
                        {JSON.stringify(question, null, 4)}
                    </pre>*/}

                    <Button type="submit" disabled={selectedAlternative === -1}>
                        Confirmar
                    </Button>
                </form>
            </Widget.Content>
        </Widget>
    );
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const totalQuestions = db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    // [React chama de Efeitos || Effects]
    // React.useEffect
    // nasce === didMount
    // atualizado === willUpdate
    // morre === willUnmount

    React.useEffect(() => {
        // fetch() ...
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
        // nasce ==== didMount
    }, []);

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
          setCurrentQuestion(nextQuestion);
        } else{
            setScreenState(screenStates.RESULT);
        }
    }

  return (
      <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
              <QuizLogo />
              {screenState === screenStates.QUIZ && (
                <QuestionWindget
                    question={question}
                    questionIndex={questionIndex}
                    totalQuestions={totalQuestions}
                    onSubmit={handleSubmitQuiz}
                />
              )}

              {screenState === screenStates.LOADING && <LoadingWidget />}

              {screenState === screenStates.RESULT && <div>Você acertou x questões,parabéns!</div>}
          </QuizContainer>
      </QuizBackground>
  );
}