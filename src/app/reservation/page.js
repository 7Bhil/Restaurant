"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import Link from "next/link";

export default function ReservationPage() {
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
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
      // Simulation d'envoi
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
      {/* Navigation Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-amber-600 to-amber-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
            Réservez votre table
          </h1>
          <p className="text-base sm:text-xl text-amber-100 max-w-3xl mx-auto px-2">
            Réservez dès maintenant pour garantir votre place dans notre
            restaurant
          </p>
          <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-2 text-amber-100">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Porto-Novo, Agbokou</span>
          </div>
        </div>
      </section>

      {/* Section Réservation */}
      <section className="py-6 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Formulaire de réservation */}
              <div className="p-5 sm:p-8 lg:p-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <h2 className="text-xl sm:text-3xl font-serif font-bold text-amber-800">
                    Formulaire de réservation
                  </h2>
                </div>

                {/* Messages de statut */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4 sm:mb-6 flex items-start text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Réservation confirmée !</p>
                      <p>Nous vous confirmerons rapidement par email ou SMS.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4 sm:mb-6 flex items-start text-sm sm:text-base">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Erreur lors de l'envoi</p>
                      <p>Veuillez nous appeler au 01 98 87 40 19</p>
                    </div>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Nom complet */}
                  <div>
                    <label className="block text-amber-800 font-medium mb-2 text-sm sm:text-base">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  {/* Email et Téléphone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-amber-800 font-medium mb-2 text-sm sm:text-base">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-800 font-medium mb-2 text-sm sm:text-base">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="01 98 87 40 19"
                      />
                    </div>
                  </div>

                  {/* Date, Heure et Personnes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-amber-800 font-medium mb-2 text-sm sm:text-base">
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
                        className="w-full px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-800 font-medium mb-2 text-sm sm:text-base">
                        Heure *
                      </label>
                      <select
                        name="heure"
                        value={formData.heure}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        {generateTimeOptions()}
                      </select>
                    </div>

                    <div>
                      <label className="block text-amber-800 font-medium mb-2 text-sm sm:text-base">
                        Personnes *
                      </label>
                      <select
                        name="personnes"
                        value={formData.personnes}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "personne" : "personnes"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-amber-800 font-medium mb-2 text-sm sm:text-base">
                      Message spécial (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                      placeholder="Allergies, anniversaire, demande particulière..."
                    ></textarea>
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 flex items-center justify-center transform hover:scale-[1.02] disabled:scale-100 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        {isMobile ? "En cours..." : "Traitement en cours..."}
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        {isMobile ? "Confirmer" : "Confirmer la réservation"}
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Informations pratiques */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-5 sm:p-8 lg:p-10 text-white">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold">
                    Informations pratiques
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Restaurant Info */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Restaurant Bihl$
                    </h4>
                    <div className="space-y-1 sm:space-y-2 text-amber-100 text-sm sm:text-base">
                      <p className="flex items-center">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        Agbokou Von "Le Prodige", Porto-Novo
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        01 98 87 40 19
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        7bhilal.chitou7@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Horaires d'ouverture
                    </h4>
                    <div className="space-y-1 text-amber-100 text-sm sm:text-base">
                      <p>Mardi - Dimanche</p>
                      <p>08h00 - 22h30</p>
                      <p className="opacity-80 mt-1 sm:mt-2 text-xs sm:text-sm">
                        Fermé le lundi
                      </p>
                    </div>
                  </div>

                  {/* Capacité */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Capacité d'accueil
                    </h4>
                    <div className="space-y-1 text-amber-100 text-sm sm:text-base">
                      <p>Salle principale: 50 personnes</p>
                      <p>Terrasse: 20 places</p>
                      <p className="opacity-80 mt-1 sm:mt-2 text-xs sm:text-sm">
                        Groupes +8 personnes: nous contacter
                      </p>
                    </div>
                  </div>

                  {/* Note importante */}
                  <div className="bg-amber-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-amber-400/30">
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 flex items-center">
                      ⚠️ Important
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                      Les réservations sont confirmées par email ou SMS dans les
                      24 heures. Pour les événements spéciaux, merci de nous
                      contacter directement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact Rapide */}
      <section className="py-10 sm:py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 sm:mb-6">
            Une question spéciale ?
          </h2>
          <p className="text-amber-100 text-sm sm:text-lg lg:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto">
            Pour les événements privés, anniversaires ou demandes particulières,
            contactez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link href="/contact">
              <button className="bg-white hover:bg-amber-100 text-amber-800 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-full text-xs sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Nous contacter
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
