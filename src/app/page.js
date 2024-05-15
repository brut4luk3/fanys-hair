/** @jsxImportSource react */
"use client";
import Header from "../components/Header";
import MainPage from "@/components/PageContent/MainPage";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}