import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useRef, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const StyledForm = styled(Form)`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Group = styled(Form.Group)`
  width: calc(100vw / 8);
  height: 12.5vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledButton = styled(Button)`
  width: calc(100vw / 8);
  height: 6vh;
  margin: auto 0;
`;

const FilterForm = (props) => {
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
      appIdRef: appIdRef.current.value,
      applicationType: applicationTypeRef.current.value,
    };

    props.getData(output);
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
      <Group className="mb-3">
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
    </StyledForm>
  );
};

export default FilterForm;