import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import TrialBuilderDemo from "./pages/TrialBuilderDemo";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">CTX-EOR</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/demo">Demo</Link>
        </div>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demo" element={<TrialBuilderDemo />} />
        </Routes>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
        &copy; 2025 CTX-EOR. All rights reserved.
      </footer>
    </div>
  );
}

