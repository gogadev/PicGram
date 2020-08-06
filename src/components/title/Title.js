import React from "react";
import { motion } from "framer-motion";

import img from "../../assets/img.jpg";

import "./title.style.css";

const Title = () => {
  return (
    <div className="title">
      <img className="img" src={img} alt="" />
      <motion.h1 initial={{ y: "-50vh" }} animate={{ y: 0 }}
      transition={{delay: 2}}>
        PicGram
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Your Photos
      </motion.h2>
      <div className="title-img"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Title;
