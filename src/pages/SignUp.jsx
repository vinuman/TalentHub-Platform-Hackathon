import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [organisation, setOrganisation] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobSeeker, setJobSeeker] = useState(null);
  const [recruiter, setRecruiter] = useState(null);
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    //Form validation
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      password !== confirmPassword ||
      password.length < 6
    ) {
      if (name.trim() === "") {
        setNameError(true);
      }
      if (email.trim() === "") {
        setEmailError(true);
      }
      if (password.trim() === "" || password.length < 6) {
        setPasswordError(true);
      }
      if (confirmPassword.trim() === "") {
        setConfirmPasswordError(true);
      }
      if (password !== confirmPassword) {
        setConfirmPasswordError(true);
      }
    }
    //Email validator
    if (validator.isEmail(email) === false) {
      setEmailError(true);
    }

    //After validation
    if (
      password === confirmPassword &&
      password.length >= 6 &&
      validator.isEmail(email) &&
      fullName.length
    ) {
      try {
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(false);
  };

  const handleJobSelect = () => {
    setJobSeeker(true);
    setRecruiter(false);
    setAdmin(false);
  };
  const handleRecSelect = () => {
    setJobSeeker(false);
    setRecruiter(true);
    setAdmin(false);
  };
  const handleAdminSelect = () => {
    setJobSeeker(false);
    setRecruiter(false);
    setAdmin(true);
  };
  return (
    <>
      <div className="flex justify-center items-center mt-4 overflow-scroll">
        <div className="border rounded-lg sm:py-8 sm:px-16 p-4 w-[90%] sm:w-auto flex flex-col items-center shadow-md">
          <div className="flex flex-col items-center">
            <h1 className=" text-[36px] font-semibold underline">Sign Up</h1>
            <p className=" text-sm text-slate-500` mb-4">
              Excited to meet you 👋
            </p>
          </div>

          <div className="flex flex-col w-full mb-4">
            <p className=" text-[16px]">Select a role</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <input
                  onChange={handleJobSelect}
                  checked={jobSeeker}
                  type="radio"
                  name="jobSeeker"
                ></input>
                <label>Job seeker</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  onChange={handleRecSelect}
                  checked={recruiter}
                  type="radio"
                ></input>
                <label>Recruiter</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  onChange={handleAdminSelect}
                  checked={admin}
                  type="radio"
                ></input>
                <label>Admin</label>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-col mb-2">
            <label className=" text-[16px] ml-2">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              type="text"
              value={name}
              required={true}
              placeholder="eg: Elfonze technologies"
              className={` border border-solid  rounded-lg p-2 text-[1rem]w-[100%] sm:w-[400px] h-[36px] font-normal outline-none text-slate-900 focus:border-slate-900 placeholder:text-slate-400 ${
                nameError ? " border-red-700" : " border"
              }`}
            ></input>
            {nameError && (
              <p className=" text-red-700 mb-2 text-[12px]">
                Please enter a valid email ID
              </p>
            )}
          </div>

          <div className="w-[100%] flex flex-col mb-2">
            <label className=" text-[16px] ml-2">Organisation</label>
            <input
              onChange={(e) => {
                setOrganisation(e.target.value);
              }}
              type="text"
              value={organisation}
              required={true}
              placeholder="eg: Elfonze technologies"
              className={` border border-solid  rounded-lg p-2 text-[1rem]w-[100%] sm:w-[400px] h-[36px] font-normal outline-none text-slate-900 focus:border-slate-900 placeholder:text-slate-400 `}
            ></input>
          </div>
          <div className="w-[100%] flex flex-col mb-2">
            <label className=" text-[16px] ml-2">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              type="text"
              value={email}
              required={true}
              placeholder="eg: jondoe@gmail.com"
              className={` border border-solid  rounded-lg p-2 text-[1rem]w-[100%] sm:w-[400px] h-[36px] font-normal outline-none text-slate-900 focus:border-slate-900 placeholder:text-slate-400 ${
                emailError ? " border-red-700" : " border"
              }`}
            ></input>
            {emailError && (
              <p className=" text-red-700 mb-2 text-[12px]">
                Please enter a valid email ID
              </p>
            )}
          </div>
          <div className="w-[100%] flex flex-col">
            <label className=" text-[16px] ml-2">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              type="password"
              value={password}
              required={true}
              placeholder="Enter your password"
              className={` border border-solid  rounded-lg p-2 text-[1rem] w-[100%] sm:w-[400px] h-[36px] font-normal outline-none text-slate-900 focus:border-slate-900 placeholder:text-slate-400 ${
                passwordError ? " border-red-700" : " border mb-4"
              }`}
            ></input>
            {passwordError && (
              <p className=" text-red-700 text-[12px]">
                Please enter your password
              </p>
            )}
          </div>
          <div className="w-[100%] flex flex-col">
            <label className=" text-[16px] ml-2">Confirm Password</label>
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError(false);
              }}
              type="password"
              value={confirmPassword}
              required={true}
              placeholder="Confirm your password"
              className={` border border-solid  rounded-lg p-2 text-[1rem] w-[100%] sm:w-[400px] h-[36px] font-normal outline-none text-slate-900 focus:border-slate-900 placeholder:text-slate-400 ${
                confirmPasswordError ? " border-red-700" : " border mb-4"
              }`}
            ></input>
            {confirmPasswordError && (
              <p className=" text-red-700 mb-2 text-[12px]">
                Please enter your password
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row w-[100%] items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <p className=" text-blue-800 font-semibold cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <Button
            classname=" w-[100%] sm:w-[400px] h-[36px] border bg-blue-800 text-white font-bold hover:bg-blue-400 mb-2"
            onClick={handleSignUp}
            text={loading ? "loading..." : "SignUp"}
          />
          <div className=" flex items-center justify-center gap-1 sm:gap-2 w-[100%] mb-4">
            <div className="w-[20%] h-[1px] border"></div>
            <p className=" text-[12px] ">Or Sign up with Google</p>
            <div className="w-[20%] h-[1px] border"></div>
          </div>
          <Button
            classname="w-[100%] sm:w-[400px] h-[36px] border hover:bg-slate-200 text-[14px] mb-4 font-bold"
            text={"Signup with Google"}
            icon={<FcGoogle />}
          />
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 sm:mt-2">
            <p>Have an account already?</p>
            <p
              onClick={() => navigate("/login")}
              className=" text-blue-800 font-semibold cursor-pointer"
            >
              Login here 💁
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
