const jobColors = [
  // Red & Sky blue pair
  { bg: 'bg-rose-500', border: 'border-rose-400', text: 'text-rose-400', shadow: 'shadow-rose-500/20', darkText: 'text-rose-700' },
  { bg: 'bg-sky-500', border: 'border-sky-400', text: 'text-sky-400', shadow: 'shadow-sky-500/20', darkText: 'text-sky-700' },
  
  // Pink & Yellow-Green pair
  { bg: 'bg-pink-500', border: 'border-pink-400', text: 'text-pink-400', shadow: 'shadow-pink-500/20', darkText: 'text-pink-700' },
  { bg: 'bg-lime-500', border: 'border-lime-400', text: 'text-lime-400', shadow: 'shadow-lime-500/20', darkText: 'text-lime-700' },
  
  // Orange & Cyan pair
  { bg: 'bg-orange-500', border: 'border-orange-400', text: 'text-orange-400', shadow: 'shadow-orange-500/20', darkText: 'text-orange-700' },
  { bg: 'bg-cyan-500', border: 'border-cyan-400', text: 'text-cyan-400', shadow: 'shadow-cyan-500/20', darkText: 'text-cyan-700' },
  
  // Purple & Green pair
  { bg: 'bg-violet-500', border: 'border-violet-400', text: 'text-violet-400', shadow: 'shadow-violet-500/20', darkText: 'text-violet-700' },
  { bg: 'bg-emerald-500', border: 'border-emerald-400', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20', darkText: 'text-emerald-700' },
  
  // Purple-Blue going into Orange
  { bg: 'bg-indigo-500', border: 'border-indigo-400', text: 'text-indigo-400', shadow: 'shadow-indigo-500/20', darkText: 'text-indigo-700' },
];

export function getJobColor(index: number) {
  return jobColors[index % jobColors.length]!;
}
