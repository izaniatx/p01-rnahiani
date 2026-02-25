import React from "react";
import GradientBackground from "../components/GradientBackground";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex  flex-col bg-gray-50 text-gray-900">
            <GradientBackground />
            <header className="bg-white shadow">
                
            </header>

            <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-6">
                {children}
            </main>

            <footer className="bg-white border-t">
                <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} - Izani Achega
                </div>
            </footer>
        </div>
    );
}