import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eryll Joy Salamanes — Portfolio",
  description:
    "Mobile & Full-Stack Developer. Flutter · Laravel · React · Android.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
