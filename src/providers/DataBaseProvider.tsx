// import plugin
import React, { useState, useEffect } from "react";

// create context
export const DataBaseContext = React.createContext({
  portfolio: [],
  histories: [],
  tags: [],
  dataContact: {},
});

// create interface

interface DataBaseProviderProps {
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
const DataBaseProvider = ({ children }: DataBaseProviderProps) => {
  const [portfolio, setPortfolio] = useState([]);
  const [histories, setHistories] = useState([]);
  const [tags, setTags] = useState([]);
  const [dataContact, setDataContact] = useState({});

  async function callToApi(url: string, set: string) {
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

    const setData = await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((err) => console.log(err));

    console.log(setData);

    switch (set) {
      case "history":
        return setHistories(setData);
      case "portfolio":
        return setPortfolio(setData);
      case "tags":
        return setTags(setData);
      case "dataContact":
        return setDataContact(setData);
    }
  }

  useEffect(() => {
    callToApi("https://uxu-portfolio.herokuapp.com/histories", "history");
    callToApi("https://uxu-portfolio.herokuapp.com/portfolios", "portfolio");
    callToApi("https://uxu-portfolio.herokuapp.com/tags", "tags");
    callToApi("https://uxu-portfolio.herokuapp.com/data-contact", "dataContact");
  }, []);

  return (
    <DataBaseContext.Provider
      value={{
        portfolio,
        histories,
        tags,
        dataContact,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};

export default DataBaseProvider;
