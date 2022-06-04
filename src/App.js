import "./styles.css";

import { useState, useReducer } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "./Components/Button";
// import Card from "./UI/Card";
// import Container from "./UI/Container";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset"
};

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      case ACTIONS.RESET:
        return { count: 0 };
      default:
        return state;
    }

    // return { count: state.count + 1 };
  };

  // const [] = useReducer(reducer, {count: 0});
  // Same as const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // const [counter, setCounter] = useState(0);

  const buttonIncrement = () => {
    dispatch({ type: ACTIONS.INCREMENT });
    // setCounter((prev) => prev + 1);
  };

  const buttonDecrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
    // setCounter((prev) => prev - 1);
  };

  const buttonReset = () => {
    dispatch({ type: ACTIONS.RESET });
    // setCounter(0);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <h2 className="text-white mb-5">
            Você clicou no botão {state.count} vezes
          </h2>
          <Button
            buttonAction={buttonIncrement}
            style_={"btn-success col-3"}
            text="+"
          />
          <Button
            buttonAction={buttonDecrement}
            style_={"btn-success col-3 mx-2 btn-danger"}
            text="-"
          />
          <Button
            buttonAction={buttonReset}
            style_={"btn-success col-3 btn-warning"}
            text="Reset"
          />
        </Row>
        <Row className="mt-4"></Row>
      </Container>
    </div>
  );
}
