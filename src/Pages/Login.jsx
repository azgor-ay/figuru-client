import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import useTitle from "../customHooks/useTitle";
const Login = () => {
  useTitle('Login')
  const { login, signInWithGoogle, setUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [wrongPassMSG, setWrongPassMSG] = useState(" ");
  const [noAccount, setNoAccount] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setWrongPassMSG(" ");
    setNoAccount("");
    const { email, password } = data;
    login(email, password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        if (
          password.length > 0 &&
          error.message === "Firebase: Error (auth/wrong-password)."
        ) {
          setWrongPassMSG("Wrong Password");
        } else if (password.length < 0) {
          setWrongPassMSG(" ");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setNoAccount("wrong email id or you don't have an account");
        }
      });
  };

  const handleAuthenticateWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col items-center lg:flex-row-reverse">
          <div
            className="text-center w-1/2 lg:text-left lg:ml-32"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img className="w-96 object-cover" src="https://i.ibb.co/yy9QLRM/groot.jpg" alt="" />
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full md:w-1/2">
            <h1
              className="text-5xl font-bold text-center"
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Login now!
            </h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-error">Email Field is empty!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered relative"
                  {...register("password", { required: true })}
                />
                {wrongPassMSG.length > 1 && (
                  <span className="static text-xs text-error font-bold">
                    {wrongPassMSG}
                  </span>
                )}
                <div
                  onClick={() => setShowPass(!showPass)}
                  className={`relative w-4 left-64 lg:left-72 ${
                    wrongPassMSG.length > 1 ? "bottom-12" : "bottom-8"
                  }  cursor-pointer`}
                >
                  {showPass ? (
                    <FaEye className="" />
                  ) : (
                    <FaEyeSlash className=" " />
                  )}
                </div>
                {errors.password && (
                  <span className="text-error">Password Field is empty!</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
                {noAccount.length > 0 && (
                  <p className="bg-red-600 text-white py-1 text-xs text-center w-full rounded-3xl mt-4 -mb-2">
                    {noAccount}
                  </p>
                )}
                <p className="text-center pt-2">
                  Don't have an account?{" "}
                  <Link to="/register" className="link">
                    Register
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>
              <div
                className="socialLogin btn"
                onClick={handleAuthenticateWithGoogle}
              >
                <p className="text-xl">
                  <FaGoogle className="inline mx-1 font-bold " /> Login with
                  Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
