import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Modal from "./Modal";
import EditGoalForm from "./EditGoalForm";
import AddMoney from "./AddMoney";
import WithdrawMoney from "./WithdrawMoney";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

export default function GoalCard({ goal }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const { deleteGoal } = useContext(AppContext);

  const progress = ((goal.saved / goal.target) * 100).toFixed();

  return (
    <Container>
      {showEdit && (
        <Modal
          title={"Edit goal"}
          show={showEdit}
          onClose={() => setShowEdit(false)}
        >
          <EditGoalForm onClose={() => setShowEdit(false)} goal={goal} />
        </Modal>
      )}
      {showAdd && (
        <Modal
          title={"Add money"}
          show={showAdd}
          onClose={() => setShowAdd(false)}
        >
          <AddMoney onClose={() => setShowAdd(false)} goal={goal} />
        </Modal>
      )}
      {showWithdraw && (
        <Modal
          title={"Withdraw money"}
          show={showWithdraw}
          onClose={() => setShowWithdraw(false)}
        >
          <WithdrawMoney onClose={() => setShowWithdraw(false)} goal={goal} />
        </Modal>
      )}
      <Header>
        <GoalTitle>{goal.title}</GoalTitle>
        <Controls>
          <ControlsBtn onClick={() => setShowEdit(true)}>
            <MdModeEdit title="Edit" />
          </ControlsBtn>
          <ControlsBtn title="Delete" onClick={() => deleteGoal(goal.id)}>
            <RiDeleteBin6Line />
          </ControlsBtn>
        </Controls>
      </Header>
      <GoalDetails>
        <AmountInfo>
          <Target>${goal.saved}</Target>
          <Saved>of ${goal.target}</Saved>
        </AmountInfo>
        <ProgressBar progress={progress} />
      </GoalDetails>
      <MathControls>
        <MathBtn add onClick={() => setShowAdd(true)}>
          <AiOutlinePlus />
          Add
        </MathBtn>
        <MathBtn withdraw onClick={() => setShowWithdraw(true)}>
          <AiOutlineMinus />
          Withdraw
        </MathBtn>
      </MathControls>
    </Container>
  );
}

const Container = styled.div`
  color: var(--primary-text-color);
  min-width: 300px;
  min-height: 220px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  gap: 16px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const GoalTitle = styled.h4``;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ControlsBtn = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  color: var(--secondary-text-color);
  font-size: 18px;
  transition: 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
    transition: 0.4s ease;
  }
`;

const GoalDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const AmountInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Target = styled.p`
  font-size: 24px;
  line-height: 1;
  font-weight: bold;
`;

const Saved = styled.p`
  font-size: 14px;
`;

const MathControls = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const MathBtn = styled.button`
  border: none;
  outline: none;
  padding: 8px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: var(--secondary-color);
  transition: 0.3s ease;
  color: var(--primary-color);
  cursor: pointer;
  border-right: ${(props) =>
    props.add && "1px solid var(--secondary-text-color)"};
  border-bottom-left-radius: ${(props) => props.add && "10px"};
  border-bottom-right-radius: ${(props) => props.withdraw && "10px"};

  &:hover {
    background-color: var(--secondary-hover-color);
  }
`;
