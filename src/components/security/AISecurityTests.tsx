"use client";

import { useCallback } from "react";
import {
  FaMask,
  FaSearch,
  FaLockOpen,
  FaDoorOpen,
  FaBalanceScale,
  FaLock,
} from "react-icons/fa";

type AITest =
  | "adversarial"
  | "membership"
  | "extraction"
  | "backdoor"
  | "fairness"
  | "privacy";

const aiTests = [
  {
    id: "adversarial",
    icon: <FaMask className="text-white text-xl" />,
    title: "Adversarial Testing",
    description:
      "Generate adversarial examples to test model robustness against malicious inputs",
  },
  {
    id: "membership",
    icon: <FaSearch className="text-white text-xl" />,
    title: "Membership Inference",
    description: "Test if training data can be inferred from model outputs",
  },
  {
    id: "extraction",
    icon: <FaLockOpen className="text-white text-xl" />,
    title: "Model Extraction",
    description: "Attempt to recreate model functionality through API queries",
  },
  {
    id: "backdoor",
    icon: <FaDoorOpen className="text-white text-xl" />,
    title: "Backdoor Detection",
    description: "Scan for hidden triggers and malicious model behaviors",
  },
  {
    id: "fairness",
    icon: <FaBalanceScale className="text-white text-xl" />,
    title: "Bias & Fairness",
    description: "Evaluate model outputs for discrimination and unfair bias",
  },
  {
    id: "privacy",
    icon: <FaLock className="text-white text-xl" />,
    title: "Privacy Testing",
    description: "Ensure differential privacy and data protection compliance",
  },
];

const AISecurityTests = () => {
  const runAITest = useCallback((test: AITest) => {
    console.log(`Running AI security test: ${test}`);
    // Logic to run the test
  }, []);

  return (
    <section className="bg-[#dfe7f4] rounded-3xl px-6 py-10 max-w-6xl mx-auto my-8">
      <h3 className="text-xl sm:text-2xl font-semibold mb-8 flex items-center gap-2 ">
        🤖 Advanced AI Security Testing
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTests.map((test) => (
          <div
            key={test.id}
            onClick={() => runAITest(test.id as AITest)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition-transform hover:scale-[1.02]"
          >
            <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-400 to-pink-600">
              {test.icon}
            </div>
            <h4 className="text-base font-semibold mb-1 text-gray-900">
              {test.title}
            </h4>
            <p className="text-gray-600 text-sm leading-snug">
              {test.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AISecurityTests;
