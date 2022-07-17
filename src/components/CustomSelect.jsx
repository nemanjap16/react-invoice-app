import { useState, useRef, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import ArrowDownIcon from "./ArrowDownIcon";

const CustomSelect = ({ label, errMsg, options, value = 30, values }) => {
  const [paymentTerms, setPaymentTerms] = useState(false);
  const [active, setActive] = useState(false);
  const { currentTheme } = useContext(ThemeContext);
  const arrowDown = useRef(null);

  const toggleTerms = () => {
    if (paymentTerms) {
      arrowDown.current.childNodes[1].style = "transform: rotate(0deg)";
      setActive(!active);
    } else {
      arrowDown.current.childNodes[1].style = "transform: rotate(180deg)";
      setActive(!active);
    }
    return setPaymentTerms(!paymentTerms);
  };

  const setOption = (e) => {
    const selected = document.getElementById("selected");

    let selectedValue = e.target.dataset.name;
    selected.innerText =
      selectedValue > 1
        ? `Net ${e.target.dataset.name} Days`
        : `Net ${e.target.dataset.name} Day`;
    values.paymentTerms = e.target.dataset.name;
  };
  return (
    <Select onClick={toggleTerms}>
      <FlexContainer>
        <Label>{label}</Label>
        {value ? "" : <ErrorMessage>{errMsg}</ErrorMessage>}
      </FlexContainer>
      <Container
        active={active}
        variant={currentTheme.name}
        ref={arrowDown}
        type="text"
      >
        <Selected id="selected">
          {value > 1 ? `Net ${value} days` : `Net ${value} day`}
        </Selected>
        <ArrowDownIcon />
      </Container>
      <Options>
        {paymentTerms &&
          options.map((el) => (
            <Option key={el} data-name={el} onClick={(e) => setOption(e)}>
              {el > 1 ? `Net ${el} days` : `Net ${el} day`}
            </Option>
          ))}
      </Options>
    </Select>
  );
};

export default CustomSelect;

const Select = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.currentTheme.text};
  background-color: ${({ theme }) => theme.currentTheme.formBg};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 7px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
`;

const Container = styled.div`
  flex: 1;
  font-weight: 700;
  font-size: 12px;
  width: 100%;
  height: 55px;
  ${(props) => {
    switch (props.variant) {
      case "light-theme":
        return {
          border: `1px solid`,
          borderColor: props.active ? `#7C5DFA` : `#7e88c4`,
        };
      case "dark-theme":
        return {
          border: props.active ? "1px solid" : "1px transparent",
          borderColor: `#7C5DFA`,
        };
    }
  }}
  border-radius: 5px;
  padding: 0 18px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Selected = styled.div`
  color: ${({ theme }) => theme.currentTheme.title};
`;

const Options = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 6px;
  cursor: pointer;
`;

const Option = styled.div`
  padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayish};
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.currentTheme.title};

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
