import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer } from "@/components/Footer/footer";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Refuse Shine Cleaning LTD",
  description: "Premium professional cleaning services provider",
  icons: {
    icon: [
      { url: "/assets/logo/logo.jpeg" },
      { url: "/assets/logo/logo.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/assets/logo/logo.jpeg", sizes: "96x96", type: "image/jpeg" },
      { url: "/assets/logo/logo.jpeg", sizes: "192x192", type: "image/jpeg" }
    ],
    apple: [
      { url: "/assets/logo/logo.jpeg", sizes: "180x180", type: "image/jpeg" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}

