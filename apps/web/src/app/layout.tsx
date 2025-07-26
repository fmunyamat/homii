import type { Metadata } from "next";
import Nav from "@/components/ui/Nav/Nav";
import "./globals.css";

const navLinks = () => {
    const pathBase = '/travel';

    return (
        [
            {
                label: 'Destinations',
                path: `${pathBase}/before-you-go`
            },
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
      </body>
    </html>
  );
}
