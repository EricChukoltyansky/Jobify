import React from "react";
import { useState, usEffect } from "react";
import { Logo, FormRow, Alert } from "../components/index";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: true,
};

export default function Register() {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        )}
        
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?': 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember?'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
