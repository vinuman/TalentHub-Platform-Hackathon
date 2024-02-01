import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Header /> */}
      <div className=" px-16 py-16 flex justify-center items-center  mx-auto border bg-slate-200">
        {/*  div left */}
        <div className=" w-[100%] h-[100vh]  flex flex-col justify-start items-center pt-32">
          <div className="flex gap-2 items-center">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className=" text-slate-600 text-[64px] underline tracking-wide"
            >
              TalentHub
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" text-[15px] w-[70%] pb-4 text-grey text-center"
          >
            Our mission is to develop a cutting-edge recruitment tool that
            simplifies hiring processes by intelligently matching job
            descriptions (JD) with resumes.
          </motion.p>
          <div className="flex gap-4">
            <motion.div
              onClick={() => navigate("/login")}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-[240px] h-[52px]  rounded-lg flex items-center justify-center gap-2 cursor-pointer group bg-sky-800 text-white mb-8 group transition-all duration-300"
            >
              <Button
                className="  font-bold group-hover:text-black"
                text="Sign Up / Login"
              />
            </motion.div>
          </div>
        </div>
        {/* LEFT DIV ENDS */}
      </div>
    </>
  );
};

export default Home;
