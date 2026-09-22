"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export function ProtectedRoute({ children }) {
  const { authenticated, checking } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!checking && !authenticated) router.replace("/login");
  }, [authenticated, checking, router]);

  if (checking || !authenticated) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#07101f] text-white">
        <p className="text-sm text-slate-300">Verificando acesso...</p>
      </main>
    );
  }

  return children;
}
