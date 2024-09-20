import { Fragment } from "react/jsx-runtime";
import "./App.css";
import TestMCQPage from "./page/testMCQpage";
import GreetingsPage from "./page/greetingsPage";
import { useUserName } from "./context/userNameContext";

function App() {
  const { isQuizStarted } = useUserName();
  return (
    <Fragment>{!isQuizStarted ? <GreetingsPage /> : <TestMCQPage />}</Fragment>
  );
}

export default App;
