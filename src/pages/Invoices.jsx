import styled, { ThemeContext } from "styled-components";
import { useInvoicesContext } from "../hooks/useInvoicesContext";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowLeft from "../components/ArrowLeft";
import InvoiceStatus from "../components/InvoiceStatus";
import Loader from "../components/Loader";
import Button from "../components/Button";

const Invoices = () => {
  const { currentTheme } = useContext(ThemeContext);
  const { currentInvoice, dispatch } = useInvoicesContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);
  console.log(currentInvoice);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://invoices-mevn.herokuapp.com/api/invoices/${id}`
      );
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "CURRENT_INVOICE", payload: data });
      }
    };

    fetchData();
  }, [dispatch]);

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <>
      {!load ? (
        <Container>
          <Flex style={{ marginBottom: "32px" }}>
            <ArrowLeft />
            <GoBack style={{ marginLeft: "28px" }} onClick={() => navigate(-1)}>
              Go back
            </GoBack>
          </Flex>
          <Header variant={currentTheme}>
            <Flex>
              <Text style={{ marginRight: "28px" }}>Status</Text>
              {currentInvoice ? (
                <InvoiceStatus status={currentInvoice?.status} />
              ) : (
                ""
              )}
            </Flex>
            <Buttons>
              <Button type={"edit"}>Edit</Button>
              <Button type={"delete"}>Delete</Button>
              {currentInvoice.status !== "paid" && (
                <Button type={"mark as paid"}>Mark as Paid</Button>
              )}
            </Buttons>
          </Header>
          <Details variant={currentTheme}></Details>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Invoices;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 730px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const GoBack = styled.h3`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.currentTheme.goBack};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grayish};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
  box-shadow: ${(props) => {
    return props.variant.name == "light-theme"
      ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      : "none";
  }};
`;

const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.currentTheme.subtitle};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Details = styled.div``;
