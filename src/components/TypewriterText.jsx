import React, { useEffect, useState } from "react";

export default function TypewriterText() {
  const [text, setText] = useState("");

  useEffect(() => {
    const fullText = "¡Texto con efecto máquina de escribir!";
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <p style={{ textAlign: "center", fontSize: "20px", margin: "20px" }}>{text}</p>;
}