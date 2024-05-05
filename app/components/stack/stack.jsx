"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Stack = ({
  id,
  isSelected,
  setSelectedStack,
  name,
  svg,
  backgroundColor,
}) => {
  const classBorder = isSelected ? " border-violet-500 border-2 absolute" : "";

  return (
    <motion.div
      onClick={() => setSelectedStack(id)}
      className={"w-32 h-44 p-2" + classBorder}
      initial={{ position: "relative" }}
      animate={
        isSelected
          ? {
              position: "absolute",
              width: "50%",
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }
          : {}
      }
      transition={{ duration: 0.5 }}
    >
      <div
        className="card card-hover h-full w-full p-2 rounded-md flex flex-col"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="p-2">{svg}</div>
        <div className="flex flex-1 justify-center items-center text-center">
          {name}
        </div>
      </div>
    </motion.div>
  );
};

export default Stack;
