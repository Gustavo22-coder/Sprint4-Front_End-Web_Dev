"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (login(user, password)) {
      router.push("/dashboard");
    } else {
      setError("Usuário ou senha incorretos.");
    }
  }

  return (
    <main className="grid min-h-screen place-items-center px-5 py-12">
      <section className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-2xl">
        <Link href="/" className="text-2xl font-black text-sky-400">JOVI</Link>
        <h1 className="mt-8 text-3xl font-black">Acessar Study Mode</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">Entre para acessar a área privada com os conteúdos organizados.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold">
            Usuário
            <input value={user} onChange={(event) => setUser(event.target.value)} required className="rounded-xl border border-slate-700 bg-slate-950 p-3 outline-none transition focus:border-sky-500" placeholder="aluno" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Senha
            <input value={password} onChange={(event) => setPassword(event.target.value)} required type="password" className="rounded-xl border border-slate-700 bg-slate-950 p-3 outline-none transition focus:border-sky-500" placeholder="1234" />
          </label>
          {error && <p className="rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
          <button className="mt-2 rounded-xl bg-sky-500 p-3 font-black transition hover:bg-sky-400">Entrar</button>
        </form>

        <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
          <p><strong>Usuário:</strong> aluno</p>
          <p><strong>Senha:</strong> 1234</p>
        </div>
      </section>
    </main>
  );
}
