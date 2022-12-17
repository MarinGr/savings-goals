import styled from "styled-components";
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

export default function AddMoney(props) {
  const [showError, setShowError] = useState(false);
  const [addAmount, setAddAmount] = useState("");
  const { id, title, target, saved } = props.goal;
  const { editGoal } = useContext(AppContext);

  function validateForm(e, addAmount) {
    e.preventDefault();
    if (addAmount === "") {
      setShowError(true);
      return;
    }
    const sum = saved + Number(addAmount);
    editGoal(id, title, target, sum);
  }

  return (
    <Container>
      {showError && (
        <ErrorMessage className="error">Please fill in this field</ErrorMessage>
      )}
      <InputGroup>
        <Label>Amount</Label>
        <Input
          autoFocus
          required="required"
          type="number"
          placeholder="$100"
          min="1"
          max="1000000000"
          value={addAmount}
          onChange={(e) => setAddAmount(e.target.value)}
        ></Input>
      </InputGroup>
      <Controls>
        <Button type="button" className="close-btn" onClick={props.onClose}>
          Cancel
        </Button>

        <Button
          save
          type="submit"
          className="submit-btn"
          onClick={(e) => validateForm(e, addAmount)}
        >
          Save
        </Button>
      </Controls>
    </Container>
  );
}

const Container = styled.form``;

const ErrorMessage = styled.div`
  background-color: var(--error-bg-color);
  color: var(--error-text-color);
  margin-bottom: 12px;
  padding: 6px 12px;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label``;

const Input = styled.input`
  border: 1px solid var(--secondary-color);
  outline: none;
  padding: 6px 12px;
  border-radius: 5px;
  width: 70%;
  margin-left: auto;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Button = styled.button`
  width: 100px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 6px 16px;
  transition: 0.3s ease;
  cursor: pointer;
  border: 1px solid
    ${(props) => (props.save ? "none" : "var(--secondary-color)")};
  color: ${(props) => (props.save ? "#fff" : "var(--primary-color)")};
  background-color: ${(props) =>
    props.save ? "var(--primary-color)" : "#fff"};

  &:hover {
    background-color: ${(props) =>
      props.save ? "var(--primary-hover-color)" : "var(--secondary-color)"};
  }
`;
