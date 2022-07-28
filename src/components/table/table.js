import Table from "react-bootstrap/Table";
import styled from "styled-components";
import { useContext } from "react";
import { SortContext } from "../../context/sort";

const Td = styled.td``;
const Sort = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #feefee;
  cursor: pointer;
`;

const Name = styled.div``;

const ResultsTable = (props) => {
  const sortConext = useContext(SortContext);
  let rows = props.data.map((ele) => {
    return (
      <tr key={ele.logId}>
        <Td>{ele.logId}</Td>
        <Td>{ele.applicationType}</Td>
        <Td>{ele.applicationId}</Td>
        <Td>{ele.actionType}</Td>
        <Td></Td>
        <Td>{ele.creationTimestamp}</Td>
      </tr>
    );
  });

  return (
    <Table bordered hover style={{ width: "95vw", margin: "0 auto" }}>
      <thead>
        <tr>
          <th>
            <Name>LOG ID</Name>
            <Sort
              onClick={() => {
                sortConext.setSort("logId");
                props.sortResults();
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Application Type</Name>
            <Sort
              onClick={() => {
                sortConext.setSort("applicationType");
                props.sortResults();
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Application ID</Name>
            <Sort
              onClick={() => {
                sortConext.setSort("applicationId");
                props.sortResults();
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Action</Name>
            <Sort
              onClick={() => {
                sortConext.setSort("actionType");
                props.sortResults();
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Action Details</Name>
            <Sort
              onClick={() => {
                sortConext.setSort("logId");
                props.sortResults();
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Date Time </Name>
            <Sort
              onClick={() => {
                sortConext.setSort("creationTimestamp");
                props.sortResults();
              }}
            >
              S
            </Sort>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ResultsTable;
