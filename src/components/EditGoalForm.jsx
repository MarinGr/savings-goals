import styled from "styled-components";
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

export default function EditGoalForm(props) {
  const [showError, setShowError] = useState(false);
  const [title, setTitle] = useState(props.goal.title);
  const [target, setTarget] = useState(props.goal.target);
  const { id, saved } = props.goal;
  const { editGoal } = useContext(AppContext);

  function validateForm(e, id, title, target, saved) {
    e.preventDefault();
    if (title === "" || target === "") {
      setShowError(true);
      return;
    }
    editGoal(id, title, target, saved);
    props.onClose();
  }

  return (
    <Container>
      {showError && (
        <ErrorMessage className="error">Please fill in all fields</ErrorMessage>
      )}
      <InputGroup>
        <Label>Name</Label>
        <Input
          autoFocus
          required="required"
          type="text"
          placeholder="Name your goal..."
          minLength="1"
          maxLength="20"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
      </InputGroup>
      <InputGroup>
        <Label>Target</Label>
        <Input
          required="required"
          type="number"
          placeholder="$100"
          min="1"
          max="1000000000"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
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
          onClick={(e) => validateForm(e, id, title, target, saved)}
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
  width: 75%;
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
  border-radius: 5px;
  padding: 6px 16px;
  transition: 0.3s ease;
  cursor: pointer;
  border: 1px solid
    ${(props) => (props.save ? "none" : "var(--secondary-color)")};
  outline: none;
  color: ${(props) => (props.save ? "#fff" : "var(--primary-color)")};
  background-color: ${(props) =>
    props.save ? "var(--primary-color)" : "#fff"};

  &:hover {
    background-color: ${(props) =>
      props.save ? "var(--primary-hover-color)" : "var(--secondary-color)"};
  }
`;
