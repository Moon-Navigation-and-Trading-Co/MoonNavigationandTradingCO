import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  // First handle the internationalization middleware
  const intlResponse = intlMiddleware(request);

  // If the intl middleware returns a response, return that directly
  if (intlResponse instanceof NextResponse) {
    return intlResponse;
  }

  // Otherwise, update the Supabase session and continue with the request
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    '/',
    '/(ar|en)/:path*'
  ],
};
