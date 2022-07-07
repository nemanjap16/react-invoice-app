import styled from "styled-components";
import { Link } from "react-router-dom";

const Invoice = ({ invoice, id }) => {
  return (
    <Link to={`/invoices/${id}`}>
      <Container>{invoice.status}</Container>
    </Link>
  );
};

export default Invoice;

const Container = styled.div`
  padding: 28px;
  border-radius: 8px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
`;
