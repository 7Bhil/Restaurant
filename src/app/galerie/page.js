"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Galerie() {
  const [activeFilter, setActiveFilter] = useState("tout");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Données des images de la galerie
  const galleryImages = {
    tout: [
      {
        id: 1,
        src: "/galerie/salle-1.jpg",
        alt: "Vue de notre salle principale",
        category: "interieur",
      },
      {
        id: 2,
        src: "/galerie/plat-1.jpeg",
        alt: "Notre spécialité burger gourmet",
        category: "plats",
      },
      {
        id: 3,
        src: "/galerie/equipe.jpg",
        alt: "Notre équipe en cuisine",
        category: "equipe",
      },
      {
        id: 4,
        src: "/galerie/interieur-1.jpg",
        alt: "Décoration intérieure élégante",
        category: "interieur",
      },
      {
        id: 5,
        src: "/galerie/dessert-1.jpeg",
        alt: "Notre gâteau au chocolat signature",
        category: "plats",
      },
      {
        id: 6,
        src: "/galerie/terrasse-1.jpg",
        alt: "Notre terrasse extérieure",
        category: "exterieur",
      },
      {
        id: 7,
        src: "/galerie/plat-2.jpeg",
        alt: "Plateau de fruits de mer",
        category: "plats",
      },
      {
        id: 8,
        src: "/galerie/evenement-1.jpg",
        alt: "Réception d'événement",
        category: "evenements",
      },
      {
        id: 9,
        src: "/galerie/cuisine-1.jpg",
        alt: "Notre cuisine professionnelle",
        category: "interieur",
      },
      {
        id: 10,
        src: "/galerie/boisson-1.jpeg",
        alt: "Nos cocktails signature",
        category: "plats",
      },
      {
        id: 11,
        src: "/galerie/salle-2.jpg",
        alt: "Coin intimiste du restaurant",
        category: "interieur",
      },
      {
        id: 12,
        src: "/galerie/entree-1.jpg",
        alt: "Assiette de hors-d'œuvre",
        category: "plats",
      },
    ],
    interieur: [
      {
        id: 1,
        src: "/galerie/salle-1.jpg",
        alt: "Vue de notre salle principale",
        category: "interieur",
      },
      {
        id: 4,
        src: "/galerie/interieur-1.jpg",
        alt: "Décoration intérieure élégante",
        category: "interieur",
      },
      {
        id: 9,
        src: "/galerie/cuisine-1.jpg",
        alt: "Notre cuisine professionnelle",
        category: "interieur",
      },
      {
        id: 11,
        src: "/galerie/salle-2.jpg",
        alt: "Coin intimiste du restaurant",
        category: "interieur",
      },
    ],
    plats: [
      {
        id: 2,
        src: "/galerie/plat-1.jpeg",
        alt: "Notre spécialité burger gourmet",
        category: "plats",
      },
      {
        id: 5,
        src: "/galerie/dessert-1.jpeg",
        alt: "Notre gâteau au chocolat signature",
        category: "plats",
      },
      {
        id: 7,
        src: "/galerie/plat-2.jpeg",
        alt: "Plateau de fruits de mer",
        category: "plats",
      },
      {
        id: 10,
        src: "/galerie/boisson-1.jpeg",
        alt: "Nos cocktails signature",
        category: "plats",
      },
      {
        id: 12,
        src: "/galerie/entree-1.jpg",
        alt: "Assiette de hors-d'œuvre",
        category: "plats",
      },
    ],
    exterieur: [
      {
        id: 6,
        src: "/galerie/terrasse-1.jpg",
        alt: "Notre terrasse extérieure",
        category: "exterieur",
      },
    ],
    equipe: [
      {
        id: 3,
        src: "/galerie/equipe.jpg",
        alt: "Notre équipe en cuisine",
        category: "equipe",
      },
    ],
    evenements: [
      {
        id: 8,
        src: "/galerie/evenement-1.jpg",
        alt: "Réception d'événement",
        category: "evenements",
      },
    ],
  };

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Empêche le défilement
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto"; // Rétablit le défilement
  };

  const goToPrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? galleryImages[activeFilter].length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) =>
      prev === galleryImages[activeFilter].length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>Galerie - Le Gourmet Parisien</title>
        <meta
          name="description"
          content="Découvrez l'ambiance et les plats du Gourmet Parisien"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-800 mb-6">
            Notre Galerie
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Découvrez l'ambiance chaleureuse de notre restaurant et nos plats
            exquis
          </p>
        </div>
      </section>

      {/* Filtres de galerie */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter("tout")}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeFilter === "tout"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
              }`}
            >
              Tout
            </button>
            <button
              onClick={() => setActiveFilter("interieur")}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeFilter === "interieur"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
              }`}
            >
              Intérieur
            </button>
            <button
              onClick={() => setActiveFilter("plats")}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeFilter === "plats"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
              }`}
            >
              Plats
            </button>
            <button
              onClick={() => setActiveFilter("exterieur")}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeFilter === "exterieur"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
              }`}
            >
              Extérieur
            </button>
            <button
              onClick={() => setActiveFilter("equipe")}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeFilter === "equipe"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
              }`}
            >
              Équipe
            </button>
            <button
              onClick={() => setActiveFilter("evenements")}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeFilter === "evenements"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
              }`}
            >
              Événements
            </button>
          </div>

          {/* Grille de galerie */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages[activeFilter].map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white text-center">
                      <svg
                        className="w-10 h-10 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <p className="font-medium">Voir en grand</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si aucune image */}
          {galleryImages[activeFilter].length === 0 && (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-amber-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 极 012 2v2H4v-2a2 2 0 012-2z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-amber-800 mb-2">
                Aucune image dans cette catégorie
              </h3>
              <p className="text-amber-600">
                D'autres photos seront bientôt ajoutées.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-amber-400 transition-colors z-10"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-amber-400 transition-colors z-10"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            <Image
              src={galleryImages[activeFilter][currentImage].src}
              alt={galleryImages[activeFilter][currentImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">
              {galleryImages[activeFilter][currentImage].alt}
            </p>
            <p className="text-sm opacity-80">
              {currentImage + 1} / {galleryImages[activeFilter].length}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Envie de vivre l'expérience ?
          </h2>
          <p className="text-amber-100 text-xl mb-10 max-w-2xl mx-auto">
            Réservez votre table et venez découvrir par vous-même l'ambiance
            unique de notre restaurant.
          </p>
          <button className="bg-white hover:bg-amber-100 text-amber-800 font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-lg">
            Réserver maintenant
          </button>
        </div>
      </section>
    </div>
  );
}
