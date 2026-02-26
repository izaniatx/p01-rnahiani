import GradientBackground from "../components/GradientBackground";
import "./MainLayout.css";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col menu items-center bg-gray-50 text-gray-900">
            <GradientBackground />
            <header className="bg-white shadow w-full">
                <div className="mx-auto max-w-6xl px-4 py-4" />
            </header>

            <main className="flex-1 w-full max-w-6xl px-4 py-6">
                {children}
            </main>

            <footer className="bg-white border-t w-full">
                <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} - Izani Achega
                </div>
            </footer>
        </div>
    );
}
