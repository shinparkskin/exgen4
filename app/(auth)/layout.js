import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Script from "next/script";
import { NextUIProvider } from "@nextui-org/react";
import { headers } from "next/headers";

export const metadata = {
  title: "체험단시대_육아맘놀이터",
  description: "-체험단시대 -육아맘놀이터 -체험단시대후기 -체험단시대협찬 -체험단시대사기 -체험단시대풀빌라 -체험단시대유튜브 -체험단시대환불 -체험단시대가격 -체험단시대워킹맘 -체험단시대인스타 -",
  icons: {
    icon: "https://rxgvhikbaexklehfaurw.supabase.co/storage/v1/object/public/images/images/ogimage.png",
  },
  openGraph: {
    images: [
      {
        url: "https://rxgvhikbaexklehfaurw.supabase.co/storage/v1/object/public/images/images/ogimage.png",
        width: 800,
        height: 600,
        alt: "OG Image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";

  if (pathname === "/login") {
    return <>{children}</>;
  }
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="w-full h-full justify-center items-center flex">
        <NextUIProvider>{children}</NextUIProvider>

      </body>
    </html>
  );
}
