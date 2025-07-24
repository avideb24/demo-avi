"use client";

import { useState, useEffect } from "react";
import { Profile } from "@/components/cards/Profile/Profile";
import MobileButtons from "@/components/mobile/mobile-buttons";
import GlobalProvider from "@/components/provider/GlobalProvider";
import MobileCardModal from "@/components/mobile/mobile-card-modal";
import Loading from "@/app/loading";

export default function ClientRoot({ children }) {
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <GlobalProvider>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-primary overflow-hidden">
          <Loading />
        </div>
      )}

      <div className={`transition-opacity duration-500 ease-in-out ${loading ? "opacity-0" : "opacity-100"}`}>
        <div className="w-screen h-screen lg:px-4 lg:pt-4 lg:grid lg:grid-cols-3 lg:gap-4">
          <Profile />
          <div className="hidden md:block lg:col-span-2">{children}</div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <MobileButtons />
        </div>
        <MobileCardModal />
      </div>
    </GlobalProvider>
  );
}
