import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atif Mostoba | Software Engineer",
  description:
    "A software engineering portfolio for Atif Mostoba, focused on Python, TypeScript, C#, full-stack web apps, ASP.NET Core, databases, microservices and AI agent workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
