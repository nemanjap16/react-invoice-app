import { createContext, useReducer } from "react";

export const invoiceReducerContext = createContext();

const initialState = {
  invoices: [],
};

export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case "SET_INVOICES":
      return {
        invoices: [...action.payload],
      };

    case "CREATE_INVOICE":
      return {
        invoices: [action.payload, ...state.invoices],
      };

    case "UPDATE_INVOICE":
      return {};

    case "DELETE_INVOICE":
      return {
        invoices: state.invoices.filter(
          (invoice) => invoice._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export const InvoiceReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(invoiceReducer, initialState);

  return (
    <invoiceReducerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </invoiceReducerContext.Provider>
  );
};