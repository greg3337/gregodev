"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    window.dispatchEvent(new Event("consent-update"));
    setVisible(false);
  }

  function refuse() {
    localStorage.setItem("cookie_consent", "refused");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="max-w-3xl mx-auto bg-background border border-black/10 dark:border-white/10 rounded-2xl shadow-lg px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-muted flex-1 leading-relaxed">
              Ce site utilise Google Analytics pour mesurer l&apos;audience de façon anonymisée.{" "}
              <Link
                href="/confidentialite"
                className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
              >
                En savoir plus
              </Link>
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={refuse}
                className="text-sm text-muted hover:text-foreground border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 px-4 py-2 rounded-xl transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="text-sm text-white bg-accent hover:bg-accent/90 px-4 py-2 rounded-xl transition-colors font-semibold"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
