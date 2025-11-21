// src/components/Reservas.tsx
"use client";
import React, { useState } from "react";

export default function Reservas() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const [sent, setSent] = useState<null | "ok" | "err">(null);

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Nombre y teléfono son obligatorios.");
      return;
    }

    await new Promise((r) => setTimeout(r, 700));
    setSent("ok");
    setForm({ name: "", phone: "", email: "", date: "", message: "" });
  };

  return (
    <section id="citas" className="py-20 bg-[#070707] text-white">
      <div className="container mx-auto max-w-xl px-6">
        <h3 className="text-4xl font-chicano text-center mb-10">Citas</h3>

        <form
          onSubmit={onSubmit}
          className="grid gap-6 bg-black/60 p-10 rounded-xl border border-white/5 shadow-lg"
        >
          {/** NAME */}
          <div className="relative group">
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="input-floating peer"
              required
            />
            <label className="label-floating">Nombre completo</label>
          </div>

          {/** PHONE */}
          <div className="relative group">
            <input
              type="text"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="input-floating peer"
              required
            />
            <label className="label-floating">Teléfono / WhatsApp</label>
          </div>

          {/** EMAIL */}
          <div className="relative group">
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="input-floating peer"
            />
            <label className="label-floating">Correo electrónico</label>
          </div>

          {/** DATE */}
          <div className="relative group">
            <input
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className="input-floating peer"
            />
            <label className="label-floating">Fecha tentativa</label>
          </div>

          {/** MESSAGE */}
          <div className="relative group">
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="input-floating peer"
            />
            <label className="label-floating">Idea o descripción</label>
          </div>

          <button className="button-primary mt-4">Enviar solicitud</button>

          {sent === "ok" && (
            <p className="text-center text-emerald-400">Solicitud enviada correctamente.</p>
          )}
        </form>
      </div>
    </section>
  );
}
