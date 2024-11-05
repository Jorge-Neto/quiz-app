import React, { useState } from "react";
import { Phase, Player } from "./types";
import PlayerSetup from "./PlayerSetup";
import { Button } from "@mui/material";
import ReactHowler from "react-howler";

import phase1 from "./images/phase1.png";
import phase2 from "./images/phase2.png";
import phase3 from "./images/phase3.png";
import phase4 from "./images/phase4.png";

const phases: Phase[] = [
  {
    phaseNumber: 1,
    backgroundImage: phase1,
    questions: [
      {
        question:
          "No primeiro ano de Direito, o aluno aprende principalmente sobre legislação trabalhista.",
        answer: false,
      },
      {
        question:
          "A disciplina de Introdução ao Direito geralmente é oferecida no primeiro semestre da faculdade de Direito.",
        answer: true,
      },
      {
        question:
          "Nos primeiros anos do curso, os alunos têm pouca leitura para fazer.",
        answer: false,
      },
      {
        question:
          "História do Direito é uma matéria comum no primeiro ano do curso de Direito.",
        answer: true,
      },
      {
        question:
          "A prática jurídica é um componente obrigatório nos primeiros semestres de Direito.",
        answer: false,
      },
      {
        question:
          "No início do curso de Direito, o aluno estuda tanto o Direito Público quanto o Direito Privado.",
        answer: true,
      },
      {
        question:
          "Estudar filosofia e sociologia é irrelevante para o aluno de Direito.",
        answer: false,
      },
      {
        question:
          "A leitura da Constituição Federal é importante desde os primeiros semestres do curso.",
        answer: true,
      },
      {
        question:
          "O aluno de Direito não precisa aprender sobre ética nos primeiros anos de faculdade.",
        answer: false,
      },
      {
        question:
          "Muitos alunos de Direito começam a estagiar no primeiro semestre do curso.",
        answer: false,
      },
    ],
    phaseTitle: "Primeiro Ano de Faculdade",
  },
  {
    phaseNumber: 2,
    backgroundImage: phase2,
    questions: [
      {
        question:
          "O estágio é uma oportunidade para aplicar conhecimentos teóricos adquiridos durante o curso de Direito.",
        answer: true,
      },
      {
        question:
          "Estudantes de Direito podem iniciar estágio em escritórios de advocacia a partir do primeiro semestre do curso.",
        answer: false,
      },
      {
        question:
          "O estágio supervisionado é obrigatório para a formação em Direito.",
        answer: true,
      },
      {
        question:
          "Somente alunos do último ano podem participar de audiências e sessões no tribunal, acompanhados de advogados.",
        answer: false,
      },
      {
        question:
          "Durante o estágio, os estudantes de Direito podem aprender a elaborar peças jurídicas, como petições e contratos.",
        answer: true,
      },
      {
        question:
          "Os estagiários têm a mesma autonomia que advogados na tomada de decisões em processos jurídicos.",
        answer: false,
      },
      {
        question:
          "Estágios realizados em órgãos públicos podem contribuir para o aprendizado sobre o funcionamento da Justiça e dos serviços públicos.",
        answer: true,
      },
      {
        question:
          "Estágios não são válidos para contagem de horas complementares para a conclusão do curso de Direito.",
        answer: false,
      },
      {
        question:
          "A experiência prática durante o estágio facilita a compreensão dos procedimentos e práticas jurídicas, o que auxilia na preparação para a prova da OAB.",
        answer: true,
      },
      {
        question:
          "Estagiários de Direito não têm permissão para participar de conciliações e mediações.",
        answer: false,
      },
    ],
    phaseTitle: "Estágios e Primeiras Experiências Práticas",
  },
  {
    phaseNumber: 3,
    backgroundImage: phase3,
    questions: [
      {
        question:
          "A prova da OAB é composta por duas fases: uma teórica e outra prática",
        answer: true,
      },
      {
        question:
          "Para ser aprovado na primeira fase do Exame da OAB, é necessário acertar pelo menos 40 questões de um total de 80",
        answer: true,
      },
      {
        question:
          "O estágio obrigatório em escritórios de advocacia ou instituições jurídicas é uma exigência dos últimos períodos do curso de Direito",
        answer: true,
      },
      {
        question:
          "O Exame da OAB possui duas edições por ano, aplicadas a cada seis meses.",
        answer: false,
      },
      {
        question:
          "A segunda fase do Exame da OAB permite que o candidato escolha uma área de atuação para a prova prática",
        answer: true,
      },
      {
        question:
          "Após a aprovação no Exame da OAB, o advogado pode exercer a profissão em qualquer área do Direito, sem restrições.",
        answer: true,
      },
      {
        question:
          "A reprovação no Exame da OAB impede que o bacharel em Direito obtenha o diploma de graduação.",
        answer: false,
      },
      {
        question:
          "O exame da OAB é o único requisito necessário para o exercício da advocacia no Brasil.",
        answer: true,
      },
      {
        question:
          "A primeira fase do Exame da OAB inclui questões objetivas de múltipla escolha.",
        answer: true,
      },
      {
        question:
          "Os alunos dos últimos períodos da faculdade de Direito são dispensados da prova da OAB caso tenham média acadêmica alta.",
        answer: false,
      },
    ],
    phaseTitle: "Anos Finais e Exame da OAB",
  },
  {
    phaseNumber: 4,
    backgroundImage: phase4,
    questions: [
      {
        question:
          "Ter um bom networking é fundamental para construir uma carreira de advogado renomado.",
        answer: true,
      },
      {
        question:
          "A ética profissional não é tão importante na advocacia, desde que o advogado tenha bons resultados.",
        answer: false,
      },
      {
        question:
          "Especializar-se em uma área do Direito pode ajudar a se destacar e se tornar um advogado renomado.",
        answer: true,
      },
      {
        question:
          "Participar de eventos jurídicos e congressos não traz benefícios para a carreira de um advogado.",
        answer: false,
      },
      {
        question:
          "Manter-se atualizado com as mudanças nas leis e jurisprudências é importante para um advogado que quer ser respeitado.",
        answer: true,
      },
      {
        question:
          "A pontualidade e o cumprimento dos prazos processuais são fatores irrelevantes na construção da reputação de um advogado.",
        answer: false,
      },
      {
        question:
          "Desenvolver habilidades de comunicação e oratória é essencial para um advogado que deseja ter uma carreira bem-sucedida.",
        answer: true,
      },
      {
        question:
          "Ter presença online e compartilhar conteúdo jurídico de qualidade pode contribuir para a visibilidade de um advogado.",
        answer: true,
      },
      {
        question:
          "Apenas advogados que atuam em grandes escritórios têm chances de se tornarem renomados.",
        answer: false,
      },
      {
        question:
          "Para ser um advogado de renome, é essencial buscar feedback de clientes e colegas para melhorar a prática jurídica.",
        answer: true,
      },
    ],
    phaseTitle: "Tornar-se um Advogado Renomado",
  },
];

const phaseBackgrounds = [phase1, phase2, phase3, phase4];

const Quiz: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleStart = (playerNames: string[]) => {
    const initialPlayers: Player[] = playerNames.map((name) => ({
      name,
      score: 0,
      totalScore: 0,
      currentPhase: 1,
      answeredQuestions: [],
      finished: false,
    }));
    setPlayers(initialPlayers);
  };

  const handleAnswer = async (
    userResponse: boolean,
    question: string | undefined
  ) => {
    if (!question) return;
    const updatedPlayers = [...players];
    const player = updatedPlayers[currentPlayerIndex];

    if (!player.answeredQuestions) {
      player.answeredQuestions = [];
    }

    const isCorrect =
      phases
        .find((item) => item.phaseNumber === player.currentPhase)
        ?.questions.find((item) => item.question === question)?.answer ===
      userResponse;

    if (isCorrect) {
      player.score += 1;
      player.totalScore += 1;
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    player.answeredQuestions.push(question);

    const currentPhaseQuestions =
      phases[player.currentPhase - 1]?.questions || [];

    if (
      player.answeredQuestions.length >= currentPhaseQuestions.length &&
      player.score >= 4
    ) {
      if (player.currentPhase < phases.length) {
        player.currentPhase += 1;
        player.score = 0;
        player.answeredQuestions = [];
      } else {
        player.finished = true;
      }
    }

    setPlayers(updatedPlayers);

    const allFinished = updatedPlayers.every((p) => p.finished);
    if (allFinished) {
      setGameOver(true);
    } else {
      let nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
      while (updatedPlayers[nextPlayerIndex].finished) {
        nextPlayerIndex = (nextPlayerIndex + 1) % players.length;
      }
      setCurrentPlayerIndex(nextPlayerIndex);
    }
  };

  const currentPhase = players[currentPlayerIndex]?.currentPhase;
  const currentPhaseQuestions = currentPhase
    ? phases[currentPhase - 1]?.questions
    : [];

  const randomQuestion =
    currentPhaseQuestions && currentPhaseQuestions.length > 0
      ? currentPhaseQuestions[
          Math.floor(Math.random() * currentPhaseQuestions.length)
        ]
      : null;

  const backgroundImage = !gameOver
    ? phases[currentPhase - 1]?.backgroundImage
    : "";

  const getCurrentPhaseText = (phaseNumber: number) => {
    const phase = phases.find((p) => p.phaseNumber === phaseNumber);
    return phase
      ? `Fase ${phaseNumber}: ${phase.phaseTitle}`
      : "Fase Finalizada";
  };

  const getClassification = (score: number) => {
    if (score >= 30)
      return "Parabéns pelo excelente desempenho! Você alcançou a maior pontuação e mostrou que está com tudo!)";
    if (score >= 15)
      return "Você teve um desempenho mediano, mas com um pouco mais de dedicação, tenho certeza de que pode alcançar resultados ainda melhores!";
    return "Infelizmente, seu desempenho ficou abaixo do esperado. Vamos trabalhar para melhorar na próxima vez!)";
  };

  return (
    <div
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "0px",
      }}
    >
      <header className="App-header">
        {players.length === 0 ? (
          <PlayerSetup onStart={handleStart} />
        ) : gameOver ? (
          <div>
            <h2>Classificação Final:</h2>
            {players
              .sort((a, b) => b.totalScore - a.totalScore)
              .map((player, index) => (
                <>
                  <p key={index}>
                    {index + 1}º {player.name} - Pontuação: {player.totalScore}
                  </p>
                  <p className="small">
                    {getClassification(player.totalScore)}
                  </p>
                  <br />
                </>
              ))}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => window.location.reload()}
            >
              Reiniciar Quiz
            </Button>
          </div>
        ) : (
          <div>
            {isCorrect !== null && (
              <ReactHowler
                src={
                  isCorrect ? "./sounds/correct.mp3" : "./sounds/incorrect.mp3"
                }
                playing={true}
                onEnd={() => setIsCorrect(null)} // Reseta após o som tocar
              />
            )}
            <h1>
              {getCurrentPhaseText(players[currentPlayerIndex].currentPhase)}
            </h1>
            <h2>{players[currentPlayerIndex].name}, é sua vez!</h2>
            {randomQuestion && <p>{randomQuestion.question}</p>}
            <Button
              variant="contained"
              color="success"
              onClick={() => handleAnswer(true, randomQuestion?.question)}
              style={{ marginRight: "8px" }}
            >
              Verdadeiro
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleAnswer(false, randomQuestion?.question)}
            >
              Falso
            </Button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Quiz;
