import Table from "react-bootstrap/Table";
import styled from "styled-components";

const Td = styled.td``;

const ResultsTable = (props) => {
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
          <th>LOG ID</th>
          <th>Application Type</th>
          <th>Application ID</th>
          <th>Action</th>
          <th>Action Details</th>
          <th>Date Time</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ResultsTable;
