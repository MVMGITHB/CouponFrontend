import { OWASPAISection } from "@/components/security/OWASPAISection";

import OwaspWebSection from "@/components/security/OwaspWebSection";
import AISecurityTests from "@/components/security/AISecurityTests";

import ComplianceStatus from "@/components/security/ComplianceStatus";
import ScannerSection from "@/components/security/SecurityScanner";

const Security = () => {
  return (
    <div className="bg-gray-50 m-0 p-0">
      <OwaspWebSection />
      <OWASPAISection />
      <AISecurityTests />
      <ScannerSection />
      <ComplianceStatus />
    </div>
  );
};

export default Security;
