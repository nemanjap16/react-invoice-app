import { useInvoicesContext } from "../hooks/useInvoicesContext";
import styled from "styled-components";
import FormComponent from "../components/FormComponent";

const Test = () => {
  const { dispatch } = useInvoicesContext();
  return (
    <Testt>
      <FormComponent />
      <h1>test</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_FORM" })}>
        toggle form
      </button>
    </Testt>
  );
};

export default Test;

const Testt = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  background-color: red;
`;
