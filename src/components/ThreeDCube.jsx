import React from "react";
import { Canvas } from "@react-three/fiber";

export default function ThreeDCube() {
  return (
    <Canvas style={{ width: 200, height: 200, margin: "20px auto" }}>
      <ambientLight />
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}