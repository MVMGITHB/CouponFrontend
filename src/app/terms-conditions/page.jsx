import TermsConditions from "@/components/termCondition/TermsConditions";

export const metadata = {
  title: 'Terms & Conditions | Job Ki Tyaari Guidelines',
  description:
    'Read Job Ki Tyaari’s terms and conditions to understand our website policies, user responsibilities, and legal guidelines.',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: '/terms-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | Job Ki Tyaari Guidelines',
    description:
      'Understand our terms of use, disclaimers, limitations of liability, and your responsibilities as a user of Job Ki Tyaari.',
    url: 'https://couponsculture.com/terms-conditions',
    siteName: 'Job Ki Tyaari',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Job Ki Tyaari Guidelines',
    description:
      'Please read these terms and conditions carefully before using Job Ki Tyaari. Learn about our policies and legal practices.',
  },
  // Uncomment below to disallow indexing:
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

export default function Page() {
  return (
    <main>
      <TermsConditions />
    </main>
  );
}
