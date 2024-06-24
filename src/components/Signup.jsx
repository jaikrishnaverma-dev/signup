import React from "react";
import TextInput from "./TextInput";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Signup = () => {
  const inputs = [
    { label: "First Name", widthClass: "col-50" },
    { label: "Last Name", widthClass: "col-50" },
    { label: "Email", widthClass: "w100" },
    { label: "Password", widthClass: "w100", type: "password" },
  ];
  return (
    <section className="inputsection sm-100">
      <Cards title="Create Account" extraClass="flexWrap mb-20">
        {inputs.map((x, i) => (
          <TextInput key={x.label} {...x} />
        ))}
        <button className="button-submit w100 outfit_font">
          Create Account
        </button>
        <p className="footer_link outfit_font">
          Already have an account? <Link to={"login"}>Login</Link>
        </p>
        <div className="divider_or">
          <div></div>
          <span>Or</span>
          <div></div>
        </div>
        <div className="oauth_wrapper">
          <button className="oauth_btn">
            <img src="flat-color-icons_google.png" alt="" />
            <span className="outfit_font">Sign up with Google</span>
          </button>
          <button className="oauth_btn">
            <img src="logos_facebook.png" alt="" />
            <span className="outfit_font">Sign up with Facebook</span>
          </button>
        </div>
      </Cards>
    </section>
  );
};

export default Signup;
