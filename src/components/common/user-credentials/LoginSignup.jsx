import { registerUser, resendVerificationEmail } from "../../../utils/api"
import Image from "next/image";
import { useState } from "react";

const LoginSignup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)
  const [verifyEmailPopup, setVerifyEmailPopup] = useState(false)

  const signupSubmit = async (e) =>
  {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: password,
    };
    setPassword('');
    setConfirmPassword('');

    registerUser(userData)
    .then((response) => 
    {
        if(response.error) 
        {
          if(response.error.code == 'user_already_exists')
          {
            setErrorMsg('This User Already Exists');
          }
        }
        else if(response.msg == 'user_not_verified')
        {
          setSuccessMsg('You Need to Verify your Email to Proceed!');
          setVerifyEmailPopup(true);
        }
        else if(response.msg == 'new_user_created')
        {
          setSuccessMsg('You are Registered Successfully. Verify Your Email to Proceed!');
          setVerifyEmailPopup(true);
        }
    });
  }
  const loginSubmit = (e) => 
  {
    e.preventDefault();

    const userData = {
      email: loginEmail,
      password: loginPassword,
    };
    authenticateUser(userData)
    .then((response) => 
    {
        if(response.error) 
        {
          if(response.error.code == 'user_already_exists')
          {
            setErrorMsg('This User Already Exists');
          }
        }
        else if(response.msg == 'user_not_verified')
        {
          setSuccessMsg('You Need to Verify your Email to Proceed!');
          setVerifyEmailPopup(true);
        }
        else if(response.msg == 'new_user_created')
        {
          setSuccessMsg('You are Registered Successfully. Verify Your Email to Proceed!');
          setVerifyEmailPopup(true);
        }
    });
  }
  const resendEmail = () =>
  {
    resendVerificationEmail(email)
    .then(() => {
      setSuccessMsg('Verification Email Resent Successfully!');
    });
  }
  const closePopup = () => 
  {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMsg(null);
    setSuccessMsg(null);
    setVerifyEmailPopup(false);
  }

  return (
    <div className="modal-content">
      <div className="modal-header"
      onClick={closePopup}>
        <button
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
          className="btn-close"
        ></button>
      </div>
      {/* End .modal-header */}

      <div className="modal-body container pb20">
        <div className="row">
          <div className="col-lg-12">
            <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              {/* End login tab */}

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
              {/* End Register tab */}
            </ul>
            {/* End .sign_up_tab */}
          </div>
        </div>
        {/* End .row */}

        <div className="tab-content container" id="myTabContent">
          <div
            className="row mt25 tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="login_thumb">
                <Image
                  width={357}
                  height={494}
                  className="img-fluid w100 h-100 cover"
                  src="/assets/images/resource/login.jpg"
                  alt="login.jpg"
                />
              </div>
            </div>
            {/* End col */}

            <div className="col-lg-6 col-xl-6">
              <div className="login_form">
                <form action={loginSubmit}>
                  <div className="heading">
                    <h4>Login</h4>
                  </div>
                  {/* End heading */}

                  <div className="row mt25">
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-fb w-100">
                        <i className="fa fa-facebook float-start mt5"></i> Login
                        with Facebook
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-googl w-100">
                        <i className="fa fa-google float-start mt5"></i> Login
                        with Google
                      </button>
                    </div>
                  </div>
                  {/* End .row */}

                  <hr />

                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="User Name Or Email"
                      value={loginEmail}
                      onChange={(e) => {setLoginEmail(e.target.value)}}
                      required
                    />
                    {loginEmail}
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}

                  <div className="input-group form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={loginPassword}
                      onChange={(e) => {setLoginPassword(e.target.value)}}
                      required
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}

                  <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="remeberMe"
                      required
                    />
                    <label
                      className="form-check-label form-check-label"
                      htmlFor="remeberMe"
                    >
                      Remember me
                    </label>

                    <a className="btn-fpswd float-end" href="">
                      Lost your password?
                    </a>
                  </div>
                  {/* End remember me checkbox */}

                  <button type="submit" className="btn btn-log w-100 btn-thm">
                    Log In
                  </button>
                  {/* End submit button */}

                  <p className="text-center">
                    Dont have an account?{" "}
                    <a className="text-thm">
                      Register
                    </a>
                  </p>
                </form>
              </div>
              {/* End .col .login_form */}
            </div>
          </div>
          {/* End .tab-pane */}

          <div
            className="row mt25 tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="regstr_thumb">
                <Image
                  width={357}
                  height={659}
                  className="img-fluid w100 h-100 cover"
                  src="/assets/images/resource/regstr.jpg"
                  alt="regstr.jpg"
                />
              </div>
            </div>
            {/* End . left side image for register */}

            <div className="col-lg-6 col-xl-6">
              <div className="sign_up_form">
                <div className="heading">
                  <h4>Register</h4>
                </div>
                {/* End .heading */}

                <form onSubmit={signupSubmit}>
                  <div className="row ">
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-fb w-100">
                        <i className="fa fa-facebook float-start mt5"></i> Login
                        with Facebook
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-googl w-100">
                        <i className="fa fa-google float-start mt5"></i> Login
                        with Google
                      </button>
                    </div>
                  </div>
                  {/* End .row */}

                  <hr />

                  { errorMsg ? 
                  <div className="msg-box error-bg form-group input-group mb-3">
                    {errorMsg}
                  </div> 
                  : undefined }

                  <div className="form-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="User Name"
                      value={name}
                      onChange={(e) => {setName(e.target.value)}}
                      required
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="form-group input-group  mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {setEmail(e.target.value)}}
                      required
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="form-group input-group  mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {setPassword(e.target.value)}}
                      required
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="mb-3">
                    <div className="form-group input-group mb-1">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword3"
                        placeholder="Re-enter password"
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value)}}
                        required
                      />
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="flaticon-password"></i>
                        </div>
                      </div>
                    </div>
                    {(confirmPassword == '') || (confirmPassword == password) ? undefined: 
                    <div className="error mb-3 px-2">Password Does Not Match</div> }
                  </div>
                  {/* End .row */}

                  <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="terms"
                      required
                    />
                    <label
                      className="form-check-label form-check-label"
                      htmlFor="terms"
                    >
                      I have accepted the Terms and Privacy Policy.
                    </label>
                  </div>
                  {/* End from-group */}

                  <button type="submit" className="btn btn-log w-100 btn-thm">
                    Sign Up
                  </button>
                  {/* End btn */}

                  <p className="text-center">
                    Already have an account?{" "}
                    <a className="text-thm" href="#">
                      Log In
                    </a>
                  </p>
                </form>
                {/* End .form */}
              </div>
            </div>
            {/* End register content */}
          </div>
          {/* End .tab-pane */}
        </div>
      </div>
      
      {
        verifyEmailPopup ? 
        <div className="verify-email modal-body container pb20">
          <div className="border-box">
            <Image 
              className="d-block"
              src={'/assets/images/email-verify.png'}
              width={153}
              height={153}
              alt={'Verify Email Gif'}
            />
            <h2 className="mt-3">Welcome {name}</h2>
            <h6>{successMsg}</h6>
            <p>To access all the features on our website and ensure 
              the security of your account, please verify your email 
              by clicking the link we&apos;ve sent to your inbox.</p>
            <p>If you haven&apos;t received the email, please check your 
              spam folder. If you encounter any issues, please contact our support team.</p>

            <button onClick={resendEmail} className="btn btn-primary mt-3">Resend Email</button>
        </div>
      </div> : undefined
      }
    </div>
  );
};

export default LoginSignup;
