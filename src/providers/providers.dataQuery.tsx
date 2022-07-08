import { useAppDispatch } from "store/hooks";
import { useEffect, useContext } from "react";
import { tagsGetFetch } from "store/slice/store.slice.tags";
import { LanguageContext } from "providers/providers.language";
import { portfolioGetFetch } from "store/slice/store.slice.portfolio";
import { historiesGetFetch } from "store/slice/store.slice.histories";

export default function ProviderDataQuery({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const { language } = useContext(LanguageContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tagsGetFetch());
    dispatch(portfolioGetFetch());
    dispatch(historiesGetFetch(language));
  }, [dispatch, language]);

  return <>{children}</>;
}
