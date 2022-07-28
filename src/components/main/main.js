import axios from "axios";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Table from "../table/table";
import { useContext } from "react";
import { SortContext } from "../../context/sort";

const IndexList = styled.div`
  height: 5vh;
  width: 40vw;
  display: flex;
  justify-content: center;
  margin-top: 2vh;
`;

const Index = styled.div`
  height: 3vh;
  width: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0.4rem;
  cursor: pointer;
  display: flex;
  justifiy-content: center;
  border-radius: 5px;
  align-items: center;
  &.active {
    background: #e0dde5;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Main = (props) => {
  const sortConext = useContext(SortContext);
  const indexRef = useRef();
  const [results, setResults] = useState([]);
  let [filteredResults, setFilteredResults] = useState([]);
  let [dataLength, setDataLength] = useState(0);
  let [data, setData] = useState([]);

  const sortResults = () => {
    console.log(sortConext.sort);
    setFilteredResults(
      filteredResults.sort((a, b) => {
        return a[sortConext.sort] - b[sortConext.sort];
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(process.env.REACT_APP_ENDPOINT);
      setResults(response.data.result.auditLog);
      setFilteredResults(response.data.result.auditLog);
      setDataLength(response.data.result.auditLog.length);
    };
    fetchData();
  }, [sortConext.reset]);

  useEffect(() => {
    let res = filteredResults;
    if (Object.keys(props.applyFilter).length) {
      for (const item in props.applyFilter) {
        if (item == "startDate" || item == "endDate") continue;
        res = res.filter((ele) => {
          return `${ele[item]}`.includes(props.applyFilter[item]);
        });
      }
      let startDate = props.applyFilter.startDate
        ? new Date(props.applyFilter.startDate)
        : null;
      let endDate = props.applyFilter.endDate
        ? new Date(props.applyFilter.endDate)
        : null;

      if (startDate && endDate) {
        res = res.filter((ele) => {
          let date = new Date(ele.creationTimestamp.slice(0, 10));
          console.log(startDate, "start");
          console.log(date, "date");
          return startDate >= date && date <= endDate;
        });
      } else if (startDate) {
        console.log("CASE2");
        res = res.filter((ele) => {
          let date = new Date(ele.creationTimestamp.slice(0, 10));
          return startDate >= date;
        });
      } else if (endDate) {
        console.log("CASE3");
        res = res.filter((ele) => {
          let date = new Date(ele.creationTimestamp.slice(0, 10));
          return endDate <= date;
        });
      }
    } else {
      setFilteredResults(filteredResults);
    }
    setFilteredResults(res);
    setDataLength(res.length);
  }, [props.applyFilter]);

  useEffect(() => {
    if (filteredResults.length <= 10) {
      setData([...filteredResults]);
    } else {
      let raw = ["", ...filteredResults];
      let renderedData = [];
      for (let i = 1; i <= 10; i++) {
        renderedData.push(raw[i]);
      }
      setData([...renderedData]);
    }
  }, [filteredResults]);
  const classesHandler = (e) => {
    const children = [].slice.call(indexRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };
  const handlePagination = (e) => {
    let raw = ["", ...filteredResults];
    let page = parseInt(e.target.innerHTML);
    let renderedData = [];
    for (let i = 1; i <= 10 * page; i++) {
      if (i >= 10 * page - 10 + 1 && i <= 10 * page) {
        renderedData.push(raw[i]);
      }
    }
    setData(renderedData);
  };
  let paginationIndex = Math.floor(dataLength / 10);

  let indices = Array.from({ length: paginationIndex }, (_, i) => i + 1).map(
    (ele, idx) => {
      if (idx === 0) {
        return (
          <Index className={"active"} onClick={handlePagination}>
            {ele}
          </Index>
        );
      }
      return <Index onClick={handlePagination}>{ele}</Index>;
    }
  );

  return (
    <>
      <Table data={data} sortResults={sortResults} />
      <IndexList ref={indexRef} onClick={classesHandler}>
        {indices}
      </IndexList>
    </>
  );
};

export default Main;
