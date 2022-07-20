import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Button = ({ type, variant, handleEvent }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <StyledButton
      onClick={handleEvent}
      theme={currentTheme}
      variant={variant}
      type={type}
    >{`${variant}`}</StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  appearance: none;
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 17px 24px;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) => {
    switch (props.variant) {
      case "edit":
        return {
          backgroundColor:
            props.theme.name == "light-theme" ? "#F9FAFE" : "#252945",
          color: props.theme.name == "light-theme" ? "#7E88C3" : "#DFE3FA",
        };
      case "delete":
        return {
          backgroundColor:
            props.theme.name == "light-theme" ? "#EC5757" : "#EC5757",
          color: props.theme.name == "light-theme" ? "#FFF" : "#FFF",
        };
      case "mark as paid":
        return {
          backgroundColor:
            props.theme.name == "light-theme" ? "#7C5DFA" : "#7C5DFA",
          color: props.theme.name == "light-theme" ? "#FFF" : "#FFF",
        };
      case "discard":
        return {
          backgroundColor:
            props.theme.name == "light-theme" ? "#F9FAFE" : "#F9FAFE",
          color: props.theme.name == "light-theme" ? "#7E88C3" : "#7E88C3",
        };
      case "save as draft":
        return {
          backgroundColor:
            props.theme.name == "light-theme" ? "#373B53" : "#373B53",
          color: props.theme.name == "light-theme" ? "#888EB0" : "#DFE3FA",
        };
      case "save & send":
        return {
          backgroundColor:
            props.theme.name == "light-theme" ? "#7C5DFA" : "#7C5DFA",
          color: props.theme.name == "light-theme" ? "#DFE3FA" : "#DFE3FA",
        };

      default:
        break;
    }
  }};

  &:hover {
    ${(props) => {
      switch (props.variant) {
        case "edit":
          return {
            backgroundColor:
              props.theme.name == "light-theme" ? "#DFE3FA" : "#FFF",
            color: props.theme.name == "light-theme" ? "#7E88C3" : "#7E88C3",
          };
        case "delete":
          return {
            backgroundColor:
              props.theme.name == "light-theme" ? "#FF9797" : "#FF9797",
            color: props.theme.name == "light-theme" ? "#FFF" : "#FFF",
          };
        case "mark as paid":
          return {
            backgroundColor:
              props.theme.name == "light-theme" ? "#9277FF" : "#9277FF",
            color: props.theme.name == "light-theme" ? "#FFF" : "#FFF",
          };
        case "discard":
          return {
            backgroundColor:
              props.theme.name == "light-theme" ? "#7E88C3" : "#7E88C3",
            color: props.theme.name == "light-theme" ? "#fff" : "#fff",
          };
        case "save as draft":
          return {
            backgroundColor:
              props.theme.name == "light-theme" ? "#0C0E16" : "#0C0E16",
            color: props.theme.name == "light-theme" ? "#888EB0" : "#888EB0",
          };
        case "save & send":
          return {
            backgroundColor:
              props.theme.name == "light-theme" ? "#9277FF" : "#9277FF",
            color: props.theme.name == "light-theme" ? "#fff" : "#fff",
          };

        default:
          break;
      }
    }};
  }
`;
