"use client";

import { useEffect, useState } from "react";

export function useConteudos() {
  const [conteudos, setConteudos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch("/api/conteudos", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Não foi possível carregar os conteúdos.");

        const data = await response.json();
        setConteudos(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return { conteudos, loading, error };
}
