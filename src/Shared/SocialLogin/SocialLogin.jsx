import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSigning = () => {
    signInWithGoogle()
      .then((result) => {
        const loginUser = result.user;
        // df
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: loginUser.displayName,
            email: loginUser.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              navigate(from);
            }
          });
      })
      .catch();
  };
  return (
    <div className="w-full mx-auto">
      <div className="divider"></div>
      <button
        type="button"
        onClick={handleGoogleSigning}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
