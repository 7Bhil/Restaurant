"use client";
import Image from "next/image";

import equipe from "./images/equipe.jpg";
import salle from "@/app/images/salle.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Le reste de votre code reste inchangé */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={equipe}
            alt="Intérieur élégant du restaurant Le Gourmet Parisien"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Une expérience culinaire exceptionnelle
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Découvrez la véritable cuisine préparée avec des ingrédients locaux
            et saisonniers par notre chef étoilé.
          </p>
          <button className="bg-amber-600 z-10 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Réserver maintenant
          </button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-4">
              Bienvenue au Restaurant Bhil$
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={salle}
                  alt="Notre chef préparant un plat"
                  width={500}
                  height={350}
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <p className="text-gray-700 text-lg mb-6">
                Fondé en 2025, <strong>Resto Bhil$</strong> vous invite à
                savourer des plats délicieux et variés, préparés avec soin dans
                un cadre chaleureux et moderne. Notre équipe sélectionne les
                meilleurs ingrédients pour vous offrir une expérience culinaire
                inoubliable.
              </p>
              <p className="text-gray-700 text-lg">
                Que ce soit pour un déjeuner rapide, un dîner entre amis ou une
                petite fête en famille, nous vous garantissons un service
                attentif et des recettes savoureuses qui éveilleront vos
                papilles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-100 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-6">
            Prêt à vivre l'expérience?
          </h2>
          <p className="text-gray-700 text-xl mb-10 max-w-2xl mx-auto">
            Réservez votre table dès maintenant et préparez-vous pour un voyage
            culinaire inoubliable au cœur de la France.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-lg">
            Réserver maintenant
          </button>
        </div>
      </section>
    </div>
  );
}
