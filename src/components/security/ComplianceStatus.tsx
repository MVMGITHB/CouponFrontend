"use client";

import React from "react";

type Compliance = {
  label: string;
  score: number;
};

const complianceData: Compliance[] = [
  { label: "OWASP ASVS", score: 95 },
  { label: "PCI DSS", score: 92 },
  { label: "ISO 27001", score: 78 },
  { label: "SOC 2", score: 88 },
  { label: "GDPR", score: 91 },
  { label: "HIPAA", score: 84 },
  { label: "NIST", score: 90 },
  { label: "AI Ethics", score: 72 },
];

const getScoreClass = (score: number) => {
  if (score >= 90) return "text-green-600";
  if (score >= 80) return "text-yellow-500";
  return "text-red-500";
};

const ComplianceStatus = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 max-w-6xl mx-auto" id="compliance">
      <h3 className="text-lg sm:text-xl font-semibold mb-6 flex items-center gap-2">
        📋 Security Compliance Status
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {complianceData.map(({ label, score }) => (
          <div
            key={label}
            className="bg-gray-50 rounded-xl text-center py-6 px-4"
          >
            <div className={`text-2xl font-bold ${getScoreClass(score)}`}>
              {score}%
            </div>
            <div className="mt-2 text-sm text-gray-700">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComplianceStatus;
