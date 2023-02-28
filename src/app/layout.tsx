"use client"

import './globals.css'
import { Roboto_Slab } from '@next/font/google'
import { useEffect } from "react";
import { m } from '@/lib/magic-client';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';

const robotoSlab = Roboto_Slab({
  weight: "400",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  // useEffect(() => {
  //   (async () => {
  //     const isLoggedIn = await m?.user.isLoggedIn();
  //     if (isLoggedIn) {
  //       router.push("/");
  //     } else {
  //       router.push("/login");
  //     }
  //   })();
  // }, [])

  return (
    <html lang="en" className={robotoSlab.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Navbar />
      <body className="scrollbar-dark">
        {children}
      </body>
    </html>
  )
}
