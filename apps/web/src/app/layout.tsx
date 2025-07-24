import type { Metadata } from "next";
import Nav from "@/components/ui/Nav/Nav";
import "./globals.css";

const navLinks = () => {
    const pathBase = '/travel';

    return (
        [
            {
                label: 'Before You Go',
                path: `${pathBase}/before-you-go`
            },
            {
                label: 'Essentials',
                path: `${pathBase}/essentials`
            },
            {
                label: 'Safety Tips',
                path: `${pathBase}/safety-tips`
            },
            {
                label: 'Join the Waitlist',
                path: `${pathBase}/join-the-waitlist`,
                className: 'nav-cta'
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
        {/* <Nav navLinks={navLinks()}/> */}
        {children}
      </body>
    </html>
  );
}
