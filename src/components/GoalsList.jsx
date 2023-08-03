import { useContext } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import GoalCard from "./GoalCard";
import Confetti from "react-confetti";

export default function GoalsList() {
  const { goals, showConfetti, setShowConfetti } = useContext(AppContext);

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          recycle={false}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      {goals.length === 0 ? (
        <NoGoalsContainer>You have no goals yet</NoGoalsContainer>
      ) : (
        <Container>
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </Container>
      )}
    </>
  );
}

const NoGoalsContainer = styled.div`
  height: 100vh;
  color: var(--secondary-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  background-color: var(--white);
  padding: 36px;
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
`;
