// import plugin
import React, { useState, useEffect } from "react";

// create context
export const LanguageContext = React.createContext({
  language: window.localStorage.lang || navigator.language,
  languageChange: (lang: string) => {},
});

// create interface

interface UsersProviderProps {
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
const LanguageProvider = ({ children }: UsersProviderProps) => {
  const [language, setLanguage] = useState(window.localStorage.lang || navigator.language);

  useEffect(() => {
    const setLang = window.localStorage.lang;
    if (!setLang) return window.localStorage.setItem("lang", language);
  }, [language]);

  const languageChange = (lang: string) => {
    setLanguage(lang);
    window.localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageChange,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
