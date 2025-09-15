import TermsConditions from "@/components/termCondition/TermsConditions";

export const metadata = {
  title: 'Terms of Use - CouponsCulture',
  description:
    'Read Coupons Cultures terms and conditions to understand our website policies, user responsibilities, and legal guidelines.',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: '/terms-conditions',
  },
  openGraph: {
    title: 'Terms of Use - CouponsCulture',
    description:
      'Read Coupons Cultures terms and conditions to understand our website policies, user responsibilities, and legal guidelines.',
    url: 'https://couponsculture.com/terms-conditions',
    siteName: 'CouponsCulture',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions',
    description:
      'Read Coupons Cultures terms and conditions to understand our website policies, user responsibilities, and legal guidelines.',
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
