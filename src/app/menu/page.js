// pages/menu.js
"use client";
import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("tout");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Données des plats par catégorie
  const menuData = {
    entrees: [
      {
        name: "Beignet",
        description: "Beignet chaud et moelleux, spécialité maison",
        price: "1000 FCFA",
        image: "/images/beignet.jpg",
        category: "Entrée",
        popular: false,
      },
      {
        name: "Nugget de Poulet",
        description: "Nuggets de poulet croustillants avec sauce maison",
        price: "1500 FCFA",
        image: "/images/nugget.jpg",
        category: "Entrée",
        popular: true,
      },
      {
        name: "Soupe du Jour",
        description: "Soupe maison préparée avec des légumes frais",
        price: "1200 FCFA",
        image: "/images/soupe.jpg",
        category: "Entrée",
        popular: false,
      },
      {
        name: "Salade Fraîche",
        description: "Salade mixte avec vinaigrette maison",
        price: "2000 FCFA",
        image: "/images/salade.jpg",
        category: "Entrée",
        popular: false,
      },
    ],
    plats: [
      {
        name: "Burger Gourmet",
        description:
          "Burger artisanal avec fromage affiné et légumes croquants",
        price: "3500 FCFA",
        image: "/images/burger.jpg",
        category: "Plat Principal",
        popular: true,
      },
      {
        name: "Pizza Margherita",
        description: "Pizza traditionnelle à la mozzarella et basilic frais",
        price: "4000 FCFA",
        image: "/images/pizza.jpg",
        category: "Plat Principal",
        popular: true,
      },
      {
        name: "Pâtes Bolognaise",
        description: "Pâtes fraîches avec sauce bolognaise maison",
        price: "3000 FCFA",
        image: "/images/pâte.jpg",
        category: "Plat Principal",
        popular: false,
      },
      {
        name: "Riz Sauté",
        description: "Riz parfumé sauté aux légumes de saison",
        price: "2500 FCFA",
        image: "/images/riz.jpg",
        category: "Plat Principal",
        popular: false,
      },
      {
        name: "Poisson Grillé",
        description: "Poisson frais du jour grillé aux herbes",
        price: "4500 FCFA",
        image: "/images/poisson.jpg",
        category: "Plat Principal",
        popular: true,
      },
      {
        name: "Frites Maison",
        description: "Frites croustillantes coupées et préparées maison",
        price: "1200 FCFA",
        image: "/images/frites.jpg",
        category: "Plat Principal",
        popular: false,
      },
    ],
    desserts: [
      {
        name: "Gâteau au Chocolat",
        description: "Moelleux au chocolat noir avec coulis de fruits rouges",
        price: "1500 FCFA",
        image: "/images/gâteau.jpg",
        category: "Dessert",
        popular: true,
      },
      {
        name: "Crêpe Sucrée",
        description: "Crêpe fine avec garniture au choix",
        price: "1200 FCFA",
        image: "/images/crêpe.jpg",
        category: "Dessert",
        popular: false,
      },
      {
        name: "Tarte aux Fruits",
        description: "Tarte saisonnière aux fruits frais",
        price: "1800 FCFA",
        image: "/images/tarte.jpg",
        category: "Dessert",
        popular: false,
      },
      {
        name: "Yaourt Nature",
        description: "Yaourt artisanal avec miel et fruits",
        price: "800 FCFA",
        image: "/images/yaourt.jpg",
        category: "Dessert",
        popular: false,
      },
    ],
    boissons: [
      {
        name: "Jus Frais",
        description: "Jus de fruits pressés du jour",
        price: "1000 FCFA",
        image: "/images/jus.jpg",
        category: "Boisson",
        popular: true,
      },
      {
        name: "Smoothie aux Fruits",
        description: "Smoothie onctueux aux fruits de saison",
        price: "1500 FCFA",
        image: "/images/smoothie.jpg",
        category: "Boisson",
        popular: false,
      },
      {
        name: "Café",
        description: "Café expresso ou café au lait",
        price: "800 FCFA",
        image: "/images/café.jpg",
        category: "Boisson",
        popular: true,
      },
      {
        name: "Soda",
        description: "Boissons gazeuses diverses",
        price: "700 FCFA",
        image: "/images/soda.jpg",
        category: "Boisson",
        popular: false,
      },
    ],
  };

  // Obtenir tous les plats pour la catégorie "tout"
  const getAllItems = () => {
    return [
      ...menuData.entrees,
      ...menuData.plats,
      ...menuData.desserts,
      ...menuData.boissons,
    ];
  };

  // Obtenir les items selon la catégorie active
  const getCurrentItems = () => {
    if (activeCategory === "tout") {
      return getAllItems();
    }
    return menuData[activeCategory];
  };

  // Fonction de recherche
  const getFilteredItems = () => {
    const items = getCurrentItems();
    if (!searchTerm) return items;

    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Fonction de tri
  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      let aValue, bValue;

      if (sortBy === "price") {
        aValue = parseInt(a.price.replace(/\D/g, ""));
        bValue = parseInt(b.price.replace(/\D/g, ""));
      } else {
        aValue = a[sortBy].toLowerCase();
        bValue = b[sortBy].toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  };

  // Fonction pour ajouter au panier
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Fonction pour supprimer du panier
  const removeFromCart = (itemName) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === itemName
      );
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.name === itemName
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.name !== itemName);
      }
    });
  };

  // Fonction pour supprimer complètement un item du panier
  const removeItemCompletely = (itemName) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.name !== itemName)
    );
  };

  // Calculer le total du panier
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + parseInt(item.price.replace(/\D/g, "")) * item.quantity;
    }, 0);
  };

  // Obtenir le nombre total d'articles
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Gérer le clic sur le bouton paiement du layout
  const handlePaymentClick = useCallback(() => {
    if (cart.length > 0) {
      setShowPayment(true);
    } else {
      alert("Votre panier est vide !");
    }
  }, [cart]);

  // Connecter le bouton paiement du layout
  useEffect(() => {
    const handlePaymentButtonClick = () => {
      handlePaymentClick();
    };

    // Exemple : ajouter l'événement sur un bouton
    const btn = document.getElementById("payment-button");
    if (btn) btn.addEventListener("click", handlePaymentButtonClick);

    // Nettoyage à la fin
    return () => {
      if (btn) btn.removeEventListener("click", handlePaymentButtonClick);
    };
  }, [cart, handlePaymentClick]);

  // Fonction de confirmation de commande simplifiée
  const submitOrder = async (customerInfo) => {
    setIsSubmitting(true);

    try {
      // Vérifications des informations requises
      if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
      }

      if (cart.length === 0) {
        alert("Votre panier est vide.");
        return;
      }

      // Simulation d'envoi (délai de 2 secondes)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Réinitialiser le panier et fermer les modales
      setCart([]);
      setShowPayment(false);

      // Message de confirmation
      alert(
        "🎉 La commande a bien été envoyée !\n\n" +
          "Nous vous contacterons rapidement pour confirmer votre commande.\n\n" +
          "Merci de votre confiance ! 😊"
      );
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>Menu - Le Gourmet Parisien</title>
        <meta
          name="description"
          content="Découvrez notre menu gastronomique avec des plats authentiques"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-800 mb-6">
            Notre Menu
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-8">
            Découvrez notre sélection de plats préparés avec passion et des
            ingrédients frais sélectionnés avec soin
          </p>

          {/* Barre de recherche */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un plat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-amber-300 focus:border-amber-500 focus:outline-none text-gray-700"
              />
              <svg
                className="absolute left-4 top-3.5 w-5 h-5 text-amber-500"
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
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        {/* Système de tri et filtres */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-serif font-bold text-amber-800">
                Filtres :
              </h3>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                {getFilteredItems().length} plat
                {getFilteredItems().length > 1 ? "s" : ""} trouvé
                {getFilteredItems().length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <label className="text-amber-700 font-medium whitespace-nowrap">
                  Trier par:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[120px]"
                >
                  <option value="name">Nom</option>
                  <option value="price">Prix</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-amber-700 font-medium whitespace-nowrap">
                  Ordre:
                </label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[120px]"
                >
                  <option value="asc">Croissant</option>
                  <option value="desc">Décroissant</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton panier flottant */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setShowCart(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <div className="relative">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M6 19h9"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm">Panier</div>
                <div className="font-bold">
                  {getTotalPrice().toLocaleString()} FCFA
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Catégories de menu */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCategory("tout")}
            className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
              activeCategory === "tout"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
            }`}
          >
            Tout ({getAllItems().length})
          </button>
          <button
            onClick={() => setActiveCategory("entrees")}
            className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
              activeCategory === "entrees"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
            }`}
          >
            Entrées ({menuData.entrees.length})
          </button>
          <button
            onClick={() => setActiveCategory("plats")}
            className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
              activeCategory === "plats"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
            }`}
          >
            Plats ({menuData.plats.length})
          </button>
          <button
            onClick={() => setActiveCategory("desserts")}
            className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
              activeCategory === "desserts"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
            }`}
          >
            Desserts ({menuData.desserts.length})
          </button>
          <button
            onClick={() => setActiveCategory("boissons")}
            className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
              activeCategory === "boissons"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"
            }`}
          >
            Boissons ({menuData.boissons.length})
          </button>
        </div>

        {/* Liste des plats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {sortItems(getFilteredItems()).map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 group"
            >
              <div className="relative">
                <div className="relative h-48">
                  <Image
                    src={item.image || "/images/placeholder-food.jpg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>

                  {/* Badge populaire */}
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      🔥 Populaire
                    </div>
                  )}

                  {/* Catégorie */}
                  <div className="absolute top-3 right-3 bg-white bg-opacity-90 text-amber-700 px-2 py-1 rounded-md text-xs font-medium">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-bold text-amber-800 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-amber-600 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun résultat de recherche */}
        {getFilteredItems().length === 0 && (
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
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-amber-800 mb-2">
              Aucun plat trouvé
            </h3>
            <p className="text-amber-600">
              Essayez de modifier vos critères de recherche ou de filtre
            </p>
          </div>
        )}
      </div>

      {/* Panier latéral */}
      {showCart && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300">
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-amber-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-serif font-bold text-amber-800">
                    Votre Panier
                  </h2>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
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
                </div>
                <p className="text-amber-600 mt-1">
                  {getTotalItems()} article{getTotalItems() > 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <svg
                      className="w-16 h-16 text-amber-200 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <p className="text-amber-600">Votre panier est vide</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => {
                      const itemPrice = parseInt(item.price.replace(/\D/g, ""));
                      const itemTotal = itemPrice * item.quantity;

                      return (
                        <div key={index} className="bg-amber-50 rounded-lg p-4">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden">
                              <Image
                                src={
                                  item.image || "/images/placeholder-food.jpg"
                                }
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-amber-800">
                                {item.name}
                              </h4>
                              <p className="text-amber-600 text-sm">
                                {item.price} × {item.quantity}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between items-center border-t border-amber-200 pt-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => removeFromCart(item.name)}
                                className="w-8 h-8 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center hover:bg-amber-300"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 12H4"
                                  />
                                </svg>
                              </button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => addToCart(item)}
                                className="w-8 h-8 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center hover:bg-amber-300"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-amber-700 font-bold">
                                {itemTotal.toLocaleString()} FCFA
                              </p>
                              <button
                                onClick={() => removeItemCompletely(item.name)}
                                className="text-red-500 text-sm hover:text-red-700 mt-1"
                              >
                                Supprimer
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-amber-200 bg-amber-50">
                  {/* Détails du total */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-amber-700">Sous-total:</span>
                      <span className="text-amber-700 font-medium">
                        {getTotalPrice().toLocaleString()} FCFA
                      </span>
                    </div>

                    {/* Message concernant les frais supplémentaires */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <p className="text-yellow-700 text-sm">
                          Ce total ne comprend pas les frais de livraison et de
                          service qui seront calculés lors de la commande.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Total final */}
                  <div className="flex justify-between items-center mb-4 pt-3 border-t border-amber-200">
                    <span className="text-lg font-bold text-amber-800">
                      Total:
                    </span>
                    <span className="text-xl font-bold text-amber-600">
                      {getTotalPrice().toLocaleString()} FCFA
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setShowCart(false);
                      setShowPayment(true);
                    }}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-md"
                  >
                    Commander maintenant
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Modal de paiement */}
      {showPayment && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => !isSubmitting && setShowPayment(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-serif font-bold text-amber-800 mb-6">
                Finalisez votre commande
              </h2>

              {/* Récapitulatif de la commande */}
              <div className="bg-amber-50 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-amber-800 mb-3">
                  Récapitulatif de votre commande
                </h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {cart.map((item, index) => {
                    const itemPrice = parseInt(item.price.replace(/\D/g, ""));
                    const itemTotal = itemPrice * item.quantity;

                    return (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="flex-1">
                          {item.quantity} × {item.name}
                        </span>
                        <span className="font-medium ml-4 whitespace-nowrap">
                          {itemTotal.toLocaleString()} FCFA
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-amber-200 pt-3 mt-3">
                  <div className="flex justify-between font-medium">
                    <span>Sous-total:</span>
                    <span>{getTotalPrice().toLocaleString()} FCFA</span>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 mt-2">
                    <div className="flex items-start gap-2">
                      <svg
                        className="w-3 h-3 text-yellow-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <p className="text-yellow-700 text-xs">
                        Les frais de livraison et de service seront calculés et
                        confirmés lors du traitement de votre commande.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de commande */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const customerInfo = {
                    name: formData.get("name"),
                    phone: formData.get("phone"),
                    address: formData.get("address"),
                    notes: formData.get("notes"),
                  };
                  submitOrder(customerInfo);
                }}
                className="space-y-4"
              >
                {/* Informations client */}
                <h3 className="font-bold text-amber-800 mb-2">
                  Vos informations
                </h3>

                <div>
                  <label className="block text-amber-700 font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50"
                    placeholder="Prénom et Nom"
                  />
                </div>

                <div>
                  <label className="block text-amber-700 font-medium mb-2">
                    Numéro de téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50"
                    placeholder="77 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-amber-700 font-medium mb-2">
                    Adresse de livraison *
                  </label>
                  <textarea
                    name="address"
                    rows={3}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50"
                    placeholder="Ville, Quartier, Rue, Numéro, Repères..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-amber-700 font-medium mb-2">
                    Instructions spéciales (optionnel)
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50"
                    placeholder="Allergies, heure de livraison préférée, instructions particulières..."
                  ></textarea>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-4 pt-6 border-t border-amber-200 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowPayment(false)}
                    disabled={isSubmitting}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        Traitement...
                      </>
                    ) : (
                      "Confirmer la commande"
                    )}
                  </button>
                </div>
              </form>

              {/* Informations de contact */}
              <div className="mt-4 pt-4 border-t border-amber-200">
                <p className="text-sm text-amber-600 text-center">
                  Vous préférez commander par téléphone ?<br />
                  Appelez-nous au <strong>+221 77 123 45 67</strong>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
