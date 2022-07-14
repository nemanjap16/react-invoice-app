import styled from "styled-components";

const FormField = ({
  type,
  name,
  placeholder,
  id,
  value,
  min,
  label,
  errMsg,
  updateValue,
}) => {
  return (
    <Field>
      <FlexContainer>
        <FormLabel primary>{label}</FormLabel>
        <ErrorMessage>{errMsg}</ErrorMessage>
      </FlexContainer>
      <FormInput
        type={type}
        name={name}
        id={id}
        value={value}
        min={min}
        placeholder={placeholder}
        onChange={updateValue}
      />
    </Field>
  );
};

export default FormField;

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
  /* color: ${(props) => (props.primary ? "red" : "blue")}; */
`;

const ErrorMessage = styled.span`
  /* color: ${(props) => (props.error ? "red" : "blue")}; */
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
  padding: 18px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
`;
