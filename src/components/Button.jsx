import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Button = ({ type }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <StyledButton theme={currentTheme} variant={type}>{`${type}`}</StyledButton>
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

        default:
          break;
      }
    }};
  }
`;
