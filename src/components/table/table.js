import Table from "react-bootstrap/Table";
import styled from "styled-components";
import { useReducer } from "react";

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

const initialState = "";

const reducer = (state, action) => {
  switch (action) {
    case "logId":
      return "logId";
    case "applicationType":
      return "applicationType";
    case "creationTimestamp":
      return "creationTimestamp";
    case "actionType":
      return "actionType";
    case "appId":
      return "applicationId";
    default:
      return initialState;
  }
};
const ResultsTable = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
                dispatch("logId");
                props.sortResults(state);
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Application Type</Name>
            <Sort
              onClick={() => {
                dispatch("applicationType");
                props.sortResults(state);
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Application ID</Name>
            <Sort
              onClick={() => {
                dispatch("appId");
                props.sortResults(state);
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Action</Name>
            <Sort
              onClick={() => {
                dispatch("actionType");
                props.sortResults(state);
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Action Details</Name>
            <Sort
              onClick={() => {
                dispatch("logId");
                props.sortResults(state);
              }}
            >
              S
            </Sort>
          </th>
          <th>
            <Name>Date Time </Name>
            <Sort
              onClick={() => {
                dispatch("creationTimestamp");
                props.sortResults(state);
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
