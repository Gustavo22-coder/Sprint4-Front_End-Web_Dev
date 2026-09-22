import { NextResponse } from "next/server";

const conteudos = [
  {
    id: 1,
    materia: "Matemática",
    titulo: "Funções do segundo grau",
    tipo: "Exercícios",
    quantidade: 8,
  },
  {
    id: 2,
    materia: "Física",
    titulo: "Leis de Newton",
    tipo: "Anotações",
    quantidade: 5,
  },
  {
    id: 3,
    materia: "Biologia",
    titulo: "Genética e DNA",
    tipo: "Resumo",
    quantidade: 6,
  },
  {
    id: 4,
    materia: "História",
    titulo: "Revolução Industrial",
    tipo: "Material de aula",
    quantidade: 5,
  },
  {
    id: 5,
    materia: "Química",
    titulo: "Ligações químicas",
    tipo: "Exercícios",
    quantidade: 4,
  },
  {
    id: 6,
    materia: "Português",
    titulo: "Figuras de linguagem",
    tipo: "Resumo",
    quantidade: 7,
  },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 350));
  return NextResponse.json(conteudos);
}
