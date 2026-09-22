import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoCard } from "@/components/InfoCard";
import { SubjectCard } from "@/components/SubjectCard";

const features = [
  { icon: "01", title: "Organizar fotos", description: "Cadastre conteúdos acadêmicos e encontre tudo com mais rapidez." },
  { icon: "02", title: "Separar matérias", description: "Agrupe anotações, exercícios e resumos por disciplina." },
  { icon: "03", title: "Identificar conteúdos", description: "Use palavras-chave para reconhecer e classificar cada registro." },
];

const subjects = [
  { name: "Matemática", count: 8, description: "Anotações, fórmulas e exercícios organizados em um único lugar." },
  { name: "Física", count: 5, description: "Teoria, experiências e exercícios prontos para revisão." },
  { name: "Biologia", count: 6, description: "Registros de aulas e conteúdos separados por assunto." },
  { name: "História", count: 5, description: "Resumos e materiais organizados para facilitar os estudos." },
];

const team = [
  ["Enzo Franco Rodrigues da Silva", "Desenvolvimento"],
  ["Matheus Soares Amorim", "Entrega e revisão"],
  ["Renato Mendes Ruiz", "Responsividade e design"],
  ["Gustavo Roberto Martins", "Desenvolvimento"],
  ["Julia Moreira Rodrigues", "Conteúdo e copywriting"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="mb-4 text-sm font-black tracking-[0.2em] text-sky-400">MODO ESTUDO INTELIGENTE</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Organize seus <span className="text-sky-400">estudos</span> de forma simples.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400 md:mx-0">
              O JOVI Study Mode ajuda estudantes a organizar fotos e conteúdos acadêmicos, separando-os por matéria.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link href="/login" className="rounded-xl bg-sky-500 px-6 py-3 font-bold text-white transition hover:bg-sky-400">Experimentar solução</Link>
              <a href="#solucao" className="rounded-xl border border-slate-600 px-6 py-3 font-bold transition hover:border-sky-400 hover:text-sky-400">Conhecer projeto</a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border-4 border-slate-700 bg-slate-950 p-4 shadow-2xl shadow-sky-950">
            <div className="rounded-[2rem] bg-slate-900 p-6">
              <p className="font-black text-sky-400">JOVI Study Mode</p>
              <p className="mt-1 text-sm text-slate-500">Minhas matérias</p>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {subjects.map((subject) => (
                  <div key={subject.name} className="rounded-xl border border-slate-700 bg-slate-800 p-4">
                    <strong className="block text-sm">{subject.name}</strong>
                    <span className="text-xs text-slate-500">{subject.count} fotos</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solucao" className="border-y border-slate-800 bg-slate-950/40 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-black tracking-widest text-sky-400">A SOLUÇÃO</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">Menos tempo procurando. Mais tempo aprendendo.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((feature) => <InfoCard key={feature.title} {...feature} />)}
            </div>
          </div>
        </section>

        <section id="publico" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-black tracking-widest text-sky-400">PÚBLICO-ALVO</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Feito para estudantes que usam o celular como ferramenta de estudo.</h2>
            </div>
            <div className="rounded-2xl border-l-4 border-sky-500 bg-slate-900 p-7 text-lg leading-8 text-slate-300">
              A solução atende alunos que fotografam aulas, exercícios e anotações e precisam encontrar esses conteúdos com rapidez durante revisões e provas.
            </div>
          </div>
        </section>

        <section id="galeria" className="border-y border-slate-800 bg-slate-950/40 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-black tracking-widest text-sky-400">GALERIA</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Conteúdos separados por matéria</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {subjects.map((subject) => <SubjectCard key={subject.name} {...subject} />)}
            </div>
          </div>
        </section>

        <section id="equipe" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-black tracking-widest text-sky-400">NOSSA EQUIPE</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Quem construiu a solução</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map(([name, role]) => (
              <article key={name} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                <h3 className="font-bold">{name}</h3>
                <p className="mt-1 text-sm text-sky-400">{role}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="border-t border-slate-800 bg-slate-950/40 px-5 py-24 text-center">
          <p className="text-sm font-black tracking-widest text-sky-400">CONTATO</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Fale com a equipe</h2>
          <p className="mx-auto mb-9 mt-4 max-w-xl text-slate-400">Envie uma mensagem de demonstração sobre o projeto JOVI Study Mode.</p>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
