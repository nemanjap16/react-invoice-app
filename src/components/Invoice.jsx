import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import ArrowRight from "../components/ArrowRight";
import { useContext } from "react";
import { formatDate } from "../utilities/utility";

const Invoice = ({ invoice, id }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <NavLink to={`/invoices/${id}`}>
      <Container variant={currentTheme}>
        <InvoiceID>
          <span>#</span>
          {invoice._id.slice(0, 6)}...
        </InvoiceID>
        <InvoiceDate>Due {formatDate(invoice.paymentDue)}</InvoiceDate>
        <ClientName>{invoice.clientName}</ClientName>
        <InvoiceTotal>$ {invoice.total}</InvoiceTotal>
        <InvoiceStatus theme={currentTheme} variant={invoice.status}>
          <Circle theme={currentTheme} variant={invoice.status} />
          {invoice.status}
        </InvoiceStatus>
        <ArrowRight />
      </Container>
    </NavLink>
  );
};

export default Invoice;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  padding: 18px 28px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(props) => {
    return props.variant.name == "light-theme"
      ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      : "none";
  }};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`;

const InvoiceID = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.currentTheme.title};

  span {
    color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

const InvoiceDate = styled.div`
  color: ${({ theme }) => theme.colors.grayish};
  font-weight: 500;
`;

const ClientName = styled.div`
  color: ${({ theme }) => theme.colors.grayish};
  font-weight: 500;
  width: 140px;
`;

const InvoiceTotal = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.currentTheme.title};
  width: 100px;
  text-align: right;
`;

const InvoiceStatus = styled.div`
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
