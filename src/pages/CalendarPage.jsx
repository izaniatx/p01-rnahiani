import React from "react";
import Calendario from "../components/Calendario";
import MainLayout from "../layouts/MainLayout";

export default function CalendarPage() {
  return (
    <MainLayout>
      <h1 style={{ textAlign: "center" }}>Calendario de recuerdos</h1>
      <Calendario />
    </MainLayout>
  );
}