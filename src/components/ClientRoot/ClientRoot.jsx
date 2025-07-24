"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
const Profile = dynamic(() => import('@/components/cards/Profile/Profile').then(mod => mod.Profile), { ssr: false });
const MobileButtons = dynamic(() => import('@/components/mobile/mobile-buttons').then(mod => mod.default), { ssr: false });
const MobileCardModal = dynamic(() => import('@/components/mobile/mobile-card-modal').then(mod => mod.default), { ssr: false });

import GlobalProvider from "@/components/provider/GlobalProvider";
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

        <div className="lg:hidden">
          <MobileButtons />
        </div>
        <MobileCardModal />
      </div>
    </GlobalProvider>
  );
}
