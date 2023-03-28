import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    if (id === null || id === '') {
      isproceed = false;
      errormessage += ' Username';
    }
    if (name === null || name === '') {
      isproceed = false;
      errormessage += ' Fullname';
    }
    if (password === null || password === '') {
      isproceed = false;
      errormessage += ' Password';
    }
    if (email === null || email === '') {
      isproceed = false;
      errormessage += ' Email';
    }

    if (!isproceed) {
      toast.warning(errormessage)
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

      } else {
        isproceed = false;
        toast.warning('Please enter the valid email')
      }
    }
    return isproceed;
  }


  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regobj)
      }).then((res) => {
        toast.success('Registered successfully.')
        navigate('/login');
      }).catch((err) => {
        toast.error('Failed :' + err.message);
      });
    }
  }
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>SignUp</h1>
            </div>
            <div className="card-body">

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>User Name <span className="errmsg">*</span></label>
                    <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password <span className="errmsg">*</span></label>
                    <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name <span className="errmsg">*</span></label>
                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email <span className="errmsg">*</span></label>
                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone <span className="errmsg"></span></label>
                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                  </div>
                </div>



              </div>

            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">SignUp</button> |
              <Link to={'/login'} className="btn btn-danger">Back To Login</Link>
            </div>
          </div>
        </form>
      </div>


    </div>
  );
}

export default SignUp;