'use client'

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "./ui/button"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Mostrar el botón después de un pequeño scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "525564392520" // Número de WhatsApp
    const message = encodeURIComponent("Hola Artur Tatoo, quiero información sobre un tatuaje: ")//Mensaje predefinido
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Botón principal flotante */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip expandido */}
        {isExpanded && (
          <div className="animate-in slide-in-from-right-5 fade-in duration-300 bg-[#25D480] opacity-70 border-2 border-primary rounded-2xl shadow-2xl p-4 max-w-xs">
            <div className=" flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg">¡Siempre locos, Nunca Tristes mi banda!</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Agenda una cita por WhatsApp de forma rápida y sencilla
            </p>
            <Button onClick={handleWhatsAppClick} className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Abrir WhatsApp
            </Button>
          </div>
        )}

        {/* Botón flotante */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-8 w-8 transition-transform group-hover:scale-110" />

          {/* Pulso animado */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

          {/* Badge de notificación */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            1
          </span>
        </button>
      </div>
    </>
  )
}