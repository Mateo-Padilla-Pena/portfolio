"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
} from "lucide-react";
import type { Personal } from "../types/portfolio";
import emailjs from "@emailjs/browser";

interface ContactProps {
  personal: Personal;
}

const Contact: React.FC<ContactProps> = ({ personal }) => {
  // Initialize EmailJS
  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form
  useEffect(() => {
    // Email validation
    if (formData.email.trim() !== "" && !isValidEmail(formData.email)) {
      setEmailError("Por favor ingresa un email válido");
    } else {
      setEmailError("");
    }

    const isValid =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "" &&
      isValidEmail(formData.email);
    setIsFormValid(isValid);
  }, [formData]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    // Check if environment variables are available
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.error("EmailJS environment variables are not configured");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">
          Hablemos de tu próximo <span className="text-cyan-400">proyecto</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-100">
              Conectemos
            </h3>
            <p className="text-slate-400 mb-8">
              Estoy siempre abierto a discutir nuevas oportunidades,
              colaboraciones o simplemente charlar sobre tecnología.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center space-x-3 text-slate-100 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{personal.email}</span>
              </a>

              <a
                href={`https://${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-100 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>{personal.github}</span>
              </a>

              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-100 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>{personal.linkedin}</span>
              </a>

              <div className="flex items-center space-x-3 text-slate-100">
                <Phone className="w-5 h-5 text-slate-400" />
                <span>{personal.phone}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-100">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-800 text-slate-100 rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-100">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 bg-slate-800 text-slate-100 rounded-lg border transition-colors focus:outline-none ${
                  emailError
                    ? "border-red-500 focus:border-red-400"
                    : "border-slate-600 focus:border-cyan-400"
                }`}
                placeholder="tu@email.com"
              />
              {emailError && (
                <p className="text-red-400 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-100">
                Mensaje *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-800 text-slate-100 rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>

            <button
              onClick={handleFormSubmit}
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                isFormValid && !isSubmitting
                  ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-400/25"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Success dialog */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 z-50 animate-slide-in">
            <CheckCircle className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">¡Mensaje enviado!</h4>
              <p className="text-sm">Te contactaré pronto.</p>
            </div>
          </div>
        )}

        {/* Error dialog */}
        {showError && (
          <div className="fixed top-4 right-4 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 z-50 animate-slide-in">
            <AlertCircle className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Error al enviar</h4>
              <p className="text-sm">Inténtalo de nuevo más tarde.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
