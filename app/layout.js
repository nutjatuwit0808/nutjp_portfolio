import { Inter } from "next/font/google";
import "./globals.css";
import Leftbar from "@/components/layouts/menu-bar/Leftbar";
import Topbar from "@/components/layouts/menu-bar/Topbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "nutjatuwit's portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex overflow-hidden">
        <Leftbar />
        <div className="h-screen flex flex-col flex-1">
          <Topbar />
          {children}
        </div>
      </body>
    </html>
  );
}
