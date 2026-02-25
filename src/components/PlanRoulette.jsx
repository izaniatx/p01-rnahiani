import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PlanRoulette() {
  const plans = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];

  const numItems = plans.length;
  const [rotation, setRotation] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("");

  const spin = () => {
    const extraRotation = Math.floor(Math.random() * 360) + 1080; // al menos 3 vueltas
    setRotation((prev) => prev + extraRotation);

    const finalRotation = (rotation + extraRotation) % 360;
    const sliceAngle = 360 / numItems;
    const selectedIndex = Math.floor(numItems - finalRotation / sliceAngle) % numItems;

    setTimeout(() => {
      setSelectedPlan(plans[selectedIndex]);
    }, 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",   // centra vertical
        alignItems: "center",       // centra horizontal
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Flecha indicadora */}
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "25px solid red",
          marginBottom: "10px",
          transform: "rotate(302deg)"
        }}
      ></div>

      {/* Contenedor de la ruleta para centrar absolutamente */}
      <div
        style={{
          position: "relative",
          width: "320px",
          height: "320px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: [0.33, 1, 0.68, 1] }}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "4px solid #4f46e5",
            position: "relative",
          }}
        >
          {plans.map((plan, index) => {
            const angle = (360 / numItems) * index;
            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
                  transformOrigin: "center",
                  fontSize: "16px",
                  width: "80px",
                  textAlign: "center",
                }}
              >
                {plan}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Botón girar */}
      <button
        onClick={spin}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4f46e5",
          color: "white",
        }}
      >
        Girar
      </button>

      {/* Plan seleccionado */}
      {selectedPlan && (
        <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
          ¡Plan seleccionado: {selectedPlan}!
        </div>
      )}
    </div>
  );
}