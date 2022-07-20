import { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import FormField from "../components/FormField.jsx";
import PlusIcon from "./PlusIcon";
import { useInvoicesContext } from "../hooks/useInvoicesContext.js";
import Button from "./Button.jsx";
import CustomSelect from "./CustomSelect.jsx";
import CustomDate from "./CustomDate.jsx";
import DeleteIcon from "./DeleteIcon";

const FormComponent = () => {
  const { currentTheme } = useContext(ThemeContext);
  const { dispatch, currentInvoice, isOpen } = useInvoicesContext();
  const [initial, setInitial] = useState([
    { name: "", price: 1, quantity: 1, total: 1 },
  ]);

  // const handleForm = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   console.log(Object.fromEntries(data.entries()));
  // };

  // form state
  const [values, setValues] = useState({
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientStreetAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    createdAt: "",
    paymentDue: "",
    paymentTerms: 30,
    description: "",
    items: initial,
  });

  useEffect(() => {
    if (currentInvoice !== undefined) {
      setInitial(currentInvoice?.items);
      //
      setValues({
        streetAddress: currentInvoice?.senderAddress?.street,
        city: currentInvoice?.senderAddress?.city,
        postCode: currentInvoice?.senderAddress?.postCode,
        country: currentInvoice?.senderAddress?.country,
        clientName: currentInvoice?.clientName,
        clientEmail: currentInvoice?.clientEmail,
        clientStreetAddress: currentInvoice?.clientAddress?.street,
        clientCity: currentInvoice?.clientAddress?.city,
        clientPostCode: currentInvoice?.clientAddress?.postCode,
        clientCountry: currentInvoice?.clientAddress?.country,
        createdAt: currentInvoice?.createdAt,
        paymentDue: currentInvoice?.paymentDue,
        paymentTerms: currentInvoice?.paymentTerms,
        description: currentInvoice?.description,
        items: currentInvoice?.items?.map((item) => item),
        itemName: currentInvoice?.items?.map((item) => item.name),
      });
    }
  }, [currentInvoice]);

  // create handle form function
  const handleForm = (e) => {
    e.preventDefault();
    console.log(values);
    // setValues({
    //   streetAddress: "",
    //   city: "",
    //   postCode: "",
    //   country: "",
    //   clientName: "",
    //   clientEmail: "",
    //   clientStreetAddress: "",
    //   clientCity: "",
    //   clientPostCode: "",
    //   clientCountry: "",
    //   createdAt: "",
    //   paymentDue: "",
    //   paymentTerms: "",
    //   description: "",
    // });
  };

  // handle on input change
  const handleChange = (e) => {
    // one way
    // const fields = { ...values };
    // fields[e.target.name] = e.target.value;
    // setValues({ ...fields });

    // second way
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleItems = (e, index) => {
    const values = [...initial];
    values[index][e.target.name] = e.target.value;
    setInitial(values);
  };

  const toggleForm = (e) => {
    dispatch({ type: "TOGGLE_FORM" });
  };

  const deleteItem = (index) => {
    const values = [...initial];
    values.splice(index, 1);
    setInitial(values);
  };

  const addNewItem = () => {
    setInitial([...initial, { name: "", price: 1, quantity: 1, total: 1 }]);
    values.items = initial;
  };

  return (
    <>
      {isOpen && (
        <Wrapper onClick={toggleForm}>
          <Container onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleForm}>
              <Title>New Invoice</Title>
              <FormContainer>
                <Subtitle>Bill From</Subtitle>
                <FormGroup>
                  <FormField
                    type="text"
                    name="streetAddress"
                    placeholder=""
                    value={values.streetAddress}
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
                    value={values.city}
                    label="City"
                    errMsg="Can't be empty!"
                    updateValue={handleChange}
                  />
                  <FormField
                    type="text"
                    name="postCode"
                    placeholder=""
                    value={values.postCode}
                    label="Post Code"
                    errMsg="Can't be empty!"
                    updateValue={handleChange}
                  />
                  <FormField
                    type="text"
                    name="country"
                    placeholder=""
                    value={values.country}
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
                    value={values.clientName}
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
                    value={values.clientEmail}
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
                    value={values.streetAddress}
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
                    value={values.clientCity}
                    label="City"
                    errMsg="Can't be empty!"
                    updateValue={handleChange}
                  />
                  <FormField
                    type="text"
                    name="clientPostCode"
                    placeholder=""
                    value={values.clientPostCode}
                    label="Post Code"
                    errMsg="Can't be empty!"
                    updateValue={handleChange}
                  />
                  <FormField
                    type="text"
                    name="clientCountry"
                    placeholder=""
                    value={values.clientCountry}
                    label="Country"
                    errMsg="Can't be empty!"
                    updateValue={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <FormField
                    type="date"
                    name="invoiceDate"
                    value={values.date}
                    label="Invoice Date"
                    errMsg="Can't be empty!"
                    updateValue={handleChange}
                  />
                  {/* <CustomDate
                    type="date"
                    name="invoiceDate"
                    value={values.createdAt}
                    label="Invoice Date"
                    errMsg="Can't be empty!"
                    updateValue={handleChange}
                  /> */}
                  <CustomSelect
                    label="Payment Terms"
                    errMsg="Can't be empty!"
                    name="paymentTerms"
                    value={values.paymentTerms}
                    options={["1", "7", "14", "30"]}
                    values={values}
                  />
                </FormGroup>
                <FormGroup>
                  <FormField
                    type="text"
                    name="description"
                    placeholder="e.g. Graphic Design Service"
                    value={values.description}
                    label="Project Description"
                    errMsg="Can't be empty!"
                    updateValue={handleChange}
                  />
                </FormGroup>
                <ItemList>Item List</ItemList>
                <>
                  {initial?.map((item, i) => (
                    <FormGroup id="items" key={i}>
                      <FormField
                        id="item-name"
                        type="text"
                        name="name"
                        placeholder="e.g. Create Logo"
                        value={item.name}
                        label="Item Name"
                        errMsg="Can't be empty!"
                        updateValue={(e) => handleItems(e, i)}
                      />
                      <FormField
                        id="qty"
                        type="number"
                        name="quantity"
                        placeholder=""
                        value={item.quantity}
                        min={1}
                        label="QTY."
                        updateValue={(e) => handleItems(e, i)}
                      />
                      <FormField
                        id="price"
                        type="number"
                        name="price"
                        placeholder=""
                        value={Number(item.price).toFixed(2)}
                        min={1}
                        label="Price"
                        updateValue={(e) => handleItems(e, i)}
                      />
                      <FormField
                        id="total"
                        type="number"
                        name="total"
                        placeholder=""
                        value={(
                          Number(item.quantity) * Number(item.price)
                        ).toFixed(2)}
                        label="Total"
                        updateValue={(e) => handleItems(e, i)}
                      />
                      <DeleteIcon
                        color={"#888EB0"}
                        deleteItem={() => deleteItem(i)}
                      />
                    </FormGroup>
                  ))}
                </>
                <LargeButton variant={currentTheme} onClick={addNewItem}>
                  <PlusIcon color={currentTheme.plusIcon} /> Add New Item
                </LargeButton>
                <Error>- All fields must be added</Error>
                <Error>- An item must be added</Error>
              </FormContainer>
            </form>
            <Buttons>
              <Left>
                <Button
                  id="discard"
                  variant="discard"
                  handleEvent={toggleForm}
                />
              </Left>
              <Right>
                <Button
                  variant="save as draft"
                  onClick={() => console.log("save as draft")}
                />
                <Button
                  type="submit"
                  variant="save & send"
                  handleEvent={(e) => handleForm(e)}
                />
              </Right>
            </Buttons>
          </Container>
        </Wrapper>
      )}
    </>
  );
};

export default FormComponent;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.16);
  z-index: 2;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 740px;
  padding: 56px;
  padding-right: 26px;
  padding-left: calc(103px + 56px);
  background-color: ${({ theme }) => theme.currentTheme.formBg};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const FormContainer = styled.div`
  height: 80vh;
  padding-right: 30px;
  padding-bottom: 150px;
  overflow-y: scroll;

  #items {
    display: flex;
    align-items: center;
    justify-content: center;

    #item-name {
      width: 200px;
    }

    #qty {
      flex: auto;
    }

    #price {
      width: 90px;
    }

    #total {
      width: 90px;
    }
  }
`;

const FormGroup = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const LargeButton = styled.div`
  appearance: none;
  border: none;
  border-radius: 50px;
  outline: none;
  font-size: 15px;
  font-weight: 700;
  padding: 18px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  color: ${(props) => {
    return props.variant.name == "light-theme" ? "#7E88C3" : "#DFE3FA";
  }};
  background-color: ${(props) => {
    return props.variant.name == "light-theme" ? " #f9fafe" : "#7E88C3";
  }};
  margin-bottom: 32px;

  &:hover {
    color: ${(props) => {
      return props.variant.name == "light-theme" ? "#7E88C3" : "#DFE3FA";
    }};
    background-color: ${(props) => {
      return props.variant.name == "light-theme" ? "#DFE3FA" : "#252945";
    }};
  }
`;

const Error = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.red};
  line-height: 1.8;
`;

const ItemList = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 16px;
`;

const Buttons = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 740px;
  height: 102px;
  padding-left: calc(103px + 56px);
  padding-right: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  gap: 16px;
`;
