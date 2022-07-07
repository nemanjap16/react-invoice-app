import { invoiceReducerContext } from "../context/invReducerContext";
import { useContext } from "react";

export const useInvoicesContext = () => {
  const context = useContext(invoiceReducerContext);
  return context;
};
