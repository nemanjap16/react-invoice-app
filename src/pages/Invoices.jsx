import styled, { ThemeContext } from "styled-components";
import { useInvoicesContext } from "../hooks/useInvoicesContext";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowLeft from "../components/ArrowLeft";
import InvoiceStatus from "../components/InvoiceStatus";
import Loader from "../components/Loader";
import Button from "../components/Button";
import FormComponent from "../components/FormComponent";
import { formatDate } from "../utilities/utility";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const Invoices = () => {
  const { currentTheme } = useContext(ThemeContext);
  const { dispatch, currentInvoice } = useInvoicesContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    `https://invoices-mevn.herokuapp.com/api/invoices/${id}`
  );
  if (error) {
    console.log(error);
    navigate("/");
  }

  useEffect(() => {
    dispatch({ type: "CURRENT_INVOICE", payload: data });
  }, [isLoading]);

  const toggleForm = (e) => {
    dispatch({ type: "TOGGLE_FORM" });
  };

  return (
    <>
      {!isLoading ? (
        <Container>
          <FormComponent currentInvoice={currentInvoice} />
          <Flex style={{ marginBottom: "32px" }}>
            <ArrowLeft />
            <GoBack style={{ marginLeft: "28px" }} onClick={() => navigate(-1)}>
              Go back
            </GoBack>
          </Flex>
          <Header variant={currentTheme}>
            <Flex>
              <Text style={{ marginRight: "28px" }}>Status</Text>
              {data ? <InvoiceStatus status={data?.status} /> : ""}
            </Flex>
            <Buttons>
              <Button type={"edit"} toggleForm={toggleForm}>
                Edit
              </Button>
              <Button type={"delete"}>Delete</Button>
              {data?.status !== "paid" && (
                <Button type={"mark as paid"}>Mark as Paid</Button>
              )}
            </Buttons>
          </Header>
          <Details variant={currentTheme}>
            <FlexBetween style={{ marginBottom: "21px" }}>
              <Invoice>
                <ItemID>
                  <span>#</span> {data?._id}{" "}
                </ItemID>
                <ItemName>{data?.description}</ItemName>
              </Invoice>
              <SenderAddress>
                <p>{data?.senderAddress.street}</p>
                <p>{data?.senderAddress.city}</p>
                <p>{data?.senderAddress.postCode}</p>
                <p>{data?.senderAddress.country}</p>
              </SenderAddress>
            </FlexBetween>
            <ContainerColumn>
              <Column>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5>Invoice Date</h5>
                    <h3>{formatDate(data?.createdAt)}</h3>
                  </div>
                  <div>
                    <h5>Payment Due</h5>
                    <h3>{formatDate(data?.paymentDue)}</h3>
                  </div>
                </div>
              </Column>
              <Column>
                <h5>Bill To</h5>
                <h3>{data?.clientName}</h3>
                <p>{data?.clientAddress.street}</p>
                <p>{data?.clientAddress.city}</p>
                <p>{data?.clientAddress.postCode}</p>
                <p>{data?.clientAddress.country}</p>
              </Column>
              <Column>
                <h5>Sent To</h5>
                <h3>{data?.clientEmail}</h3>
              </Column>
            </ContainerColumn>
            <InvoiceDetails>
              <FlexBetween>
                <div style={{ flex: 2 }}>Item Name</div>
                <div
                  style={{
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  QTY.
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>Price</div>
                <div style={{ flex: 1, textAlign: "right" }}>Total</div>
              </FlexBetween>
              <div>
                {data?.items.map((el, index) => (
                  <FlexBetween style={{ marginBottom: "32px" }} key={index}>
                    <div className="bold" style={{ flex: 2 }}>
                      {el.name}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        textAlign: "right",
                        paddingRight: "20px",
                        fontWeight: 700,
                      }}
                    >
                      {el.quantity}
                    </div>
                    <div
                      style={{ flex: 1, textAlign: "right", fontWeight: 700 }}
                    >
                      $ {Number(el.price).toFixed(2)}
                    </div>
                    <div
                      className="bold"
                      style={{ flex: 1, textAlign: "right" }}
                    >
                      $ {Number(el.total).toFixed(2)}
                    </div>
                  </FlexBetween>
                ))}
              </div>
            </InvoiceDetails>
            <InvoiceTotal variant={currentTheme}>
              <FlexBetween>
                <p className="amountDue">Amount Due</p>
                <p className="total">$ {Number(data?.total).toFixed(2)}</p>
              </FlexBetween>
            </InvoiceTotal>
          </Details>
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

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-bottom: 24px;
`;

const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.currentTheme.text};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Details = styled.div`
  width: 730px;
  border-radius: 8px;
  padding: 48px;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
  box-shadow: ${(props) => {
    return props.variant.name == "light-theme"
      ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      : "none";
  }};
`;

const Invoice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemName = styled.p`
  font-size: 12px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.currentTheme.text};
`;

const ItemID = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.currentTheme.title};

  span {
    color: ${({ theme }) => theme.currentTheme.text};
  }
`;

const SenderAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.currentTheme.text};
  }
`;
const ContainerColumn = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 45px;
`;

const Column = styled.div`
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.currentTheme.text};
    line-height: 1.75;
  }

  h3 {
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.currentTheme.title};
    margin-bottom: 8px;
  }

  h5 {
    font-weight: normal;
    font-size: 12px;
    color: ${({ theme }) => theme.currentTheme.text};
    margin-bottom: 12px;
  }
`;

const InvoiceDetails = styled.div`
  padding: 32px 32px 0 32px;
  font-size: 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.currentTheme.invoiceDetailsBg};
  color: ${({ theme }) => theme.currentTheme.text};
  display: flex;
  flex-direction: column;
  gap: 32px;

  .bold {
    font-weight: 700;
    color: ${({ theme }) => theme.currentTheme.title};
  }
`;

const InvoiceTotal = styled.div`
  padding: 32px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  background-color: ${(props) => {
    return props.variant.name == "light-theme" ? "#373B53" : "#0C0E16";
  }};

  .amountDue {
    font-size: 12px;
  }

  .total {
    font-size: 18px;
    font-weight: 700;
  }
`;
