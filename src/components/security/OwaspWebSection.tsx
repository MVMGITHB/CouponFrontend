"use client"

import { CheckCircle, Clock, Target } from 'lucide-react';
import React from 'react';

type Vulnerability = {
  id: string;
  title: string;
  risk: 'Critical' | 'High' | 'Medium';
  description: string;
  stats: {
    cases: number;
    duration: string;
    detectionRate: string;
  };
};

const vulnerabilities: Vulnerability[] = [
  {
    id: 'A01:2021',
    title: 'Broken Access Control',
    risk: 'Critical',
    description: 'Testing for unauthorized access to restricted resources and privilege escalation',
    stats: { cases: 34, duration: '~5 min', detectionRate: '94%' },
  },
  {
    id: 'A02:2021',
    title: 'Cryptographic Failures',
    risk: 'High',
    description: 'Identifying weak encryption, exposed sensitive data, and inadequate cryptographic practices',
    stats: { cases: 28, duration: '~3 min', detectionRate: '91%' },
  },
  {
    id: 'A03:2021',
    title: 'Injection',
    risk: 'Critical',
    description: 'SQL, NoSQL, OS, and LDAP injection testing with AI-powered payload generation',
    stats: { cases: 156, duration: '~8 min', detectionRate: '98%' },
  },
  {
    id: 'A04:2021',
    title: 'Insecure Design',
    risk: 'High',
    description: 'Analyzing design flaws and missing security controls in application architecture',
    stats: { cases: 42, duration: '~6 min', detectionRate: '87%' },
  },
  {
    id: 'A05:2021',
    title: 'Security Misconfiguration',
    risk: 'Medium',
    description: 'Checking for default configs, unnecessary features, and verbose error messages',
    stats: { cases: 67, duration: '~4 min', detectionRate: '95%' },
  },
  {
    id: 'A06:2021',
    title: 'Vulnerable Components',
    risk: 'High',
    description: 'Scanning for outdated libraries, frameworks, and components with known vulnerabilities',
    stats: { cases: 89, duration: '~7 min', detectionRate: '93%' },
  },
  {
    id: 'A07:2021',
    title: 'Auth & Session Failures',
    risk: 'Critical',
    description: 'Testing authentication bypasses, session fixation, and credential stuffing',
    stats: { cases: 78, duration: '~10 min', detectionRate: '96%' },
  },
  {
    id: 'A08:2021',
    title: 'Data Integrity Failures',
    risk: 'High',
    description: 'Checking for insecure deserialization and CI/CD pipeline vulnerabilities',
    stats: { cases: 45, duration: '~5 min', detectionRate: '89%' },
  },
  {
    id: 'A09:2021',
    title: 'Security Logging Failures',
    risk: 'Medium',
    description: 'Verifying proper logging, monitoring, and incident response capabilities',
    stats: { cases: 23, duration: '~3 min', detectionRate: '85%' },
  },
  {
    id: 'A10:2021',
    title: 'SSRF',
    risk: 'High',
    description: 'Server-Side Request Forgery detection and prevention testing',
    stats: { cases: 34, duration: '~4 min', detectionRate: '92%' },
  },
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'Critical':
      return 'bg-red-100 text-red-600';
    case 'High':
      return 'bg-orange-100 text-orange-600';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-700';
    default:
      return 'bg-gray-300 text-gray-700';
  }
};

export default function OwaspWebSection() {
  return (
    <div className="rounded-3xl overflow-hidden bg-gray-50 shadow border border-gray-200">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-t-3xl">
        <h2 className="text-2xl font-bold">🌐 OWASP Top 10 Web Application Security</h2>
        <p className="text-sm mt-1">Testing for the most critical web application security risks</p>
      </div>

      <div className="p-6 space-y-4">
        {vulnerabilities.map((vuln, idx) => (
          <div
            key={vuln.id}
            className={`p-5 bg-white rounded-xl border transition duration-200 flex flex-col gap-3 relative hover:shadow-md ${
              idx === 0 ? 'border-red-400 shadow-sm' : 'border border-gray-100'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-base">
                  {vuln.id} - {vuln.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 max-w-3xl">
                  {vuln.description}
                </p>
              </div>
              <span
                className={`text-xs px-3 py-1 font-semibold rounded-full ${getRiskColor(
                  vuln.risk
                )}`}
              >
                {vuln.risk}
              </span>
            </div>

            <div className="flex items-center gap-6 mt-1 text-sm text-gray-700">
              <span className="flex items-center gap-1">
                <CheckCircle size={14} /> {vuln.stats.cases} test cases
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {vuln.stats.duration}
              </span>
              <span className="flex items-center gap-1">
                <Target size={14} /> {vuln.stats.detectionRate} detection rate
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
