import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Alert, Form, FormControl } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const [adminSuccess, setAdminSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:4000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setAdminSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div className="make-admin mt-5">
      {adminSuccess && <Alert variant="success">Admin Make Successfully</Alert>}

      <Form onSubmit={handleOnSubmit} className="pt-5 d-flex">
        <FormControl
          type="email"
          placeholder="Make Admin"
          className="me-2 w-75 field"
          aria-label="email"
          onBlur={handleOnBlur}
        />
        <Button variant="outline-danger" type="submit" className="button">
          Make Admin
        </Button>
      </Form>
    </div>
  );
};

export default MakeAdmin;
