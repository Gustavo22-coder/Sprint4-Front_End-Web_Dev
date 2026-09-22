"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-2xl gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required aria-label="Nome" placeholder="Seu nome" className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none transition focus:border-sky-500" />
        <input required type="email" aria-label="E-mail" placeholder="Seu e-mail" className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none transition focus:border-sky-500" />
      </div>
      <textarea required rows="4" aria-label="Mensagem" placeholder="Sua mensagem" className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none transition focus:border-sky-500" />
      <button className="rounded-xl bg-sky-500 px-6 py-3 font-bold text-white transition hover:bg-sky-400">Enviar mensagem</button>
      {sent && <p className="text-center text-sm font-semibold text-emerald-400">Mensagem registrada para demonstração.</p>}
    </form>
  );
}
