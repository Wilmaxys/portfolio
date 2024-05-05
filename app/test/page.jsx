"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const MigratingElement = () => {
  const [isCentered, setIsCentered] = useState(false);

  const handleElementClick = () => {
    setIsCentered(!isCentered);
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ position: "relative" }}
        animate={
          isCentered
            ? {
                position: "absolute",
                width: "1000px",
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }
            : {}
        }
        transition={{ duration: 0.5 }}
        style={{
          width: 200,
          height: 200,
          background: "blue",
          borderRadius: 10,
          textAlign: "center",
          color: "white",
          cursor: "pointer",
        }}
        onClick={handleElementClick}
      >
        {isCentered ? "Click to Restore" : "Click to Center"}
      </motion.div>
    </div>
  );
};

export default MigratingElement;
