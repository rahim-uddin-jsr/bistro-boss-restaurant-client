import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { registerUserWithEmail, updateUserProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    const name = e.name;
    const photoURL = e.photoURL;
    const email = e.email;
    const password = e.password;

    registerUserWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile({ displayName: name, photoURL })
          .then(() => {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  navigate(from);
                  Swal.fire({
                    title: "Registration Successful",
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                }
              });
          })
          .catch((err) => {
            alert(err.massage);
          });
      })
      .catch();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss || Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="url"
                placeholder="Your Photo url"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-500">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  password must minimum 6 character
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500">
                  password must less then 20 character
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  password must be minimum six characters, at least one
                  uppercase letter, one lowercase letter, one number, and one
                  special character:
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value={"Register"}
              />
            </div>
            <span>
              Already have an account?{" "}
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </span>
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
