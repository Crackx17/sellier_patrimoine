// app/components/HoverRappel.tsx
"use client";

import React from "react";
import { Phone } from "lucide-react";

const HoverRappel: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-end">
      {/* Bouton flottant rond */}
      <div
        className="
          bg-blue-600 
          text-white 
          w-14 h-14 
          rounded-full 
          flex 
          items-center 
          justify-center 
          shadow-lg 
          cursor-pointer 
          transition-transform 
          hover:scale-105
        "
      >
        <Phone className="w-5 h-5" />
      </div>

      {/* Cartouche qui s'affiche au survol */}
      <div
        className="
          opacity-0 
          pointer-events-none 
          translate-y-4
          group-hover:opacity-100 
          group-hover:pointer-events-auto 
          group-hover:translate-y-0
          transition-all 
          duration-200 
          ease-out
          bg-white 
          border 
          border-gray-200 
          shadow-lg 
          rounded-md 
          w-72
          mt-2
          p-4
        "
      >
        <h2 className="text-base font-semibold mb-3">Besoin d'un rappel ?</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Demande de rappel envoyée !");
          }}
        >
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              className="
                w-full 
                border 
                border-gray-300 
                rounded 
                px-3 
                py-2 
                text-sm 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500
              "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              className="
                w-full 
                border 
                border-gray-300 
                rounded 
                px-3 
                py-2 
                text-sm 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500
              "
              required
            />
          </div>
          <button
            type="submit"
            className="
              w-full 
              bg-blue-600 
              text-white 
              text-sm 
              font-medium 
              px-4 
              py-2 
              rounded 
              hover:bg-blue-700 
              transition-colors
            "
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default HoverRappel;
