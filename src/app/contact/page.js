"use client";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulation d'envoi du formulaire
    try {
      // Remplacer par votre logique d'envoi
      console.log("Message envoyé:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>Contact - Le Gourmet Parisien</title>
        <meta
          name="description"
          content="Contactez Le Gourmet Parisien pour toute question ou réservation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-amber-800">
            Le Gourmet Parisien
          </h1>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-amber-700 hover:text-amber-900">
              Accueil
            </Link>
            <Link href="/menu" className="text-amber-700 hover:text-amber-900">
              Menu
            </Link>
            <Link href="/about" className="text-amber-700 hover:text-amber-900">
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-amber-700 font-semibold border-b-2 border-amber-600"
            >
              Contact
            </Link>
            <button className="text-amber-700 hover:text-amber-900">
              Paiement
            </button>
          </div>

          {/* Bouton hamburger pour mobile */}
          <button className="md:hidden focus:outline-none">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-800 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Une question, une réservation ou simplement envie de nous dire
            bonjour ? Nous sommes à votre écoute !
          </p>
        </div>
      </section>

      {/* Informations de Contact et Formulaire */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de Contact */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-8">
                Nos Coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-2">
                      Adresse
                    </h3>
                    <p className="text-gray-700">
                      23 Rue du Gourmet
                      <br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-2">
                      Téléphone
                    </h3>
                    <p className="text-gray-700">
                      <Link
                        href="tel:+33142869574"
                        className="hover:text-amber-600 transition-colors"
                      >
                        +33 1 42 86 95 74
                      </Link>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Réservations et renseignements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      <Link
                        href="mailto:contact@gourmetparisien.fr"
                        className="hover:text-amber-600 transition-colors"
                      >
                        contact@gourmetparisien.fr
                      </Link>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Nous répondons sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-2">
                      Horaires
                    </h3>
                    <div className="text-gray-700">
                      <p>
                        <strong>Déjeuner:</strong> 12h00 - 14h30
                      </p>
                      <p>
                        <strong>Dîner:</strong> 19h00 - 22h30
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Fermé le lundi
                        <br />
                        Ouvert du mardi au dimanche
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-amber-800 mb-4">
                  Suivez-nous
                </h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.217.083.335-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.69-2.436-2.878-2.436-4.632 0-3.78 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.741-1.378l-.742 2.833c-.269 1.041-1.016 2.363-1.516 3.161C9.775 23.812 10.875 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-8">
                Envoyez-nous un Message
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
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
                    Merci ! Votre message a été envoyé avec succès. Nous vous
                    répondrons dans les plus brefs délais.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-amber-700 font-bold mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-amber-700 font-bold mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-amber-700 font-bold mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-amber-700 font-bold mb-2"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="reservation">Réservation</option>
                      <option value="information">Information générale</option>
                      <option value="evenement">
                        Organisation d'événement
                      </option>
                      <option value="commande">
                        Question sur une commande
                      </option>
                      <option value="suggestion">Suggestion ou feedback</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-amber-700 font-bold mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-vertical"
                    placeholder="Écrivez votre message ici..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-colors transform hover:scale-105 shadow-lg"
                  >
                    Envoyer le Message
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires - Nous nous engageons à protéger vos
                  données personnelles
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Carte et Infos Pratiques */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold text-amber-800 text-center mb-12">
            Comment Nous Trouver
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Carte (placeholder) */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-lg font-medium">Plan interactif</p>
                <p className="text-sm">23 Rue du Gourmet, 75008 Paris</p>
              </div>
            </div>

            {/* Infos Pratiques */}
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">
                Infos Pratiques
              </h3>

              <div className="space-y-6">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">
                    🚇 Transports en Commun
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Métro : Ligne 9 - Station Franklin D. Roosevelt</li>
                    <li>• Bus : Lignes 28, 32, 80</li>
                    <li>• RER : RER A - Station Auber (10 min à pied)</li>
                  </ul>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">🅿️ Parking</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Parking Haussman - Saint-Lazare (5 min)</li>
                    <li>• Parking Vendôme (8 min)</li>
                    <li>• Places de stationnement payant dans la rue</li>
                  </ul>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">
                    ♿ Accessibilité
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>
                      • Restaurant accessible aux personnes à mobilité réduite
                    </li>
                    <li>• Toilettes adaptées</li>
                    <li>• Menu en braille disponible sur demande</li>
                  </ul>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">💡 À Savoir</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Réservation recommandée</li>
                    <li>• Carte bancaire et espèces acceptées</li>
                    <li>• Menu enfant disponible</li>
                    <li>• Terrasse chauffée en hiver</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-amber-800 text-center mb-12">
            Questions Fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-amber-800 mb-3">
                Comment puis-je réserver une table ?
              </h3>
              <p className="text-gray-700">
                Vous pouvez réserver par téléphone au +33 1 42 86 95 74, par
                email à contact@gourmetparisien.fr, ou en utilisant notre
                formulaire de contact. Nous recommandons de réserver à l'avance,
                surtout pour les week-ends.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-amber-800 mb-3">
                Proposez-vous des menus pour les régimes spéciaux ?
              </h3>
              <p className="text-gray-700">
                Oui, nous proposons des options végétariennes, véganes et sans
                gluten. N'hésitez pas à nous informer de vos restrictions
                alimentaires lors de votre réservation pour que nous puissions
                vous proposer les meilleures options.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-amber-800 mb-3">
                Organisez-vous des événements privés ?
              </h3>
              <p className="text-gray-700">
                Absolument ! Nous organisons des événements privés,
                anniversaires, repas d'entreprise et célébrations spéciales.
                Contactez-nous pour discuter de vos besoins et recevoir un devis
                personnalisé.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-amber-800 mb-3">
                Avez-vous une terrasse ?
              </h3>
              <p className="text-gray-700">
                Oui, nous disposons d'une belle terrasse chauffée qui peut
                accueillir jusqu'à 30 personnes. Elle est ouverte selon les
                conditions météorologiques et la saison.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-amber-800 mb-3">
                Quels sont vos moyens de paiement acceptés ?
              </h3>
              <p className="text-gray-700">
                Nous acceptons les cartes bancaires (Visa, Mastercard, American
                Express), les espèces, les chèques et les tickets restaurant.
                Les paiements contactless sont également disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Une Question ? Nous Sommes Là !
          </h2>
          <p className="text-amber-100 text-xl mb-10">
            N'hésitez pas à nous contacter. Notre équipe se fera un plaisir de
            vous aider et de répondre à toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+33142869574"
              className="bg-white hover:bg-amber-100 text-amber-800 font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Appeler maintenant
            </Link>
            <Link
              href="mailto:contact@gourmetparisien.fr"
              className="border-2 border-white hover:bg-white hover:text-amber-800 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300"
            >
              Envoyer un email
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
