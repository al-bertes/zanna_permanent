import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Permanent Makeup & Lash Extensions in Minnesota | Beauty Zone by Zhanna Gabisova",
  description:
    "Zhanna Gabisova offers expert permanent makeup and lash extensions in Minnesota — serving Minnetonka, Eden Prairie, Minneapolis, St. Paul, and nearby areas. Over 7 years of experience, certified educator and award-winning artist.",
  keywords: [
    "permanent makeup",
    "permanent brows",
    "lash extensions",
    "Minnetonka",
    "Eden Prairie",
    "Minneapolis",
    "St. Paul",
    "Twin Cities",
    "Maple Grove",
    "Bloomington",
    "beauty services Minnesota",
    "Zhanna Gabisova",
    "Beauty Zone",
    "PMU Minnesota",
  ],
  openGraph: {
    title: "Beauty Zone | Permanent Makeup & Lash Extensions in Minnetonka & Eden Prairie",
    description:
      "Located in Minnesota, Beauty Zone provides professional permanent makeup and lash extensions by Zhanna Gabisova — serving Minnetonka, Eden Prairie, and more.",
    url: "http://www.beautyzonezg.com/",
    siteName: "Beauty Zone",
    images: [
      {
        url: "http://www.beautyzonezg.com/img/main.png",
        width: 1200,
        height: 630,
        alt: "Beauty Zone by Zhanna Gabisova",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
