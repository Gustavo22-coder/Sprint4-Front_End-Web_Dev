"use client";

import { useMemo, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useConteudos } from "@/hooks/useConteudos";

function DashboardContent() {
  const [search, setSearch] = useState("");
  const { conteudos, loading, error } = useConteudos();

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return conteudos;
    return conteudos.filter((item) =>
      `${item.materia} ${item.titulo} ${item.tipo}`.toLowerCase().includes(term)
    );
  }, [conteudos, search]);

  const total = conteudos.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <>
      <Header />
      <main className="mx-auto min-h-[calc(100vh-145px)] max-w-6xl px-5 py-14">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black tracking-widest text-sky-400">ÁREA PRIVADA</p>
            <h1 className="mt-2 text-3xl font-black sm:text-4xl">Meus conteúdos</h1>
            <p className="mt-3 text-slate-400">Dados consumidos da API própria do projeto.</p>
          </div>
          <input value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Pesquisar conteúdos" placeholder="Pesquisar matéria..." className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-sky-500 md:max-w-sm" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Matérias</p>
            <strong className="mt-2 block text-3xl text-sky-400">{conteudos.length}</strong>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Registros organizados</p>
            <strong className="mt-2 block text-3xl text-sky-400">{total}</strong>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Resultados da busca</p>
            <strong className="mt-2 block text-3xl text-sky-400">{filtered.length}</strong>
          </div>
        </div>

        {loading && <p className="mt-12 text-slate-400">Carregando conteúdos...</p>}
        {error && <p className="mt-12 rounded-xl bg-red-500/10 p-4 text-red-300">{error}</p>}

        {!loading && !error && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-sky-500">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-bold text-sky-300">{item.materia}</span>
                  <span className="text-sm text-slate-500">{item.quantidade} itens</span>
                </div>
                <h2 className="mt-5 text-xl font-bold">{item.titulo}</h2>
                <p className="mt-2 text-sm text-slate-400">{item.tipo}</p>
              </article>
            ))}
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="mt-12 text-center text-slate-400">Nenhum conteúdo encontrado.</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
