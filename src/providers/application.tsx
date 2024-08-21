"use client";
import { FC, ReactNode, createContext, useState } from "react";

type ApplicationContextProps = {
  search: string;
  filters: {
    completed?: boolean;
  };
  setSearch: (val: string) => void;
  setFilters: (val: ApplicationContextProps["filters"]) => void;
};

export const ApplicationContext = createContext<
  Partial<ApplicationContextProps>
>({});
const ApplicationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<ApplicationContextProps["filters"]>(
    {}
  );

  const contextValue = {
    search,
    filters,
    setSearch,
    setFilters,
  };

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};
export default ApplicationProvider;
