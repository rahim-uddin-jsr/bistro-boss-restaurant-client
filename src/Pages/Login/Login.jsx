import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [isDisable, setIsDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleCaptchaValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };
  const { user, loading } = useContext(AuthContext);
  console.log(user, loading);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-ful lg:w-1/2 max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <LoadCanvasTemplate />
              <input
                name="captcha"
                type="text"
                placeholder="type the captcha above"
                className="input input-bordered"
                ref={captchaRef}
              />
            </div>
            <button
              onClick={handleCaptchaValidate}
              className="btn btn-outline btn-sm"
            >
              validate
            </button>
            <div className="form-control mt-6">
              <input
                disabled={isDisable}
                className="btn btn-primary"
                type="submit"
                value={"Login"}
              />
            </div>
            <span>
              don't have any account? Please{" "}
              <Link className="link" to={"/register"}>
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
