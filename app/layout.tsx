import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./themeProvider";
import metaData from "./data/metadata.json";
import { Sacramento, Montserrat } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`${montserrat.className} antialiased`}
        suppressHydrationWarning
      >
        {/* Ambient glow effects - matches Home.jsx */}
        <div className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
