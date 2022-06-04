import { Button as Btn } from "react-bootstrap";

const Button = (props) => {
  const btnHandler = () => {
    props.buttonAction();
  };

  return (
    <Btn className={props.style_} onClick={btnHandler}>
      {props.text}
    </Btn>
  );
};

export default Button;
