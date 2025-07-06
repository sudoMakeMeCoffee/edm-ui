import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { toast } from "react-toastify";

const SignIn = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8080/api/auth/signin",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      setIsLoading(false);
      setIsAuthenticated(true)
      setUser(res.data.data)
      toast.success(res.data.message)
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErr(error.response?.data?.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    signIn();
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div className="flex items-center gap-3 flex-col">
        <h1 className="text-3xl font-bold">
          Sign In to <span id="logo">EDM</span>
        </h1>
        <span className="text-sm text-red-500">{err}</span>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-row items-center border rounded-xl px-5 py-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            disabled={isLoading}
          />
        </div>

        <div className="flex flex-row items-center border rounded-xl px-5 py-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            disabled={isLoading}
          />
          {showPassword ? (
            <GoEyeClosed
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <GoEye
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <button
          type="submit"
          className="ppx-5 py-3 rounded-xl bg-black text-white border border-grey"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>

        <span className="text-center text-sm">
          Don't have an account?{" "}
          <Link className="underline" to={"/signup"}>
            Create One
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
