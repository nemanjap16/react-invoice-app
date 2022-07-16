import { createContext, useReducer } from "react";

export const invoiceReducerContext = createContext();

const initialState = {
  invoices: [],
  currentInvoice: {},
  isOpen: true,
};

export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case "SET_INVOICES":
      return {
        invoices: [...action.payload],
      };

    case "CURRENT_INVOICE":
      return {
        currentInvoice: action.payload,
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

    case "TOGGLE_FORM":
      return {
        isOpen: !state.isOpen,
        invoices: state.invoices,
        currentInvoice: state.currentInvoice,
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
