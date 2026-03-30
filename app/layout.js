import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "react-quill-new/dist/quill.snow.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nightowl-Journal",
  description: "",
  icons: {
    icon: "/icon.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} relative bg-background text-foreground`}>
          
          {/* ★ Background Pattern (NOW VISIBLE) */}
          <div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(0,0,0,0.04) 5px, rgba(0,0,0,0.04) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(0,0,0,0.04) 5px, rgba(0,0,0,0.04) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 11px, transparent 11px, transparent 30px),
                repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 11px, transparent 11px, transparent 30px)
              `,
            }}
          />

          {/* ★ Your Header */}
          <Header />

          {/* ★ Page Content */}
          <main className="min-h-screen relative z-10">{children}</main>

          <Toaster richColors />

          {/* Footer */}
          <footer className="py-12 bg-opacity-10 relative z-10">
            <div className="container mx-auto px-4 text-center text-gray-900 dark:text-gray-200">
              <p>Made with 💙 by Krishna</p>
            </div>
          </footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
