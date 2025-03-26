import { createClient } from "../../utils/supabase/client";
// import ConnectSupabaseSteps from "./components/tutorial/ConnectSupabaseSteps";

// import SignUpUserSteps from "./components/tutorial/SignUpUserSteps";
// import Header from "./components/Header";
// import Link from "next/link";
// import axios from "axios";
import HomeNotification from "./components/HomeNotification";
import HomeWeeklyNews from "./components/HomeWeeklyNews";
import HomeBoast from "./components/HomeBoast";
import HomeRealReview from "./components/HomeRealReview";
import HomeYoutube from "./components/HomeYoutube";

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

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <div class="cols-span-9">
        <div class="w-full ">
          <HomeNotification></HomeNotification>
          <HomeWeeklyNews></HomeWeeklyNews>
          <HomeBoast></HomeBoast>
          <HomeRealReview></HomeRealReview>
          <HomeYoutube></HomeYoutube>
        </div>
      </div>
    </>
  );
}
