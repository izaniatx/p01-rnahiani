import React from "react";
import { motion } from "framer-motion";

export default function MotionBox() {
  return (
    <motion.div
      animate={{ rotate: 360, scale: 1.5 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "tomato",
        margin: "50px auto",
      }}
    />
  );
}