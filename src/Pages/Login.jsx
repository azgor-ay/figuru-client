import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import img from "../assets/Login/groot.jpg";
import { Link } from "react-router-dom";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col items-center lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left lg:ml-32">
            <img className="w-96 object-cover" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full md:w-1/2">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
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
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
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
                <p className="text-center pt-2">Don't have an account? <Link to="/register" className="link">Register</Link></p>
              </div>
              <div className="divider">OR</div>
              <div className="socialLogin btn">
                <p className="text-xl">
                  <FaGoogle className="inline mx-1 font-bold "/> Login with Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
