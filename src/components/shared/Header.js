import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";

const linkStyle = {
  color: "black",
  textDecoration: "none",
};

const authenticatedOptions = (
  <>
    <Button variant="light" className="m-2">
      <Link to="change-password" style={linkStyle}>
        Change Password
      </Link>
    </Button>
    <Button variant="light" className="m-2">
      <Link to="sign-out" style={linkStyle}>
        Sign Out
      </Link>
    </Button>
  </>
);

const unauthenticatedOptions = (
  <>
    <Button variant="light" className="m-2">
      <Link to="sign-up" style={linkStyle}>
        Sign Up
      </Link>
    </Button>
    <Button variant="light" className="m-2">
      <Link to="sign-in" style={linkStyle}>
        Sign In
      </Link>
    </Button>
  </>
);

const alwaysOptions = (
  <>
    <Button variant="light" className="m-2">
      <Link to="/" style={linkStyle}>
        Home
      </Link>
    </Button>
  </>
);

const Header = ({ user }) => (
  // <Hamburger />
  <header
    style={{
      background: "rgba(255, 166, 0, 0.75) !important",
      padding: "0.5rem 1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" className="text-decoration-none text-black">
      Kitchwitch
    </Link>
    <div className="ml-auto d-inline d-none d-md-block">
      {user && <span className="text-black mr-2">Welcome, {user.email}</span>}
      {alwaysOptions}
      {user ? authenticatedOptions : unauthenticatedOptions}
    </div>
    <Hamburger />
  </header>
);

export default Header;
