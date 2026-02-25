import MainLayout from "../layouts/MainLayout";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Inicio() {
    return (
        <MainLayout>
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
                    <h1 className="text-lg font-semibold">Mi App</h1>
                    <nav style={{ textAlign: "center", margin: "20px" }}>
                        <Link to="/" style={{ margin: "0 10px" }}>Inicio</Link>
                        <Link to="/calendario" style={{ margin: "0 10px" }}>Calendario</Link>
                        <Link to="/planes" style={{ margin: "0 10px" }}>Planes</Link>
                    </nav>
                </div>
            <h2 className="text-2xl font-bold">Bienvenido a Mi App</h2>
            <p className="mt-4">Esta es la página de inicio.</p>
        </MainLayout>
    );
}