import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import { ContextProvider } from "./context/AppContext";
import GoalsList from "./components/GoalsList";

function App() {
  return (
    <ContextProvider>
      <Container>
        <Header />
        <GoalsList />
      </Container>
    </ContextProvider>
  );
}

const Container = styled.div``;
export default App;
