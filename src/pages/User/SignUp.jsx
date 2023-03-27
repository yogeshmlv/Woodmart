import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Core/BreadCrumb";
import Meta from "../../Core/Meta";
import Container from "../../Core/Container";
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
  const history = useNavigate();
  const [items, setitems] = useState([]);
  const [value, setValue] = useState("");
  const [inpval, setInpval] = useState({
    name: " ",
    email: " ",
    phoneNo: " ",
    password: " ",
  });
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("useryogesh"));
    console.log(items);
    setitems(items);
  }, []);
  console.log(inpval);
  const getdata = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const { name, email, password } = inpval;
    console.log(inpval);
    if (name === " ") {
      alert("Name field is Required");
    } else if (name.length < 2) {
      alert("Enter Correct Name");
    } else if (email === " ") {
      alert("Email field is Required");
    } else if (!email.includes("@")) {
      alert(" Enter valid email");
    }
    else if (password === " ") {
      alert("Password field is Required");
    } else if (password.length < 5) {
      alert("Password Should be greater than five");
    } else if (value === " ") {
      alert("Refrence Id Required");
    } else {
      if (items) {
        localStorage.setItem("useryogesh", JSON.stringify([...items, inpval]));
      } else {
        localStorage.setItem("useryogesh", JSON.stringify([inpval]));
      }
      history.push("/login");
    }
  };
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-2 ">
                <input type="text" name="name" placeholder="Name" onChange={getdata} className="form-control w-25"/>
                <input type="email" name="email" placeholder="Email" onChange={getdata} className="form-control w-25"/>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  onChange={getdata}
                  className="form-control w-25"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={getdata}
                  className="form-control w-25"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-2 align-items-center">
                    <button className="button1 border-0" onClick={addData}>Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
            <p className="mt-3">
              Already Have An Account{" "}
              <span>
                <Link to="/login">SignIn</Link>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
export default SignUp;