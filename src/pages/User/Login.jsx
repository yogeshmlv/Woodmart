import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../Core/BreadCrumb";
import Meta from "../../Core/Meta";
import Container from "../../Core/Container";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    email: " ",
    password: " "
  })
  const getdata = (e) => {
    const { value, name } = e.target
    console.log(value, name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }
  const addData = (e) => {
    e.preventDefault();
    const getuserArr = localStorage.getItem("useryogesh");
    console.log(getuserArr);
    const { email, password } = inpval;
    if (email === "") {
      alert("Email field is Required");
    } else if (!email.includes("@")) {
      alert(" Enter valid email")
    }
    else if (password === "") {
      alert("Password field is Required");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password
        });
        if (userlogin.length === 0) {
          alert("Invalid User Details");
        } else {
          console.log("User Login Successful");
          history("/user-profile");
        }
      }
    }
  }
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-2">
                <input type="email" onChange={getdata} name="email" placeholder="Email"  className="form-control w-25 " />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={getdata}
                  className="form-control w-25"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                   <div>
                  <div className="mt-3 d-flex justify-content-center gap-2 align-items-center">
                  <button className="button1 border-0" type="submit" onClick={addData}>
                      Login
                    </button>
                    <Link to="/signup" className="button1 border-0">Sign Up</Link>
                  </div>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;