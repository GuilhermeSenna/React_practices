import { useEffect } from "react";
import { Button as Btn } from "react-bootstrap";

const Button = (props) => {
  const btnHandler = () => {
    props.buttonAction();
  };

  console.log(props);

  return (
    <Btn className={props.style_} onClick={btnHandler}>
      Clique aqui
    </Btn>
  );
};

export default Button;
