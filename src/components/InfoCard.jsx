export function InfoCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500">
      <span className="mb-4 inline-grid size-11 place-items-center rounded-xl bg-sky-500/15 text-xl text-sky-300">
        {icon}
      </span>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="leading-7 text-slate-400">{description}</p>
    </article>
  );
}
