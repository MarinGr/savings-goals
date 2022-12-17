import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();

const goalExample = [{ id: 123, title: "Holiday", target: 700, saved: 400 }];

export function ContextProvider({ children }) {
  const [goals, setGoals] = useState(getInitialData());
  const [show, setShow] = useState(false);
  const [updatedGoal, setUpdatedGoal] = useState(0);

  useEffect(() => {
    localStorage.setItem("goalsData", JSON.stringify(goals));
  }, [goals]);

  function getInitialData() {
    const goalsData = localStorage.getItem("goalsData");
    return goalsData ? JSON.parse(goalsData) : goalExample;
  }

  useEffect(() => {
    if (updatedGoal) {
      setGoals((prevGoals) => [...prevGoals, updatedGoal]);
    }
  }, [updatedGoal]);

  function addGoal(title, target) {
    setGoals((prevGoals) => [
      ...prevGoals,
      {
        id: uuidv4(),
        title: title,
        target: target,
        saved: 0,
      },
    ]);
  }

  function deleteGoal(id) {
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  }

  function editGoal(id, title, target, saved) {
    const editedGoal = goals.find((goal) => goal.id === id);
    setUpdatedGoal({
      ...editedGoal,
      title: title,
      target: target,
      saved: saved,
    });
    const filteredGoals = goals.filter((goal) => goal.id !== id);
    setGoals(filteredGoals);
  }

  return (
    <AppContext.Provider
      value={{ goals, show, setShow, addGoal, deleteGoal, editGoal }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
