import styled from "styled-components";
import { useContext } from "react";
import Modal from "./Modal";
import AppContext from "../context/AppContext";
import AddGoalForm from "./AddGoalForm";

export default function Header() {
  const { show, setShow } = useContext(AppContext);

  return (
    <Container>
      <HeaderContent>
        <Title>Savings Goals</Title>
        <AddBtn onClick={() => setShow(true)}>Add goal</AddBtn>
        <Modal title={"Add goal"} show={show} onClose={() => setShow(false)}>
          <AddGoalForm onClose={() => setShow(false)} />
        </Modal>
      </HeaderContent>
    </Container>
  );
}

const Container = styled.div`
  background-image: var(--main-bg-image);
`;

const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  flex: 1;

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

const AddBtn = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: var(--CTA-color);
  color: #fff;
  font-weight: 500;
  box-shadow: var(--shadow);
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--CTA-hover-color);
  }
`;
