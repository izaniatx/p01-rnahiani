import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 2 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
      }}
    />
  );
}