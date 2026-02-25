import React from "react";
import { motion } from "framer-motion";

export default function FadeInText() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} style={{ textAlign: "center", fontSize: "24px", margin: "20px" }}>
      ¡Hola mundo!
    </motion.div>
  );
}