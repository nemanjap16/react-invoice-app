import { useInvoicesContext } from "../hooks/useInvoicesContext";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const Invoices = () => {
  const { invoices, dispatch } = useInvoicesContext();
  console.log(useFetch("https://invoices-mevn.herokuapp.com/api/invoices"));

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://invoices-mevn.herokuapp.com/api/invoices"
      );
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_INVOICES", payload: data });
      }
    };

    fetchData();
  }, [dispatch]);

  return <div>Invoices</div>;
};

export default Invoices;
