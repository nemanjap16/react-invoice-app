import styled from "styled-components";
import FormField from "../components/FormField.jsx";
import { useState } from "react";

const FormComponent = (props) => {
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
    <Container>
      <form onSubmit={handleForm}>
        <h1>Form</h1>
        <FormGroup>
          <FormField
            type="text"
            name="name"
            placeholder="Name"
            label="Name"
            errMsg="Can't be empty!"
            updateValue={handleChange}
          />
          <FormField
            type="text"
            name="lastName"
            placeholder="Last Name"
            label="Last Name"
            errMsg="Can't be empty!"
            updateValue={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormField
            type="email"
            name="email"
            placeholder="e.g. john@gmail.com"
            label="E-mail Address"
            errMsg="Can't be empty!"
            updateValue={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormField
            type="date"
            name="date"
            label="Birth Date"
            errMsg="Can't be empty!"
            updateValue={handleChange}
          />
        </FormGroup>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default FormComponent;

const Container = styled.div``;

const FormGroup = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 1rem;
`;
