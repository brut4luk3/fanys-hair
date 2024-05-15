/** @jsxImportSource react */
"use client";
import Header from "../components/Header";
import GalleryPage from "@/components/PageContent/GalleryPage";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <GalleryPage />
      </main>
      <Footer />
    </div>
  );
}