import { useRef, useState, useEffect } from "react";
import { useInvoicesContext } from "../hooks/useInvoicesContext";
import styled from "styled-components";
import ArrowDownIcon from "../components/ArrowDownIcon";
import PlusIcon from "../components/PlusIcon";
import CheckboxFilter from "../components/CheckboxFilter";
import Invoice from "../components/Invoice";

const Home = () => {
  const { invoices, dispatch } = useInvoicesContext();
  let [isOpen, setIsOpen] = useState(false);
  let [render, setRender] = useState([]);
  const arrowDown = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://invoices-mevn.herokuapp.com/api/invoices"
      );
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_INVOICES", payload: data });
        setRender(data);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleFilter = (e) => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedChekboxes = Array.from(checked).map(
      (checkbox) => checkbox.value
    );
    let filter = invoices.filter((el) => checkedChekboxes.includes(el.status));
    setRender(filter);
    if (checkedChekboxes.length === 0) {
      setRender(invoices);
    }
  };

  const toggleFilter = () => {
    if (isOpen) {
      arrowDown.current.childNodes[1].style = "transform: rotate(0deg)";
      setIsOpen(false);
    } else {
      arrowDown.current.childNodes[1].style = "transform: rotate(180deg)";
      setIsOpen(true);
    }
  };
  return (
    <>
      <Container>
        <FlexColumn>
          <Title>Invoices</Title>
          <Subtitle>
            There are <span>{}</span>
            pending invoies
          </Subtitle>
        </FlexColumn>
        <Flex ref={arrowDown} onClick={toggleFilter}>
          <Text>Filter by status</Text>
          <ArrowDownIcon />
          <div className="filter" onClick={(e) => e.stopPropagation()}>
            {isOpen && <CheckboxFilter handleFilter={handleFilter} />}
          </div>
        </Flex>

        <Button>
          <Circle>
            <PlusIcon color="#7C5DFA" />
          </Circle>
          New Invoice
        </Button>
      </Container>
      <InvoicesContainer>
        {render?.map((invoice) => (
          <Invoice key={invoice._id} invoice={invoice} id={invoice._id} />
        ))}
      </InvoicesContainer>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 730px;
  width: 730px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.currentTheme.title};
`;

const Subtitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.currentTheme.subtitle};
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.currentTheme.title};
`;

const Flex = styled.div`
  margin-left: auto;
  margin-right: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  position: relative;

  .filter {
    position: absolute;
    top: 38px;
    left: -46px;
    cursor: auto;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px 8px 8px;
  border-radius: 50px;
  outline: none;
  border: none;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  cursor: pointer;
`;

const Circle = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  place-content: center;
`;

const InvoicesContainer = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  max-width: 730px;
  width: 100%;
  gap: 12px;
`;
