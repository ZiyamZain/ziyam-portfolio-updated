import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const sansFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziyam Muhamed | Full-Stack Developer & Freelancer",
  description:
    "Ziyam Muhamed is a Full-Stack Web Developer specializing in React, Node.js, and custom E-Commerce solutions. Available for freelance work.",
  keywords: ["Full-Stack Developer", "React Developer", "Node.js", "Freelance Web Developer", "Next.js", "E-Commerce Developer", "Software Engineer"],
  openGraph: {
    title: "Ziyam Muhamed | Full-Stack Developer",
    description:
      "Transforming ideas into high-performance web applications. Specializing in Next.js, React, and robust backend architectures.",
    type: "website",
    url: "https://ziyam.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-primary font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
