import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ammar Ahmad | Portfolio",
  description: "Full Stack Developer — building modern web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
