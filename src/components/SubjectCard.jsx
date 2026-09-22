const icons = {
  Matemática: "∑",
  Física: "⚛",
  Biologia: "DNA",
  História: "H",
};

export function SubjectCard({ name, count, description }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-sky-500">
      <div className="grid h-44 place-items-center bg-gradient-to-br from-blue-950 to-slate-900 text-4xl font-black text-sky-300">
        {icons[name] ?? name.charAt(0)}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-bold text-white">{name}</h3>
          <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-bold text-sky-300">
            {count} fotos
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </article>
  );
}
