import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["200", "400", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "FA SME Bangkok: สหพันธ์สมาคมผู้ประกอบการไทย กรุงเทพฯ",
  description: "สหพันธ์สมาคมผู้ประกอบการไทย กรุงเทพฯ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          kanit.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}