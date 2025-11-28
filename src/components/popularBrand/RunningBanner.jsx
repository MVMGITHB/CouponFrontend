export default function RunningBanner() {
  return (
    <div className="relative overflow-hidden  py-2">
      <div className="marquee whitespace-nowrap text-blue-1000 text-xl font-bold">
        <span className="mx-8">🔥Upto 90% Off — On Black Friday! 🔥</span>
        <span className="mx-8">🔥Hurry Up— Limited Time Offer 🔥</span>
        <span className="mx-8">🔥Save Big Before the Black Friday Ends! 🔥</span>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        .marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
