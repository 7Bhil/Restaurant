"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Vérifier si on est sur la page menu
  const isMenuPage = pathname === "/menu";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="fr">
      <body>
        <Head>
          <title>Bihl$- Restaurant</title>
          <meta
            name="description"
            content="Cuisine française authentique dans une ambiance chaleureuse"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navigation */}
        <nav className="bg-white shadow-md py-4 fixed z-20 w-full px-6">
          <div className="container mx-auto flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-amber-800 hover:text-amber-900 transition-colors"
            >
              Bihl$
            </Link>

            {/* Menu pour desktop - caché sur mobile */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link
                href="/"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Accueil
              </Link>
              <Link
                className={`text-amber-700 hover:text-amber-900 transition-colors ${
                  pathname === "/menu"
                    ? "font-semibold border-b-2 border-amber-600"
                    : ""
                }`}
                href="/menu"
              >
                Menu
              </Link>
              <Link
                className={`text-amber-700 hover:text-amber-900 transition-colors ${
                  pathname === "/about"
                    ? "font-semibold border-b-2 border-amber-600"
                    : ""
                }`}
                href="/about"
              >
                À propos
              </Link>
              <Link
                className={`text-amber-700 hover:text-amber-900 transition-colors ${
                  pathname === "/galerie"
                    ? "font-semibold border-b-2 border-amber-600"
                    : ""
                }`}
                href="/galerie"
              >
                Galerie
              </Link>
              <Link
                className={`text-amber-700 hover:text-amber-900 transition-colors ${
                  pathname === "/reservation"
                    ? "font-semibold border-b-2 border-amber-600"
                    : ""
                }`}
                href="/reservation"
              >
                reservation
              </Link>
              <Link
                className={`text-amber-700 hover:text-amber-900 transition-colors ${
                  pathname === "/contact"
                    ? "font-semibold border-b-2 border-amber-600"
                    : ""
                }`}
                href="/contact"
              >
                Contact
              </Link>

              {/* Bouton Paiement - visible uniquement sur la page menu */}
              {isMenuPage && (
                <button
                  id="payment-button"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Paiement
                </button>
              )}
            </div>

            {/* Bouton hamburger pour mobile */}
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Ouvrir le menu"
            >
              <svg
                className="w-6 h-6 text-amber-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Menu mobile qui glisse depuis la droite */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6">
              <button
                className="absolute top-4 right-4 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Fermer le menu"
              >
                <svg
                  className="w-6 h-6 text-amber-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className={`text-amber-700 hover:text-amber-900 text-lg font-medium transition-colors ${
                    pathname === "/" ? "font-bold text-amber-800" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/menu"
                  className={`text-amber-700 hover:text-amber-900 text-lg font-medium transition-colors ${
                    pathname === "/menu" ? "font-bold text-amber-800" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link
                  href="/about"
                  className={`text-amber-700 hover:text-amber-900 text-lg font-medium transition-colors ${
                    pathname === "/about" ? "font-bold text-amber-800" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </Link>
                <Link
                  className={`text-amber-700 hover:text-amber-900 text-lg font-medium transition-colors ${
                    pathname === "/about" ? "font-bold text-amber-800" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  href="/galerie"
                >
                  Galerie
                </Link>
                <Link
                  className={`text-amber-700 hover:text-amber-900 text-lg font-medium transition-colors ${
                    pathname === "/about" ? "font-bold text-amber-800" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  href="/reservation"
                >
                  reservation
                </Link>
                <Link
                  href="/contact"
                  className={`text-amber-700 hover:text-amber-900 text-lg font-medium transition-colors ${
                    pathname === "/contact" ? "font-bold text-amber-800" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Overlay sombre quand le menu est ouvert */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleMenu}
            ></div>
          )}
        </nav>

        {children}

        <footer className="bg-amber-800 text-white py-10 px-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-serif font-bold">
                Restaurant Bhil$
              </h3>
              <p className="text-amber-200">Porto-Novo, Agbokou</p>
            </div>

            <nav className="mb-6 md:mb-0">
              <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
                <li>
                  <Link
                    href="/"
                    className="text-amber-200 hover:text-white transition"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="text-amber-200 hover:text-white transition"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-amber-200 hover:text-white transition"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/galerie"
                    className="text-amber-200 hover:text-white transition"
                  >
                    Galerie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reservation"
                    className="text-amber-200 hover:text-white transition"
                  >
                    Réservation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-amber-200 hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-amber-200 mb-2">Ouvert du Mardi au Dimanche</p>
              <p className="text-amber-200">De 08h à 22h30</p>
              <p className="text-amber-200 mt-2">Tél: 01 98 87 40 19</p>
            </div>
          </div>

          <div className="container mx-auto mt-8 pt-6 border-t border-amber-700 text-center">
            <p className="text-amber-200">
              © 2025 Restaurant Bhil$. Votre satisfaction notre raison d'être.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
