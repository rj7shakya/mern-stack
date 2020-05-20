import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import SignupComponent from "../components/auth/SignupComponent";

const signup = () => {
  return (
    <Layout>
      <h2>Signup page</h2>
      <SignupComponent />
    </Layout>
  );
};

export default signup;
