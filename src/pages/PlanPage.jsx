import React from "react";
import RouletteWheel from "../components/RouletteWheel";
import MainLayout from "../layouts/MainLayout";

export default function PlanPage() {
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1>.</h1>
        <RouletteWheel />
      </div>
    </MainLayout>
  );
}