import React from "react";
import { useHistory } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  const history = useHistory();
  return (
    <div style={{ display: "flex" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "1",
          marginLeft: "15px",
          padding: "100px 0",
        }}
      >
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            width: "400px",
            height: "500px",
          }}
        >
          <h1 style={{ fontSize: "32px" }}>Sign in</h1>
          <div
            id="email"
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid lightgray",
              marginBottom: "20px",
            }}
          >
            <MdEmail style={{ fontSize: "20px" }} />
            <input
              type="text"
              placeholder="Email"
              style={{
                flex: "1",
                padding: "10px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
            />
          </div>
          <div
            id="password"
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid lightgray",
              marginBottom: "30px",
            }}
          >
            <MdLock style={{ fontSize: "20px" }} />
            <input
              type="password"
              placeholder="Password"
              style={{
                flex: "1",
                padding: "10px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
            />
          </div>

          <div
            id="checkbox"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <input
              type="checkbox"
              style={{ zoom: "1.4", marginRight: "8px" }}
            />{" "}
            <b>Remember me</b>
          </div>
          <input
            type="submit"
            value="Sign in"
            style={{
              padding: "15px 10px",
              marginBottom: "15px",
              fontWeight: "bold",
              outline: "none",
              border: "1px solid lightgray",
              backgroundColor: "#0061fe",
              color: "white",
            }}
          />
          <div
            className="others"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <input
              type="button"
              value="Forgot password?"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
            />
            <input
              type="button"
              value="Sign up"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push("/signup");
              }}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
