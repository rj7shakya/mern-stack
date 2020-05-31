import React from "react";
import { Form, FormGroup, Label, Col, Button, Alert } from "reactstrap";
import { useForm } from "react-hook-form/dist/react-hook-form.ie11";
import { withRouter } from "react-router";

const MainForm = ({ value, def, operation, history }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (value === "add") {
      operation(data);
    } else if (value === "update") {
      operation(def._id, data);
    }
    history.push("/");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup row>
          <Label sm={2}>Name :</Label>
          <Col>
            <input
              className="form-control  form-control-md"
              ref={register({
                required: "this is required",
              })}
              type="name"
              name="name"
              placeholder={value === "add" ? "new name" : "edit name"}
              defaultValue={def.name}
            />
            {errors.name && errors.name.type === "required" && (
              <Alert color="danger">Please fill box</Alert>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Email :</Label>
          <Col>
            <input
              className="form-control  form-control-md"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
              type="text"
              name="email"
              placeholder={value === "add" ? "new email" : "edit email"}
              defaultValue={def.email}
            />
            {errors.email && errors.email.type === "required" && (
              <Alert color="danger">Please fill box</Alert>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <Alert color="danger">Please enter a valid email</Alert>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Address :</Label>
          <Col>
            <input
              className="form-control  form-control-md"
              ref={register({ required: true })}
              type="text"
              name="address"
              placeholder={value === "add" ? "new address" : "edit address"}
              defaultValue={def.address}
            />
            {errors.address && errors.address.type === "required" && (
              <Alert color="danger">Please fill box</Alert>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>DOB :</Label>
          <Col>
            <input
              className="form-control  form-control-md"
              ref={register({ required: true })}
              type="date"
              name="dob"
              placeholder={value === "add" ? "new dob" : "edit dob"}
              defaultValue={def.dob && def.dob.substring(0, 10)}
            />
            {errors.dob && errors.dob.type === "required" && (
              <Alert color="danger">Please fill box</Alert>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Contact :</Label>
          <Col>
            <input
              className="form-control  form-control-md"
              ref={register({ required: true })}
              type="tel"
              name="contact"
              placeholder={value === "add" ? "new contact" : "edit contact"}
              defaultValue={def.contact}
            />
            {errors.contact && errors.contact.type === "required" && (
              <Alert color="danger">Please fill box</Alert>
            )}
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col>
            <Button block>{value === "add" ? "Add" : "Update"}</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default withRouter(MainForm);
