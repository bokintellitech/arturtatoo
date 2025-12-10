'use client'

import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  studioName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
}

const Footer: React.FC<FooterProps> = ({
  studioName = "Artur Tattoo Studio",
  phone = "+52 5564392520",
  email = "arturtatoo@gmail.com",
  address = "Panfilo Natera Mz6 Lt151, San Felipe de Jesús, (Zona Militar)",
  city = "G.A.M, CDMX, México"
}) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/people/Artur-tatoo-fabrica-de-chacales/100094391065466/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/josearturo.mercadoperez/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@ArturoMercado-dp5xg',
      color: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Galería', href: '#gallery' }
  ];

  return (
    <footer className="bg-black border-t-2 border-yellow-600/30">
      {/* Decorative top border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="chicano-title text-3xl font-bold text-white mb-4">
              {studioName}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arte permanente que cuenta tu historia. Más de 10 años transformando ideas en obras maestras sobre piel.
            </p>
            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-900 p-3 rounded-full border border-gray-800 ${social.color} transition-all duration-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30 group`}
                  aria-label={social.name}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-current transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4 relative inline-block">
              Enlaces Rápidos
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-600"></div>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-yellow-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4 relative inline-block">
              Contacto
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-600"></div>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 hover:text-yellow-500 transition-colors group">
                <Phone size={18} className="mt-1 flex-shrink-0 text-yellow-600 group-hover:text-yellow-500" />
                <a href={`tel:${phone}`} className="text-sm">
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-yellow-500 transition-colors group">
                <Mail size={18} className="mt-1 flex-shrink-0 text-yellow-600 group-hover:text-yellow-500" />
                <a href={`mailto:${email}`} className="text-sm break-all">
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-yellow-600" />
                <span className="text-sm">
                  {address}<br />
                  {city}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4 relative inline-block">
              Horario
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-600"></div>
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-1 flex-shrink-0 text-yellow-600" />
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-white mb-2">Lunes - Domingo</p>
                  <p>09:00 - 20:00 Hrs.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {currentYear} <span className="text-yellow-600 font-semibold">{studioName}</span>. Todos los derechos reservados.
          </p>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6 text-xs text-gray-600">
          PoweredBy <span className="text-red-500">@gangasrotogati</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;