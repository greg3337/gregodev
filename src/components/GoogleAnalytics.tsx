"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-XXXXXXXXXX";

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function checkConsent() {
      setEnabled(localStorage.getItem("cookie_consent") === "accepted");
    }
    checkConsent();
    window.addEventListener("consent-update", checkConsent);
    return () => window.removeEventListener("consent-update", checkConsent);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
