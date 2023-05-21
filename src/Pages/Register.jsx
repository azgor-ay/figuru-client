import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import useTitle from "../customHooks/useTitle";
const Register = () => {
  useTitle('Register')
  const { registerUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [passNotMatch, setPassNotMatch] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    if(password !== confirmPassword){
      setPassNotMatch("Password Didn't match")
      return
    }
    else if(password === confirmPassword){
    registerUser(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    }

  };
  const handleAuthenticateWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col items-center lg:flex-row">
          <div className="text-center w-1/2 lg:text-left lg:mr-32">
            <img className="w-96 object-cover" src="https://i.ibb.co/yy9QLRM/groot.jpg" alt="" 
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            />
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full md:w-1/2">
            <h1 className="text-5xl font-bold text-center"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            >Register now!</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-error">Name Field is empty!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Profile pictures URL"
                  className="input input-bordered"
                  {...register("photo")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
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
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="relative w-4 left-64 lg:left-72 bottom-8 cursor-pointer"
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={showConPass ? "text" : "password"}
                  placeholder="Re-type password"
                  className="input input-bordered"
                  {...register("confirmPassword", { required: true })}
                />
                <div
                  onClick={() => setShowConPass(!showConPass)}
                  className="relative w-4 left-64 lg:left-72 bottom-8 cursor-pointer"
                >
                  {showConPass ? (
                    <FaEye className="" />
                  ) : (
                    <FaEyeSlash className=" " />
                  )}
                </div>
                {errors.confirmPassword && (
                  <span className="text-error">
                    Confirm Password Field is empty!
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
                />
                <p className="text-center pt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="link">
                    Login
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>
              <div
                className="socialLogin btn"
                onClick={handleAuthenticateWithGoogle}
              >
                <p className="text-xl">
                  <FaGoogle className="inline mx-1 font-bold " /> Continue with
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

export default Register;