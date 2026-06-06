import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { GrainOverlay } from "@/components/ui/grain-overlay";

export const metadata: Metadata = {
  title: "Today Filmmakers - Premier Filmmaking Community",
  description: "Join the leading community for filmmakers. Tutorials, resources, and inspiration for your creative journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <SmoothScroll>
          <GrainOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
