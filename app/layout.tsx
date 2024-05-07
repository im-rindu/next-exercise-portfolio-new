import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { navBar } from "@/config/nav";
import { NavMenu, Footer } from "@/components";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <div className="absolute top-0 w-full px-24">
          <NavMenu leftSide="@Ayush Barnwal" rightSide={navBar} />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
