'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
} 

interface ContactFormProps {
  showHeader?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ showHeader = true }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simular envío (aquí integrarías tu API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form data:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const isFormValid = formData.name && formData.email && formData.phone && 
                      formData.date && formData.time && formData.message;

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {showHeader && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Agenda tu Cita
            </h1>
            <p className="text-gray-400 text-lg">
              Convierte tu idea en arte permanente
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-500 mx-auto"></div>
          </div>
        )}

        {/* Formulario */}
        <div className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-700 p-[2px] rounded-lg shadow-2xl shadow-yellow-500/20">
          <div className="bg-gray-900 rounded-lg p-8 md:p-12">
            {!isSubmitted ? (
              <div className="space-y-6">
                {/* Nombre */}
                <div className="group">
                  <label htmlFor="name" className="flex items-center gap-2 text-gray-300 mb-2 font-medium chicano-subtitle">
                    <User size={18} className="text-yellow-500" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors duration-300 placeholder-gray-600"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email y Teléfono */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="flex items-center gap-2 chicano-subtitle text-gray-300 mb-2 font-medium chicano-subtitle">
                      <Mail size={18} className="text-yellow-500" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors duration-300 placeholder-gray-600"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="flex items-center gap-2 text-gray-300 mb-2 font-medium chicano-subtitle">
                      <Phone size={18} className="text-yellow-500" />
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors duration-300 placeholder-gray-600"
                      placeholder="+52 123 456 7890"
                    />
                  </div>
                </div>

                {/* Fecha y Hora */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="date" className="flex items-center gap-2 text-gray-300 mb-2 font-medium chicano-subtitle">
                      <Calendar size={18} className="text-yellow-500" />
                      Fecha Preferida *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="time" className="flex items-center gap-2 text-gray-300 mb-2 font-medium chicano-subtitle">
                      <Clock size={18} className="text-yellow-500" />
                      Hora Preferida *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white chicano-subtitle focus:border-yellow-500 focus:outline-none transition-colors duration-300 cursor-pointer"
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option> 
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="group">
                  <label htmlFor="message" className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                    <MessageSquare size={18} className="text-yellow-500" />
                    Describe tu idea *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors duration-300 placeholder-gray-600 resize-none"
                    placeholder="Cuéntanos sobre el diseño que tienes en mente, estilo, tamaño, ubicación en el cuerpo..."
                  />
                </div>

                {/* Botón Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !isFormValid}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Solicitud
                    </>
                  )}
                </button>

                {/* Nota */}
                <p className="text-gray-500 text-sm text-center">
                  * Todos los campos son obligatorios. Te contactaremos en las próximas 24 horas para confirmar tu cita.
                </p>
              </div>
            ) : (
              // Mensaje de éxito
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full mb-6 animate-bounce">
                  <Check size={40} className="text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-gray-400 text-lg mb-2">
                  Gracias por contactarnos, <span className="text-yellow-500">{formData.name}</span>
                </p>
                <p className="text-gray-500">
                  Revisaremos tu solicitud y te contactaremos pronto al correo <span className="text-yellow-500">{formData.email}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info adicional */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <Clock className="text-yellow-500 mx-auto mb-3" size={32} />
            <h3 className="text-white font-bold mb-2">Horario</h3>
            <p className="text-gray-400 text-sm">Lun - Sáb: 08:00 - 20:00 hrs</p>
            <p className="text-gray-400 text-sm">Domingo: Cerrado</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <Phone className="text-yellow-500 mx-auto mb-3" size={32} />
            <h3 className="text-white font-bold mb-2">Teléfono</h3>
            <p className="text-gray-400 text-sm">+52 123 456 7890</p>
            <p className="text-gray-400 text-sm">WhatsApp disponible</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <Mail className="text-yellow-500 mx-auto mb-3" size={32} />
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">arturtatoo@gmail.com</p>
            <p className="text-gray-400 text-sm">Respuesta promedio 1 h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;