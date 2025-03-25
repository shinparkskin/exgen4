import { GeistSans } from "geist/font/sans";
import Header from "./components/Header";
import "./globals.css";
import Script from "next/script";
import RightSideBar from "./components/RightSideBar";
import { NextUIProvider } from "@nextui-org/react";
import { headers } from "next/headers";
import Footer from "./components/Footer";
import ChannelTalk from "./components/ChannelTalk";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "체험단시대_육아맘놀이터 / 체플리케이션",
  description: "-체험단시대 -육아맘놀이터 -체험단시대후기 -체험단시대협찬 -체험단시대사기 -체험단시대풀빌라 -체험단시대유튜브 -체험단시대환불 -체험단시대가격 -체험단시대워킹맘 -체험단시대인스타 -",
  keywords: "체험단시대, 육아맘놀이터, 체험단시대후기, 체험단시대협찬, 체험단시대사기, 체험단시대풀빌라, 체험단시대유튜브, 체험단시대환불, 체험단시대가격, 체험단시대워킹맘, 체험단시대인스타",
  icons: {
    icon: "https://rxgvhikbaexklehfaurw.supabase.co/storage/v1/object/public/images/images/ogimage.png",
  },
  openGraph: {
    title: "체험단시대-체험단시대 | 육아맘놀이터 | 체험단시대후기 | 체험단시대협찬 | 체험단시대사기 | 체험단시대풀빌라 | 체험단시대유튜브 | 체험단시대환불 | 체험단시대가격 | 체험단시대워킹맘 | 체험단시대인스타",
    images: [
      {
        url: "https://rxgvhikbaexklehfaurw.supabase.co/storage/v1/object/public/images/images/ogimage.png",
        width: 800,
        height: 600,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "체험단시대-체험단시대 | 육아맘놀이터 | 체험단시대후기 | 체험단시대협찬 | 체험단시대사기 | 체험단시대풀빌라 | 체험단시대유튜브 | 체험단시대환불 | 체험단시대가격 | 체험단시대워킹맘 | 체험단시대인스타",
    site: "체험단시대-체험단시대 | 육아맘놀이터 | 체험단시대후기 | 체험단시대협찬 | 체험단시대사기 | 체험단시대풀빌라 | 체험단시대유튜브 | 체험단시대환불 | 체험단시대가격 | 체험단시대워킹맘 | 체험단시대인스타",
  },
  verification: {
    other:{
      'naver-site-verification':'214348c86c145d0f743c8451457cef3f1d1d3191'
    }
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'www.mom-playground.com',
  },

};

export default function RootLayout({ children }) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";

  if (pathname === "/login") {
    return <>{children}</>;
  }
  return (
    <html lang="ko" >
      <head>
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="체험단시대-체험단시대 | 육아맘놀이터 | 체험단시대후기 | 체험단시대협찬 | 체험단시대사기 | 체험단시대풀빌라 | 체험단시대유튜브 | 체험단시대환불 | 체험단시대가격 | 체험단시대워킹맘 | 체험단시대인스타" />
        <meta property="og:url" content="www.mom-playground.com" />
        
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="w-full h-full">
        <div id="wrapper" className="h-full">
          <Header></Header>
          <main
            id="site__main"
            class="2xl:ml-[--w-side]  xl:ml-[--w-side-sm] p-2.5 h-full mt-[--m-top] "
          >
            <NextUIProvider>
              <div class="grid grid-cols-12 md:gap-x-10 " id="js-oversized">
                <div class="col-span-12 md:col-span-9 ">{children}</div>
                <div class="hidden md:block md:col-span-3 mt-10 ">
                  <RightSideBar></RightSideBar>
                </div>
              </div>
              <Footer></Footer>
            </NextUIProvider>
          </main>
        </div>
        <ChannelTalk>

        </ChannelTalk>

      </body>
    </html>
  );
}
