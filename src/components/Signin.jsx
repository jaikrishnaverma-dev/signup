import React from 'react'
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Cards from './Cards';

const Signin = () => {
    const inputs = [
        { label: "Email", widthClass: "w100" },
        { label: "Password", widthClass: "w100", type: "password" },
      ];
      return (
        <section className="inputsection sm-100">
          <Cards title="Account Login" extraClass="flexWrap mb-20">
            {inputs.map((x, i) => (
              <TextInput key={x.label} {...x} />
            ))}
            <button className="button-submit w100 outfit_font">
              Log In
            </button>
            <p className="footer_link outfit_font">
              Don't have an account? <Link to={"/"}>Create Account</Link>
            </p>
            <div className="divider_or">
              <div></div>
              <span>Or</span>
              <div></div>
            </div>
            <div className="oauth_wrapper">
              <button className="oauth_btn">
                <img src="flat-color-icons_google.png" alt="" />
                <span className="outfit_font">Sign in with Google</span>
              </button>
              <button className="oauth_btn">
                <img src="logos_facebook.png" alt="" />
                <span className="outfit_font">Sign in with Facebook</span>
              </button>
            </div>
          </Cards>
        </section>
      );
}

export default Signin