const jobColors = [
  // Orange & Blue pair
  { bg: 'bg-amber-500', border: 'border-amber-400', text: 'text-amber-400', shadow: 'shadow-amber-500/20', darkText: 'text-amber-600' },
  { bg: 'bg-sky-500', border: 'border-sky-400', text: 'text-sky-400', shadow: 'shadow-sky-500/20', darkText: 'text-sky-600' },
  
  // Purple & Yellow-Green pair
  { bg: 'bg-violet-500', border: 'border-violet-400', text: 'text-violet-400', shadow: 'shadow-violet-500/20', darkText: 'text-violet-600' },
  { bg: 'bg-lime-500', border: 'border-lime-400', text: 'text-lime-400', shadow: 'shadow-lime-500/20', darkText: 'text-lime-600' },
  
  // Red & Cyan pair
  { bg: 'bg-rose-500', border: 'border-rose-400', text: 'text-rose-400', shadow: 'shadow-rose-500/20', darkText: 'text-rose-600' },
  { bg: 'bg-cyan-500', border: 'border-cyan-400', text: 'text-cyan-400', shadow: 'shadow-cyan-500/20', darkText: 'text-cyan-600' },
  
  // Pink & Green pair
  { bg: 'bg-fuchsia-500', border: 'border-fuchsia-400', text: 'text-fuchsia-400', shadow: 'shadow-fuchsia-500/20', darkText: 'text-fuchsia-600' },
  { bg: 'bg-emerald-500', border: 'border-emerald-400', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20', darkText: 'text-emerald-600' },
  
  // Purple-Blue & Orange-Red pair
  { bg: 'bg-indigo-500', border: 'border-indigo-400', text: 'text-indigo-400', shadow: 'shadow-indigo-500/20', darkText: 'text-indigo-600' },
];

export function getJobColor(index: number) {
  return jobColors[index % jobColors.length]!;
}
