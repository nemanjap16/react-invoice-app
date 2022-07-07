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
  flex: 1;
  height: 100%;
  background-color: white;
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
  color: ${(props) => (props.primary ? "red" : "blue")};
`;

const ErrorMessage = styled.span`
  color: ${(props) => (props.error ? "red" : "blue")};
`;

const FormInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.primary};
`;
