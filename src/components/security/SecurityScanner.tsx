"use client";

import { useState } from "react";
import {
  FaGlobe,
  FaRobot,
  FaShieldAlt,
  FaKey,
  FaSyringe,
  FaSearch,
} from "react-icons/fa";

const ScannerSection = () => {
  const [scanTarget, setScanTarget] = useState("https://demo-app.example.com");
  const [scanOptions, setScanOptions] = useState({
    owasp: true,
    aiSecurity: true,
    authTesting: false,
    injection: false,
    apiSecurity: false,
    infraScan: false,
  });
  const [showReport, setShowReport] = useState(false);

  const toggleOption = (option: keyof typeof scanOptions) => {
    setScanOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const startSecurityScan = () => {
    console.log("Starting scan for:", scanTarget);
    setShowReport(true);
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg mx-auto  max-w-6xl my-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
        🔍 Security Scanner
      </h3>

      <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
        <div className="flex-grow w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target URL / API Endpoint
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://example.com or https://api.example.com/v1/"
            value={scanTarget}
            onChange={(e) => setScanTarget(e.target.value)}
          />
        </div>
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-full mt-1 hover:bg-red-600 transition"
          onClick={startSecurityScan}
        >
          Start Security Scan
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Button Generator */}
        {[
          {
            id: "owasp",
            icon: <FaGlobe className="mr-2" />,
            label: "OWASP Web Top 10",
          },
          {
            id: "aiSecurity",
            icon: <FaRobot className="mr-2" />,
            label: "AI/LLM Security",
          },
          {
            id: "infraScan",
            icon: <FaShieldAlt className="mr-2" />,
            label: "Infrastructure Scan",
          },
          {
            id: "authTesting",
            icon: <FaKey className="mr-2" />,
            label: "Authentication Testing",
          },
          {
            id: "injection",
            icon: <FaSyringe className="mr-2" />,
            label: "Deep Injection Testing",
          },
          {
            id: "apiSecurity",
            icon: <FaSearch className="mr-2" />,
            label: "API Security",
          },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => toggleOption(item.id as keyof typeof scanOptions)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
              scanOptions[item.id as keyof typeof scanOptions]
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <input
              type="checkbox"
              checked={scanOptions[item.id as keyof typeof scanOptions]}
              onChange={() => toggleOption(item.id as keyof typeof scanOptions)}
              className="mr-2"
            />
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {showReport && (
        <div className="mt-6">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
            📊 View Detailed Report
          </button>
        </div>
      )}
    </section>
  );
};

export default ScannerSection;
