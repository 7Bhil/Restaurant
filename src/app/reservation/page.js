"use client";
import { useState, useEffect } from "react";

// Configuration EmailJS - Remplacez par vos vraies clés
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "vJlY0vfJr-cdcghpr", // Votre clé publique EmailJS
  SERVICE_ID: "service_pwc4fcg", // ID de votre service email
  TEMPLATE_ID: "template_3nu7hx5", // ID de votre template
};

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
  const [emailJsLoaded, setEmailJsLoaded] = useState(false);

  // Charger EmailJS
  useEffect(() => {
    const loadEmailJS = () => {
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        setEmailJsLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.onload = () => {
        window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        setEmailJsLoaded(true);
      };
      document.head.appendChild(script);
    };

    loadEmailJS();
  }, []);

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

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
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

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 11; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 22 && minute === 30) break;
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

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.setMonth(today.getMonth() + 3));
    return maxDate.toISOString().split("T")[0];
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section - Amélioré pour mobile */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-800 mb-4 sm:mb-6 leading-tight">
            Réservez votre table
          </h1>
          <p className="text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto px-2">
            Réservez dès maintenant pour garantir votre place dans notre
            restaurant
          </p>
        </div>
      </section>

      {/* Section Réservation - Layout responsif amélioré */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Formulaire de réservation */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-800 mb-4 sm:mb-6">
                  Formulaire de réservation
                </h2>

                {/* Messages de statut - Responsifs */}
                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-3 rounded mb-4 sm:mb-6 text-sm sm:text-base">
                    ✅ Votre réservation a été envoyée avec succès ! Nous vous
                    confirmerons rapidement.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-3 rounded mb-4 sm:mb-6 text-sm sm:text-base">
                    ❌ Une erreur s'est produite. Veuillez nous appeler au +229
                    01 98 87 40 19 pour confirmer votre réservation.
                  </div>
                )}

                <div onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Champs de base - Stack sur mobile */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-amber-700 font-medium mb-2 text-sm sm:text-base">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-700 font-medium mb-2 text-sm sm:text-base">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-700 font-medium mb-2 text-sm sm:text-base">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="01 98 87 40 19"
                      />
                    </div>
                  </div>

                  {/* Date et heure - Responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-amber-700 font-medium mb-2 text-sm sm:text-base">
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
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-700 font-medium mb-2 text-sm sm:text-base">
                        Heure *
                      </label>
                      <select
                        name="heure"
                        value={formData.heure}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                      >
                        {generateTimeOptions()}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-amber-700 font-medium mb-2 text-sm sm:text-base">
                      Nombre de personnes *
                    </label>
                    <select
                      name="personnes"
                      value={formData.personnes}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "personne" : "personnes"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-amber-700 font-medium mb-2 text-sm sm:text-base">
                      Message spécial (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base resize-none"
                      placeholder="Allergies, anniversaire, demande particulière..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
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
                </div>
              </div>

              {/* Informations pratiques - Réorganisées pour mobile */}
              <div className="order-1 lg:order-2">
                <div className="bg-amber-50 rounded-xl p-4 sm:p-6 h-full">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-800 mb-4 sm:mb-6">
                    Informations pratiques
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    {/* Capacité */}
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600"
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
                        <h4 className="font-bold text-amber-800 text-sm sm:text-base">
                          Capacité
                        </h4>
                        <p className="text-amber-600 text-xs sm:text-sm">
                          Jusqu'à 50 personnes en salle
                        </p>
                        <p className="text-amber-600 text-xs sm:text-sm">
                          Terrasse de 20 places
                        </p>
                      </div>
                    </div>

                    {/* Horaires */}
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600"
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
                        <h4 className="font-bold text-amber-800 text-sm sm:text-base">
                          Horaires
                        </h4>
                        <p className="text-amber-600 text-xs sm:text-sm">
                          Lun - Ven: 11h30-14h30 / 19h-22h30
                        </p>
                        <p className="text-amber-600 text-xs sm:text-sm">
                          Sam - Dim: 12h-15h / 19h-23h
                        </p>
                      </div>
                    </div>

                    {/* Adresse */}
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600"
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
                        <h4 className="font-bold text-amber-800 text-sm sm:text-base">
                          Adresse
                        </h4>
                        <p className="text-amber-600 text-xs sm:text-sm">
                          Agbokou Von "Le Prodige"
                        </p>
                        <p className="text-amber-600 text-xs sm:text-sm">
                          Porto-Novo, Bénin
                        </p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600"
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
                        <h4 className="font-bold text-amber-800 text-sm sm:text-base">
                          Contact direct
                        </h4>
                        <p className="text-amber-600 text-xs sm:text-sm">
                          +229 01 98 87 40 19
                        </p>
                        <p className="text-amber-600 text-xs sm:text-sm break-all">
                          7bhilal.chitou7@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Note importante - Responsive */}
                  <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-amber-100 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-2 text-sm sm:text-base">
                      ⚠️ Important
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-600 leading-relaxed">
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

      {/* CTA Section - Améliorée pour mobile */}
      <section className="py-12 sm:py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6">
            Une question spéciale ?
          </h2>
          <p className="text-amber-100 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Pour les événements privés, anniversaires ou demandes particulières,
            contactez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button className="bg-white hover:bg-amber-100 text-amber-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              📞 Nous appeler
            </button>
            <button className="bg-transparent hover:bg-amber-700 text-white border-2 border-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition duration-300 transform hover:scale-105">
              ✉️ Nous écrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
