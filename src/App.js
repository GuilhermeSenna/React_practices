import "./styles.css";

import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "./Components/Button";
// import Card from "./UI/Card";
// import Container from "./UI/Container";

export default function App() {
  const [counter, setCounter] = useState(0);

  const buttonClicked = () => {
    setCounter((prev) => prev + 1);
  };

  // useEffect(() => {
  //   console.log("teste");
  // }, [counter]);

  return (
    <div className="App">
      <Container>
        <Row>
          <h2 className="text-white mb-5">
            Você clicou no botão {counter} vezes
          </h2>
          <Button
            buttonAction={buttonClicked}
            style_={"btn-success col-5 me-2"}
          />
          <Button buttonAction={buttonClicked} style_={"btn-success col-5"} />
        </Row>
        <Row className="mt-4"></Row>
      </Container>
    </div>
  );
}
