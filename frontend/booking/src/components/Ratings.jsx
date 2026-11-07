const STATS = [
      { value: "12", label: "luxury suite"},
      { value: "4", label: "ratings"},
      { value: "12", label: "tree top suite"},
      ];
  
 function Ratings() {
    return(
<div className="bg-stone-100 py-16">
          <dl className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-6 text-center">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <dt className="text-4xl font-extrabold text-teal-700 md:text-5xl">{value}</dt>
                <dd className="mt-2 text-sm text-slate-500 md:text-lg">{label}</dd>
              </div>
            ))}
          </dl>
          </div>
    );
}

export default Ratings;