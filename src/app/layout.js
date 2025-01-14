import "./globals.css";
import Head from "next/head";


export const metadata = {
  title: "Website Portfolio",
  description: "Portfolio Website Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

        <link rel="icon" type="image/png" href="imgs/Logo.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
