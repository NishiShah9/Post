import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ImageBanner from "../Images/banner.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MetaData from "./Common/MetaData";
import { getUsers } from "../Utils/Api";
import { getToken } from "../Utils/Functions";
import { ROUTES } from "../Utils/Constant";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const onSubmit = async () => {
    let users = await getUsers();
    if (users.data) {
      users.data.map((item: any) => {
        if (item.email === email) {
          localStorage.setItem("user", JSON.stringify(item));
          localStorage.setItem("token", getToken()); // generate a temperarory token
          navigate(ROUTES.HOME);
        }
      });
    }
  };

  return (
    <div className="content">
      <MetaData title="Login" />
      {/* <Snackbar
        message="Login Sucessfully"
        open={open}
        autoHideDuration={6000}
      /> */}

      <div className="left-banner">
        <img src={ImageBanner} height="100%" width="100%" alt="banner" />
      </div>
      <div className="right-banner">
        <h1 className="banner-title">Login Here</h1>
        <div className="form-div">
          <TextField
            fullWidth
            id="fullWidth"
            label="Email"
            required
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-div">
          <Button
            disabled={email ? false : true}
            onClick={onSubmit}
            fullWidth
            className="header-button"
            variant="contained"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
