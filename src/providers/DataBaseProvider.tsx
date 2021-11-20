// import plugin
import React, { useState, useEffect } from "react";

// create context
export const DataBaseContext = React.createContext({
  portfolio: [],
  histories: [],
  tags: [],
  dataContact: {},
  error: { portfolio: false, histories: false, tags: false, dataContact: false },
});

// create interface

interface DataBaseProviderProps {
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
const DataBaseProvider = ({ children }: DataBaseProviderProps) => {
  const [tags, setTags] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [histories, setHistories] = useState([]);
  const [dataContact, setDataContact] = useState({});
  const [error, setError] = useState({ portfolio: false, histories: false, tags: false, dataContact: false });

  const callToApi = async (url: string, set: string) => {
    interface requestOptionsProps {
      method: string;
      headers: {};
    }

    const requestOptions: requestOptionsProps = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const setData = (data: any) => {
      switch (set) {
        case "history":
          return setHistories(data || []);
        case "portfolio":
          return setPortfolio(data || []);
        case "tags":
          return setTags(data || []);
        case "dataContact":
          return setDataContact(data || {});
      }
    };

    const setErr = () => {
      switch (set) {
        case "history":
          return setError({ ...error, histories: true });
        case "portfolio":
          return setError({ ...error, portfolio: true });
        case "tags":
          return setError({ ...error, tags: true });
        case "dataContact":
          return setError({ ...error, dataContact: true });
      }
    };

    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => setErr());
  };

  useEffect(() => {
    callToApi("https://uxu-portfolio.herokuapp.com/histories", "history");
    callToApi("https://uxu-portfolio.herokuapp.com/portfolios", "portfolio");
    callToApi("https://uxu-portfolio.herokuapp.com/tags", "tags");
    callToApi("https://uxu-portfolio.herokuapp.com/data-contact", "dataContact");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataBaseContext.Provider
      value={{
        portfolio,
        histories,
        tags,
        dataContact,
        error,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};

export default DataBaseProvider;
