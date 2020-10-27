import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //stops refresh
     //login logic
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
          //redirect to homepage
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
 

  const register = (event) => {
    event.preventDefault(); //stops refresh
  //register logic
  auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created a new user with email and password,redirect to homepage
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input type={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Clone Account
        </button>
      </div>
    </div>
  );
}

export default Login;
