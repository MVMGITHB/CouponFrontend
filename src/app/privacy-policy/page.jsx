import PrivacyPolicy from "@/components/privacy/PrivacyPolicy";

export const metadata = {
  title: 'Privacy Policy | How We Protect Your Data',
  description:
    'Learn how Job Ki Tyaari protects your data, ensures privacy, and secures your personal information. Read our detailed privacy policy.',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | How We Protect Your Data',
    description:
      'We are committed to protecting your personal data. Read how Job Ki Tyaari handles data collection, usage, and security in our privacy policy.',
    url: 'https://couponsculture.com/privacy-policy',
    siteName: 'Job Ki Tyaari',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | How We Protect Your Data',
    description:
      'Understand how Job Ki Tyaari ensures your privacy and protects your personal information.',
  },
  // Uncomment below to prevent search engines from indexing
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

export default function Page() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
