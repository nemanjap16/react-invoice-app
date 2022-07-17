import { useState } from "react";
import styled from "styled-components";

const CustomDate = ({ label, type, name, errMsg, value, updateValue }) => {
  const [error, setError] = useState(false);

  const errorMsg = (e) => {
    if (e.target.value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <Field>
      <FlexContainer>
        <FormLabel primary>{label}</FormLabel>
        {!error ? "" : <ErrorMessage>{errMsg}</ErrorMessage>}
      </FlexContainer>
      <FormInput
        type={type}
        name={name}
        value={value}
        // onChange={(e) => updateValue(e)}
        onChange={(e) => {
          updateValue(e), errorMsg(e);
        }}
        onBlur={errorMsg}
      />
    </Field>
  );
};

export default CustomDate;

const Field = styled.div`
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

const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
`;

const FormInput = styled.input`
  appearance: none;
  outline: none;
  font-weight: 700;
  font-size: 12px;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.currentTheme.inputBorder};
  border-radius: 5px;
  padding: 0 18px;
  height: 55px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
  color: ${({ theme }) => theme.currentTheme.title};

  background-image: url(/icons/icon-calendar.svg);
  background-repeat: no-repeat;
  background-position: 90%;

  &:focus {
    border: 1px solid #7c5dfa;
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;
