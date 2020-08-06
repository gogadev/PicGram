import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

import "./image-grid.style.css";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              className="imgs"
              layout
              whileHover={{ opacity: 1 }}
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="Uploaded Image"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
