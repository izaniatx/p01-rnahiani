import React from "react";
import { motion } from "framer-motion";

export default function ProgressBar() {
  return (
    <div style={{ width: "80%", backgroundColor: "#eee", margin: "20px auto", borderRadius: "10px" }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 2 }}
        style={{ height: 20, backgroundColor: "#4f46e5", borderRadius: "10px" }}
      />
    </div>
  );
}