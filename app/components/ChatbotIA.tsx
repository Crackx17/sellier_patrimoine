// app/components/ChatbotIA.tsx
"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
}

const WEBHOOK_URL = "/api/webhook/proxy";

const ChatbotIA: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "bot", text: "Je suis votre assistant, que puis-je faire pour vous ?" }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!currentInput.trim()) return;

    // Ajoute le message de l'utilisateur
    const userMessage: ChatMessage = { sender: "user", text: currentInput };
    setMessages((prev) => [...prev, userMessage]);

    // Affiche l'indicateur de typing
    setIsTyping(true);
    const typingIndicator: ChatMessage = { sender: "bot", text: "..." };
    setMessages((prev) => [...prev, typingIndicator]);

    const payload = {
      type: "chatbot_callback",
      message: currentInput,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Erreur lors de l'envoi au webhook", response.statusText);
      } else {
        const rawData = await response.text();
        console.log("Réponse brute du webhook :", rawData);

        let data;
        try {
          data = JSON.parse(rawData);
        } catch (parseError) {
          console.error("Erreur lors du parsing JSON:", parseError);
          setMessages((prev) => prev.filter((msg) => msg.text !== "..."));
          setIsTyping(false);
          return;
        }
        console.log("Données parsées :", data);

        let botReplyText = "";
        if (Array.isArray(data)) {
          if (data.length > 0 && data[0].output) {
            botReplyText = data[0].output.trim();
          }
        } else if (data && data.output) {
          botReplyText = data.output.trim();
        }

        // Supprime l'indicateur de typing
        setMessages((prev) => prev.filter((msg) => msg.text !== "..."));

        if (botReplyText) {
          const botReply: ChatMessage = { sender: "bot", text: botReplyText };
          setMessages((prev) => [...prev, botReply]);
        } else {
          console.error("La réponse du webhook ne contient pas l'output attendu.", data);
        }
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi au webhook", error);
      setMessages((prev) => prev.filter((msg) => msg.text !== "..."));
    }
    setIsTyping(false);
    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Assistant Virtuel</h2>
      <div className="h-64 overflow-y-auto border border-gray-200 rounded p-4 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`px-4 py-2 rounded-lg ${
                msg.sender === "bot"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-blue-600 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Votre message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 focus:outline-none"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatbotIA;
