import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const InvoiceStatus = ({ status }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Status theme={currentTheme} variant={status}>
      <Circle theme={currentTheme} variant={status} />
      {`${status}`}
    </Status>
  );
};

export default InvoiceStatus;

const Status = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  text-transform: capitalize;
  padding: 12px 0px;
  width: 100px;
  border-radius: 8px;
  color: ${(props) => {
    switch (props.variant) {
      case "draft":
        return props.theme.name == "light-theme"
          ? "hsl(231, 37%, 63%)"
          : "hsl(231, 73%, 93%)";
      case "pending":
        return "hsl(34, 100%, 50%)";
      case "paid":
        return "hsl(160, 67%, 52%)";
      default:
        break;
    }
  }};
  background-color: ${(props) => {
    switch (props.variant) {
      case "draft":
        return props.theme.name == "light-theme"
          ? "hsla(231, 37%, 63%, 0.16)"
          : "hsla(231, 73%, 93%, 0.16)";
      case "pending":
        return "hsla(34, 100%, 50%, 0.16)";
      case "paid":
        return "hsla(160, 67%, 52%, 0.16)";
      default:
        break;
    }
  }};
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.variant) {
      case "draft":
        return props.theme.name == "light-theme"
          ? "hsl(231, 37%, 63%)"
          : "hsl(231, 73%, 93%)";
      case "pending":
        return "hsl(34, 100%, 50%)";
      case "paid":
        return "hsl(160, 67%, 52%)";
      default:
        break;
    }
  }};
`;
