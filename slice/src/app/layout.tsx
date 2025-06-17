import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import {ClerkProvider} from '@clerk/nextjs'
import ReactQueryProvider from "@/providers/react-query-provider";

const jakarta = Plus_Jakarta_Sans({subsets:['latin']})

export const metadata: Metadata = {
  title: "Slide",
  description: "Automate DMs and comments on instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={jakarta.className}
        >
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
