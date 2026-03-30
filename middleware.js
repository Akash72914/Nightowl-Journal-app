// middleware.ts - CORRECTED VERSION
import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/journal(.*)",
  "/collection(.*)",
]);

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)",
  "/_next(.*)",
  "/favicon.ico",
  "/(.*).(ico|png|jpg|jpeg|svg|css|js)", // Add static files
]);

// IMPORTANT: Use async function
export default clerkMiddleware(async (auth, req) => {
  // Check if it's a public route
  const isPublic = isPublicRoute(req);
  
  // Check if it's a protected route
  const isProtected = isProtectedRoute(req);
  
  // IMPORTANT: AWAIT the auth() call - it's a Promise!
  const authResult = await auth();
  const { userId } = authResult;
  
  // Allow public routes to pass through
  if (isPublic) {
    return NextResponse.next();
  }
  
  // Check if user is authenticated for protected routes
  if (isProtected) {
    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
  
  return NextResponse.next();
});

// Try this simplified matcher
export const config = {
  matcher: [
    // Match all request paths except for:
    // 1. _next/static, _next/image (Next.js internals)
    // 2. static files (ico, png, jpg, etc.)
    // 3. favicon.ico
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
