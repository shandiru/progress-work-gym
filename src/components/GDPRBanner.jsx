import { useState, useEffect } from "react";

export default function GDPRBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected
    const consent = localStorage.getItem("gdprConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false"); // optional
    setVisible(false);
  };

  if (!visible) return null; // Hide if already accepted/rejected

  return (
    <div
      className="fixed bottom-0 left-0 w-full 
      bg-black text-white 
      p-6 text-center shadow-lg border-t border-red-600
      z-50"
    >
      <p className="mb-4 text-gray-300 leading-relaxed">
        We use cookies to improve your experience.{" "}
        <a
          href="/privacy-policy"
          className="underline font-semibold text-red-500 hover:text-red-400 transition-colors"
        >
          Learn more
        </a>
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {/* Accept Button - Red */}
        <button
          onClick={handleAccept}
          className="px-8 py-3 bg-red-600 text-white rounded-md font-semibold 
          hover:bg-red-500 transition"
        >
          Accept Cookies
        </button>

        {/* Reject Button - Neutral Gray */}
        <button
          onClick={handleReject}
          className="px-8 py-3 bg-gray-700 text-white rounded-md font-semibold 
          hover:bg-gray-600 transition"
        >
          Reject Cookies
        </button>
      </div>
    </div>
  );
}
