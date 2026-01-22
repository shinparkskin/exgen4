import { NextResponse, type NextRequest } from "next/server";
// import { updateSession } from "@/utils/supabase/middleware";
import { updateSession } from "./utils/supabase/middleware";

const MAINTENANCE_FLAG = process.env.NEXT_PUBLIC_MAINTENANCE === "true";

export async function middleware(request: NextRequest) {
  if (MAINTENANCE_FLAG) {
    return new NextResponse("서비스 점검 중입니다.", { status: 503 });
  }
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
