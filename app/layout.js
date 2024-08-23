import { Open_Sans } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/mainHeader";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "News App",
  description: "A news app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
