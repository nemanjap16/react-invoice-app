import { useState } from "react";
import styled from "styled-components";
import ArrowDownIcon from "./ArrowDownIcon";

const CustomSelect = ({ label, errMsg, options, value = 1, values }) => {
  const [paymentTerms, setPaymentTerms] = useState(false);
  const toggleTerms = () => {
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
      <Container type="text">
        <Selected id="selected">
          {value > 1 ? `Net ${value} days` : `Net ${value} day`}
        </Selected>
        <ArrowDownIcon />
      </Container>
      <Options>
        {paymentTerms &&
          options.map((el) => (
            <Option key={el} data-name={el} onClick={setOption}>
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
  border: 1px solid ${({ theme }) => theme.currentTheme.inputBorder};
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
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
