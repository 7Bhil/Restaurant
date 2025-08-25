"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-800 mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Depuis 2025, <strong>Resto Bhil$</strong> vous fait découvrir les
            saveurs authentiques de plats faits maison, avec une passion pour la
            qualité et la convivialité.
          </p>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-6">
                Une Histoire Gourmande
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Fondé par Bhilal en 2025, <strong>Resto Bhil$</strong> est né
                d'une envie de partager des recettes simples, savoureuses et
                accessibles à tous. Ce qui a commencé comme un petit projet
                culinaire est devenu une plateforme où chaque plat raconte une
                histoire.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Aujourd'hui, l'équipe continue de créer des plats variés, allant
                des classiques burgers et pizzas aux recettes originales comme
                smoothies et desserts maison. Chaque création reflète notre
                passion pour la gastronomie et le plaisir de bien manger.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre équipe, composée de cuisiniers passionnés et de serveurs
                attentionnés, partage cette même énergie pour offrir une
                expérience chaleureuse et gourmande à tous nos clients.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/equipe.jpg"
                alt="Histoire du restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold text-amber-800 text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">Passion</h3>
              <p className="text-gray-600">
                Chaque plat est préparé avec amour et dédication. Notre passion
                pour la cuisine se ressent dans chaque bouchée.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">Qualité</h3>
              <p className="text-gray-600">
                Nous sélectionnons rigoureusement nos ingrédients auprès de
                producteurs locaux pour garantir la fraîcheur et l'authenticité.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Convivialité
              </h3>
              <p className="text-gray-600">
                L'accueil chaleureux et l'atmosphère familiale font du Gourmet
                Parisien un lieu où chacun se sent comme chez soi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/moi.jpg"
                alt="Chef Thomas Dubois"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-6">
                Rencontrez Notre Chef
              </h2>
              <h3 className="text-xl font-bold text-amber-700 mb-4">
                Bhilal CHITOU
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Formé dans des cuisines locales et inspiré par les saveurs du
                monde, Bhilal a su allier simplicité et originalité pour créer
                des plats savoureux et accessibles. Passionné de gastronomie, il
                a exploré différentes recettes avant de lancer{" "}
                <strong>Resto App</strong>.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sa philosophie culinaire repose sur des ingrédients frais et de
                saison, préparés avec soin, tout en apportant une touche moderne
                et créative à chaque plat.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex text-amber-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-2 text-gray-700">Maître Cuisinier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-16 bg-amber-100 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-amber-800 mb-8">
            Notre Engagement
          </h2>
          <p className="text-lg text-amber-700 mb-8 leading-relaxed">
            Chez <strong>Resto App</strong>, nous nous engageons à proposer des
            plats savoureux, faits maison, tout en respectant notre
            environnement et notre communauté. Nous privilégions les ingrédients
            frais, locaux et de saison, pour une cuisine responsable et
            gourmande.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                🌱 Écologie
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Priorité aux produits frais, locaux et de saison</li>
                <li>• Réduction des déchets alimentaires</li>
                <li>• Emballages recyclables et durables</li>
                <li>• Gestion responsable de l’énergie en cuisine</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                🤝 Communauté
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Collaboration avec des producteurs et artisans locaux</li>
                <li>• Formation continue de notre équipe</li>
                <li>• Participation aux événements et initiatives locales</li>
                <li>• Menus adaptés aux régimes spéciaux et allergies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Venez Découvrir Notre Univers
          </h2>
          <p className="text-amber-100 text-xl mb-10">
            Réservez votre table et laissez-vous transporter dans un voyage
            culinaire inoubliable au cœur de Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-amber-100 text-amber-800 font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Réserver une table
            </button>
            <Link href="/menu">
              <button className="border-2 border-white hover:bg-white hover:text-amber-800 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300">
                Voir notre menu
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
