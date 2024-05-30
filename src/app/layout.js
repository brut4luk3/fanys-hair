import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fany's Hair - Cabelos Autênticos",
  description: "Cabeleireira especializada em colorimetria capilar, cortes exóticos e tratamento de cachos.",
  keywords: "cabeleireira, colorimetria capilar, cortes exóticos, tratamento de cachos, salão de beleza, hair stylist, cabelos coloridos, blumenau",
  author: "Fany's Hair",
  ogType: "website",
  ogUrl: "https://www.fanyshair.com",
  ogImage: "/assets/logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:site" content={metadata.twitterSite} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.ogImage} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}