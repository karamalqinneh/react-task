import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useRef, useState, useContext } from "react";
import { SortContext } from "../../context/sort";

const StyledForm = styled(Form)`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Group = styled(Form.Group)`
  width: calc(100vw / 10);
  height: 12.5vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledButton = styled(Button)`
  width: calc(100vw / 10);
  height: 6vh;
  margin: auto 0;
`;

const FilterForm = (props) => {
  const sortContext = useContext(SortContext);
  const employeeNameRef = useRef();
  const applicationTypeRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const actionTypeRef = useRef();
  const appIdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let output = {
      userId: employeeNameRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
      actionType: actionTypeRef.current.value,
      applicationId: appIdRef.current.value,
      applicationType: applicationTypeRef.current.value,
    };

    props.getData(output);
  };

  const clearParams = () => {
    employeeNameRef.current.value = "";
    startDateRef.current.value = "";
    endDateRef.current.value = "";
    actionTypeRef.current.value = "";
    appIdRef.current.value = "";
    applicationTypeRef.current.value = "";
    sortContext.setReset(!sortContext.reset);
  };
  return (
    <StyledForm
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Group className="mb-3">
        <Form.Label>Empolyee ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Empolyee ID"
          ref={employeeNameRef}
        />
      </Group>
      <Group className="mb-3">
        <Form.Label>Action Type</Form.Label>
        <Form.Control type="text" ref={actionTypeRef} />
      </Group>
      <Group className="mb-3" style={{ width: "15vw" }}>
        <Form.Label>Application type</Form.Label>
        <Form.Control type="text" ref={applicationTypeRef} />
      </Group>
      <Group className="mb-3">
        <Form.Label>From Date</Form.Label>
        <Form.Control type="date" ref={startDateRef} />
      </Group>
      <Group className="mb-3">
        <Form.Label>To Date</Form.Label>
        <Form.Control type="date" ref={endDateRef} />
      </Group>

      <Group className="mb-3">
        <Form.Label>Application ID</Form.Label>
        <Form.Control type="number" ref={appIdRef} />
      </Group>
      <StyledButton variant="primary" type="submit">
        Submit
      </StyledButton>
      <StyledButton variant="secondary" onClick={clearParams}>
        Clear
      </StyledButton>
    </StyledForm>
  );
};

export default FilterForm;
