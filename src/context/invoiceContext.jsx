import { createContext, useState, useMemo, useContext } from "react";
import { useLocalStorage } from "../hooks/uselocalStorage";
import data from "../mockdata/mockdata.json";

// 1. Create context
// 2. Create provider function
// 3. Create value = useMemo() to memoize value
// 4. Return context provider with value
// 5. Create custom hook

const mockdata = data.map((el) => el);

const invoicesContext = createContext({});
// custom hook
export const useInvoices = () => useContext(invoicesContext);

const InvoicesProvider = ({ children }) => {
  useLocalStorage("invoices", {});
  const [invoices, setInvoices] = useState();

  const value = useMemo(() => {
    invoices, setInvoices;
  }, [invoices]);

  return (
    <invoicesContext.Provider value={value}>
      {children}
    </invoicesContext.Provider>
  );
};

export default InvoicesProvider;
