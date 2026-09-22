"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const { authenticated, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#081120]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="text-2xl font-black tracking-tight text-sky-400">
          JOVI
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-4 text-sm font-semibold text-slate-200">
          <Link href="/#solucao" className="transition hover:text-sky-400">Solução</Link>
          <Link href="/#publico" className="transition hover:text-sky-400">Público</Link>
          <Link href="/#galeria" className="transition hover:text-sky-400">Galeria</Link>
          <Link href="/#equipe" className="transition hover:text-sky-400">Equipe</Link>

          {authenticated ? (
            <>
              <Link href="/dashboard" className="rounded-lg bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-400">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="rounded-lg border border-slate-600 px-4 py-2 transition hover:border-sky-400 hover:text-sky-400">
                Sair
              </button>
            </>
          ) : (
            <Link href="/login" className="rounded-lg bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-400">
              Entrar
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
