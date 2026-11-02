export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-500">
        {eyebrow}
      </h2>
      <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h3>
      {description && (
        <p className="mt-4 text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}
