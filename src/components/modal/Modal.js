import React from "react";
import { motion } from "framer-motion";

import "./modal.style.css";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("btn")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="Large Image"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <button className="btn" onClick={handleClick}>
        Close
      </button>
    </motion.div>
  );
};

export default Modal;
