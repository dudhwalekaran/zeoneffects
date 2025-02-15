// /app/layout.js
"use client";

import Link from "next/link";
import "./globals.css"; // Import Tailwind CSS globally
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  // Check if the current path is the PayPal page
  const isPaypalPage = pathname.startsWith("/paypal");

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Video Editor</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/fontawesome.min.css"
        />
      </head>
      <body className={isPaypalPage ? "" : "bg-[#1F2937]"}>
        {/* Header (Navbar) */}
        {!isPaypalPage && (
          <header className="bg-black text-white shadow-md py-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
              <Link href="/" className="text-3xl font-bold">
                <span className="text-red-700">Zeon</span>Effects
              </Link>
              <nav>
                <ul className="flex space-x-8 text-lg">
                  <li>
                    <Link href="/" className="hover:text-blue-500 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#pricing"
                      className="hover:text-blue-500 transition"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        )}

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        {!isPaypalPage && (
          <footer className="bg-black text-white py-6 mt-12">
            <div className="max-w-screen-xl mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} Video Editor. All rights
                reserved.
              </p>
              <p className="text-sm mt-2">Built with love and Next.js.</p>
              <div className="flex flex-col items-center mt-10 justify-center space-y-2">
                <div className="flex space-x-28 items-center justify-center">
                  <Link
                    href="https://www.instagram.com/zeoneffects?igsh=MTNzNmNleHpzcTh6OQ=="
                    target="__blank"
                  >
                    <p>
                      <i className="fa-brands fa-instagram"></i> Instagram
                    </p>
                  </Link>
                  <Link href="https://wa.me/918591364840" target="_blank">
                    <i className="fa-brands fa-whatsapp text-green-500 text-lg"></i>{" "}
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
