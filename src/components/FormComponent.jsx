import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import FormField from "../components/FormField.jsx";
import { useState } from "react";
import PlusIcon from "./PlusIcon";

const FormComponent = (props) => {
  const { currentTheme } = useContext(ThemeContext);

  // const handleForm = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   console.log(Object.fromEntries(data.entries()));
  // };

  // form state
  const [values, setValues] = useState({
    username: "",
    lastName: "",
    email: "",
    date: "",
  });

  // create handle form function
  const handleForm = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      username: "",
      lastName: "",
      email: "",
      date: "",
    });
  };

  // handle on Change
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleForm}>
          <Title>New Invoice</Title>
          <FormContainer>
            <Subtitle>Bill From</Subtitle>
            <FormGroup>
              <FormField
                type="text"
                name="streetAddress"
                placeholder=""
                label="Street Address"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormField
                type="text"
                name="city"
                placeholder=""
                label="City"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
              <FormField
                type="text"
                name="postCode"
                placeholder=""
                label="Post Code"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
              <FormField
                type="text"
                name="country"
                placeholder=""
                label="Country"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
            </FormGroup>
            <Subtitle>Bill To</Subtitle>
            <FormGroup>
              <FormField
                type="text"
                name="clientName"
                placeholder=""
                label="Client's Name"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormField
                type="email"
                name="clientEmail"
                placeholder="e.g. john@gmail.com"
                label="Client's Email"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormField
                type="text"
                name="clientStreetAddress"
                placeholder=""
                label="Street Address"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormField
                type="text"
                name="clientCity"
                placeholder=""
                label="City"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
              <FormField
                type="text"
                name="clientPostCode"
                placeholder=""
                label="Post Code"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
              <FormField
                type="text"
                name="clientCountry"
                placeholder=""
                label="Country"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormField
                type="date"
                name="invoiceDate"
                label="Invoice Date"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />

              <select style={{ flex: 1 }} name="paymentTerms" id=""></select>
            </FormGroup>
            <FormGroup>
              <FormField
                type="text"
                name="projectDescription"
                placeholder=""
                label="Project Description"
                errMsg="Can't be empty!"
                updateValue={handleChange}
              />
            </FormGroup>
            <LargeButton theme={currentTheme} type="submit">
              <PlusIcon color={currentTheme.plusIcon} /> Add New Item
            </LargeButton>
            <Error>- All fields must be added</Error>
            <Error>- An item must be added</Error>
          </FormContainer>
        </form>
      </Container>
    </Wrapper>
  );
};

export default FormComponent;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.16);
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 833px;
  padding: 56px;
  padding-right: 26px;
  padding-left: calc(103px + 56px);
  background-color: ${({ theme }) => theme.currentTheme.formBg};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1;
`;

const FormContainer = styled.div`
  height: 80vh;
  padding-right: 30px;
  padding-bottom: 150px;
  overflow-y: scroll;
`;

const FormGroup = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const Title = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.currentTheme.title};
`;

const Subtitle = styled.h5`
  margin-top: 48px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.purple};
`;

const LargeButton = styled.button`
  appearance: none;
  border: none;
  border-radius: 50px;
  outline: none;
  font-size: 15px;
  font-weight: 700;
  padding: 18px;
  width: 100%;
  color: ${(props) => {
    return props.theme.name == "light-theme" ? "#7E88C3" : "#DFE3FA";
  }};
  background-color: ${(props) => {
    return props.theme.name == "light-theme" ? "#DFE3FA" : "#252945";
  }};
  margin-bottom: 32px;
`;

const Error = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.red};
  line-height: 1.8;
`;
