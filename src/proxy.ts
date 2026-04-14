import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all paths except for the ones starting with:
  // - api (API routes)
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - any path containing a dot (e.g. assets, favicon, etc.)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
