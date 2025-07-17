"use client"
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <div className="pt-24 flex-1">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;