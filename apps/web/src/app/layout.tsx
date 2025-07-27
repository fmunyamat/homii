import type { Metadata } from "next";
import Nav from "@/components/ui/Nav/Nav";
import Footer from "@/components/ui/Footer/Footer";
import "./globals.css";

const navLinks = () => {
    const pathBase = '/travel';

    return (
        [
            {
                label: 'Destinations',
                path: `${pathBase}/destinations`
            },
            {
                label: 'Communities'
            },
            {
                label: 'Resources'
            }
        ]
    )
}

export const metadata: Metadata = {
  title: "Homii",
  description: "Redefining global experiences for digital nomads, slow travelers, and expats. Find your community, safely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav navLinks={navLinks()}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
