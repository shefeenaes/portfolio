import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./themeProvider";
import metaData from "./data/metadata.json";
import "keen-slider/keen-slider.min.css";
import GTMHead from "./lib/GTMHead";
import GTMNoScript from "./lib/GTMNoScript";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: metaData.title,
    template: `%s - MDR`,
  },
  description: metaData.description,
  keywords: metaData.keywords,
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    images: [
      {
        url: metaData.imageOfShefi,

        alt: metaData.title,
      },
    ],

    siteName: metaData.title,
    type: "website",
    url: "https://mdranju.xyz",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GTMHead />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GTMNoScript />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
