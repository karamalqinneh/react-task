import React, { useState } from "react";

export const SortContext = React.createContext();

export default function SortProvider(props) {
  const [sort, setSort] = useState("");
  const [reset, setReset] = useState(false);
  const state = { sort, setSort, reset, setReset };

  return (
    <SortContext.Provider value={state}>{props.children}</SortContext.Provider>
  );
}
