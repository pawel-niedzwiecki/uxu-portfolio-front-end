import React, { useState } from "react";

export const DataBaseContext = React.createContext({
  tags: [],
  portfolio: [],
  histories: [],
  setTags: (data: []) => {},
  setPortfolio: (data: []) => {},
  setHistories: (data: []) => {},
  error: { portfolio: false, histories: false, tags: false },
  setError: ({ portfolio, histories, tags, dataContact }: { portfolio: boolean; histories: boolean; tags: boolean; dataContact: boolean }) => {},
});

interface DataBaseProviderProps {
  children?: JSX.Element | JSX.Element[] | any;
}

const DataBaseProvider = ({ children }: DataBaseProviderProps) => {
  const [tags, setTags] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [histories, setHistories] = useState([]);
  const [error, setError] = useState({ portfolio: false, histories: false, tags: false, dataContact: false });

  return (
    <DataBaseContext.Provider
      value={{
        portfolio,
        histories,
        tags,
        error,
        setTags,
        setError,
        setPortfolio,
        setHistories,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};

export default DataBaseProvider;
