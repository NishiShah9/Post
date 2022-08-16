import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Utils/Constant";

const Header = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token") || null;

  const Logout = () => {
    localStorage.clear();
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {}, [token]);
  return (
    <div className="header">
      <div className="header-logo" onClick={() => navigate(ROUTES.HOME)}>
        <img src={Logo} height="50" alt="logo" />
      </div>
      <div className="header-right">
        {!token && (
          <>
            <div className="header-button">
              <Button
                onClick={() => navigate(ROUTES.LOGIN)}
                className="header-button"
                variant="contained"
              >
                Login
              </Button>
            </div>
          </>
        )}
        {token && (
          <>
            <div className="header-button">
              <Button
                onClick={Logout}
                className="header-button"
                variant="contained"
              >
                Logout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
