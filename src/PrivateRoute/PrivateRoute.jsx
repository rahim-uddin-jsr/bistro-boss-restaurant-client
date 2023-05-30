import { useContext } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className=" flex justify-center items-center w-full h-screen">
          <BallTriangle
            className="justify-center items-center"
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      </>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to={"/login"}
        replace={true}
        state={{ from: location }}
      ></Navigate>
    );
  }
};

export default PrivateRoute;
