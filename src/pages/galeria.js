/** @jsxImportSource react */
"use client";
import Header from "../components/Header";
import GalleryPage from "@/components/PageContent/GalleryPage";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Fany's Hair - Galeria</title>
      </Head>
      <Header />
      <main className="flex-grow">
        <GalleryPage />
      </main>
      <Footer />
    </div>
  );
}