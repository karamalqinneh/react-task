import "./App.css";
import Main from "./components/main/main";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/form";
import { useState } from "react";
import SortProvider from "./context/sort";

function App() {
  const [searchResult, setSearchResult] = useState({});
  const getFormResults = (data) => {
    setSearchResult(data);
  };
  return (
    <div className="App">
      <SortProvider>
        <Form getData={getFormResults}></Form>
        <Main applyFilter={searchResult}></Main>
      </SortProvider>
    </div>
  );
}

export default App;
