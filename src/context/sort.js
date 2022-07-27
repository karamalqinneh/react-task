import React, { useState } from "react";

export const SortContext = React.createContext();

export default function SortProvider(props) {
  const [sort, setSort] = useState("");
  const state = { sort, setSort };

  return (
    <SortContext.Provider value={state}>{props.children}</SortContext.Provider>
  );
}
