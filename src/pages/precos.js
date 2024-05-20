/** @jsxImportSource react */
"use client";
import Header from "../components/Header";
import PricesPage from "@/components/PageContent/PricesPage";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Precos() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Fany's Hair - Tabela de Preços</title>
      </Head>
      <Header />
      <main className="flex-grow">
        <PricesPage />
      </main>
      <Footer />
    </div>
  );
}