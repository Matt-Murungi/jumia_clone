import React, { useState } from "react";
import {useHistory} from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import { useForm } from "./useForm";
import { auth } from "../firebase";

import "./Login.css";

function Login() {
  const history = useHistory()
  const [visibility, setVisibility] = useState(false);
  const [values, handleChange] = useForm({ email: "", password: "" });

  const showPassword = () => {
    setVisibility(visibility ? false : true);
    console.log(visibility);
  };


  const login =()=>{
  auth
  .signInWithEmailAndPassword(values.email, values.password)
  .then((auth)=>{
   history.push("/")
    // do stuff, redirect
  }) 
  .catch((e)=>alert(e.message))
  }
  console.log({
    Email: values.email,
    Password: values.password,
  });

  return (
    <div className="login">
      <p className="login__title">Login</p>
      <form noValidate autoComplete="off" className="login__form">
        <TextField
          id="standard-basic"
          label="Email"
          className="login__textfield"
          value={values.email}
          onChange={handleChange}
          name="email"
          InputProps={{
            className: "login__textfieldInput",
          }}
        />
        <TextField
          id="adornment-password"
          label="password"
          type={visibility ? "text" : "password"}
          className="login__textfield"
          name="password"
          value={values.password}
          onChange={handleChange}
          InputProps={{
            className: "login__textfieldInput",

            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={showPassword}
                >
                  {visibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <button className="login__button" type="button" onClick={login}>
          LOGIN
        </button>

        <button className="login__buttonFacebook" type="button" onClick={showPassword}>
          LOGIN WITH FACEBOOK
        </button>
      </form>
    </div>
  );
}

export default Login;
