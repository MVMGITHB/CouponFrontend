"use client";

import { BookOpenCheck, Timer, Target } from "lucide-react";
import React from "react";

type Vulnerability = {
  id: string;
  title: string;
  risk: "critical" | "high" | "medium";
  description: string;
  tests: number;
  time: string;
  detectionRate: string;
};

const vulnerabilities: Vulnerability[] = [
  {
    id: "LLM01",
    title: "LLM01 - Prompt Injection",
    risk: "critical",
    description: "Testing for malicious prompt manipulation and jailbreaking attempts",
    tests: 87,
    time: "~12 min",
    detectionRate: "94%",
  },
  {
    id: "LLM02",
    title: "LLM02 - Insecure Output Handling",
    risk: "high",
    description: "Validating LLM outputs for XSS, code injection, and malicious content",
    tests: 56,
    time: "~8 min",
    detectionRate: "91%",
  },
  {
    id: "LLM03",
    title: "LLM03 - Training Data Poisoning",
    risk: "critical",
    description: "Detecting compromised training data and backdoor attacks in models",
    tests: 42,
    time: "~15 min",
    detectionRate: "87%",
  },
  {
    id: "LLM04",
    title: "LLM04 - Model Denial of Service",
    risk: "high",
    description: "Testing resource exhaustion attacks and model performance degradation",
    tests: 31,
    time: "~6 min",
    detectionRate: "93%",
  },
  {
    id: "LLM05",
    title: "LLM05 - Supply Chain Vulnerabilities",
    risk: "high",
    description: "Checking third-party models, datasets, and plugin security",
    tests: 67,
    time: "~9 min",
    detectionRate: "88%",
  },
  {
    id: "LLM06",
    title: "LLM06 - Sensitive Information Disclosure",
    risk: "critical",
    description: "Testing for PII leakage, model inversion, and data extraction attacks",
    tests: 78,
    time: "~11 min",
    detectionRate: "95%",
  },
  {
    id: "LLM07",
    title: "LLM07 - Insecure Plugin Design",
    risk: "high",
    description: "Validating plugin permissions, input validation, and access controls",
    tests: 45,
    time: "~7 min",
    detectionRate: "90%",
  },
  {
    id: "LLM08",
    title: "LLM08 - Excessive Agency",
    risk: "high",
    description: "Testing autonomous decision-making boundaries and action limitations",
    tests: 38,
    time: "~5 min",
    detectionRate: "86%",
  },
  {
    id: "LLM09",
    title: "LLM09 - Overreliance",
    risk: "medium",
    description: "Identifying hallucination risks and output reliability issues",
    tests: 29,
    time: "~4 min",
    detectionRate: "82%",
  },
  {
    id: "LLM10",
    title: "LLM10 - Model Theft",
    risk: "critical",
    description: "Protecting against model extraction and intellectual property theft",
    tests: 52,
    time: "~8 min",
    detectionRate: "89%",
  },
];

const riskLabelMap: Record<string, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
};

export const OWASPAISection = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white">
      <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white px-6 py-6">
        <h2 className="text-2xl font-semibold">
          🤖 OWASP Top 10 for LLM Applications
        </h2>
        <p className="text-sm opacity-90 mt-1">
          Security testing for AI/ML systems and Large Language Models
        </p>
      </div>

      <div className="p-6 space-y-4 bg-gray-50">
        {vulnerabilities.map((vuln, i) => (
          <div
            key={vuln.id}
            className={`relative bg-white rounded-xl px-6 py-4 border transition cursor-pointer
              ${i === 0 ? "border-red-100 shadow-md" : "border-gray-100 hover:shadow-md"}
              flex flex-col gap-2`}
          >
            {/* Left red indicator on first card */}
            {i === 0 && (
              <div className="absolute left-0 top-4 h-5 w-1 bg-red-500 rounded-r-full" />
            )}

            <div className="flex justify-between items-start">
              <div className="text-base font-semibold text-gray-800">
                {vuln.title}
              </div>
              <div className="text-xs px-3 py-1 rounded-full font-medium bg-red-50 text-red-500">
                {riskLabelMap[vuln.risk]}
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-snug">
              {vuln.description}
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-1">
              <span className="flex items-center gap-1">
                <BookOpenCheck size={14} /> {vuln.tests} test cases
              </span>
              <span className="flex items-center gap-1">
                <Timer size={14} /> {vuln.time}
              </span>
              <span className="flex items-center gap-1">
                <Target size={14} /> {vuln.detectionRate} detection rate
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
