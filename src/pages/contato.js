/** @jsxImportSource react */
"use client";
import Header from "../components/Header";
import ContactPage from "@/components/PageContent/ContactPage";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}