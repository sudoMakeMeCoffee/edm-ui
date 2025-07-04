import axios from "axios";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async () => {
    try {
      setIsLoading(true);
      await axios.post("http://localhost:8080/api/auth/signup", {
        username: username,
        email: email,
        password: password,
        role: "USER",
      });
      setIsLoading(false);
      navigate("/signin");
    } catch (error) {
      setIsLoading(false);
      setErr(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");

    if (username == "" || email == "" || password == "") {
      setErr("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErr("Password and Confirm Password nust be same.");
      return;
    }

    signUp();
  };


  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div className="flex items-center gap-3 flex-col">
        <h1 className="text-3xl font-bold">
          Sign Up to <span id="logo">EDM</span>
        </h1>
        <span className="text-sm text-red-500">{err}</span>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-row items-center border rounded-xl px-5 py-3">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            disabled={isLoading}
            required
          />
        </div>

        <div className="flex flex-row items-center border rounded-xl px-5 py-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            required
          />
        </div>

        <div className="flex flex-row items-center border rounded-xl px-5 py-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            required
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

        <div className="flex flex-row items-center border rounded-xl px-5 py-3">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirm_password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            disabled={isLoading}
            required
          />
          {showConfirmPassword ? (
            <GoEyeClosed
              className="cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          ) : (
            <GoEye
              className="cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          )}
        </div>

        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-black text-white border border-grey"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "SignUp"}
        </button>

        <span className="text-center text-sm">
          Already have an account?{" "}
          <Link className="underline" to={"/signin"}>
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
