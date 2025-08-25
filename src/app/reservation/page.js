"use client";
import Head from "next/head";
import { useState } from "react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    date: "",
    heure: "19:00",
    personnes: "2",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulation d'envoi (à remplacer par votre API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Ici vous ajouterez l'appel à votre API ou service EmailJS
      console.log("Réservation reçue:", formData);

      setSubmitStatus("success");
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        date: "",
        heure: "19:00",
        personnes: "2",
        message: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Générer les options d'heures
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 11; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 22 && minute === 30) break; // Dernière réservation à 22:00
        const timeValue = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        options.push(
          <option key={timeValue} value={timeValue}>
            {timeValue}
          </option>
        );
      }
    }
    return options;
  };

  // Obtenir la date minimale (aujourd'hui)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Obtenir la date maximale (3 mois à partir d'aujourd'hui)
  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.setMonth(today.getMonth() + 3));
    return maxDate.toISOString().split("T")[0];
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>Réservation - Le Gourmet Parisien</title>
        <meta
          name="description"
          content="Réservez votre table au Gourmet Parisien"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-800 mb-6">
            Réservez votre table
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Réservez dès maintenant pour garantir votre place dans notre
            restaurant
          </p>
        </div>
      </section>

      {/* Section Réservation */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Formulaire de réservation */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-amber-800 mb-6">
                  Formulaire de réservation
                </h2>

                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    ✅ Votre réservation a été envoyée avec succès ! Nous vous
                    confirmerons rapidement.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    ❌ Une erreur s'est produite. Veuillez nous appeler au +221
                    77 123 45 67
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-amber-700 font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-700 font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="77 123 45 67"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-amber-700 font-medium mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={getMinDate()}
                        max={getMaxDate()}
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-700 font-medium mb-2">
                        Heure *
                      </label>
                      <select
                        name="heure"
                        value={formData.heure}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        {generateTimeOptions()}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-amber-700 font-medium mb-2">
                      Nombre de personnes *
                    </label>
                    <select
                      name="personnes"
                      value={formData.personnes}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "personne" : "personnes"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-amber-700 font-medium mb-2">
                      Message spécial (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Allergies, anniversaire, demande particulière..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Traitement en cours...
                      </>
                    ) : (
                      "Confirmer la réservation"
                    )}
                  </button>
                </form>
              </div>

              {/* Informations pratiques */}
              <div>
                <div className="bg-amber-50 rounded-xl p-6 h-full">
                  <h3 className="text-2xl font-serif font-bold text-amber-800 mb-6">
                    Informations pratiques
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-3 rounded-lg mr-4">
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-800">Capacité</h4>
                        <p className="text-amber-600">
                          Jusqu'à 50 personnes en salle
                        </p>
                        <p className="text-amber-600">Terrasse de 20 places</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-amber-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 极 24 24"
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
                        <h4 className="font-bold text-amber-800">Horaires</h4>
                        <p className="text-amber-600">
                          Lundi - Vendredi: 11h30 - 14h30 / 19h - 22h30
                        </p>
                        <p className="text-amber-600">
                          Samedi - Dimanche: 12h - 15h / 19h - 23h
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-amber-100 p-3 rounded-lg mr-4">
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
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-800">Adresse</h4>
                        <p className="text-amber-600">23 Rue du Gourmet</p>
                        <p className="text-amber-600">75008 Paris, France</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-amber-100 p-3 rounded-lg mr-4">
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
                        <h4 className="font-bold text-amber-800">
                          Contact direct
                        </h4>
                        <p className="text-amber-600">+221 77 123 45 67</p>
                        <p className="text-amber-600">
                          reservation@gourmetparisien.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-amber-100 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-2">
                      ⚠️ Important
                    </h4>
                    <p className="text-sm text-amber-600">
                      Les réservations sont confirmées par email ou SMS dans les
                      24 heures. Pour les groupes de plus de 8 personnes, merci
                      de nous contacter directement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Une question spéciale ?
          </h2>
          <p className="text-amber-100 text-xl mb-10 max-w-2xl mx-auto">
            Pour les événements privés, anniversaires ou demandes particulières,
            contactez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-amber-100 text-amber-800 font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              📞 Nous appeler
            </button>
            <button className="bg-transparent hover:bg-amber-700 text-white border-2 border-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              ✉️ Nous écrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
