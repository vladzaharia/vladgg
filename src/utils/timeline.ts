interface TimelineJob {
  dateFrom: string;
  dateTo?: string;
}

export interface TimelineYear {
  year: number;
  position: number;
}

export interface TimelineJobPosition {
  startPosition: number;
  endPosition: number;
  durationInMonths: number;
  isShortTerm: boolean;
}

export function calculateTimelineYears(jobs: TimelineJob[]): TimelineYear[] {
  // Get min and max years from jobs
  const dates = jobs.flatMap(job => [
    new Date(job.dateFrom),
    job.dateTo ? new Date(job.dateTo) : new Date()
  ]);
  
  const minYear = Math.min(...dates.map(d => d.getFullYear()));
  const maxYear = Math.max(...dates.map(d => d.getFullYear()));
  
  // Create array of years in reverse order (newest first)
  return Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => ({
      year: maxYear - i,
      position: i / (maxYear - minYear)
    })
  );
}

export function calculateJobPosition(
  job: TimelineJob,
  minYear: number,
  maxYear: number
): TimelineJobPosition {
  const startDate = new Date(job.dateFrom);
  const endDate = job.dateTo ? new Date(job.dateTo) : new Date();
  
  const totalTimespan = (maxYear - minYear + 1) * 12; // Total months
  const startMonths = (startDate.getFullYear() - minYear) * 12 + startDate.getMonth();
  const endMonths = (endDate.getFullYear() - minYear) * 12 + endDate.getMonth();
  
  // Calculate base positions
  const startPosition = startMonths / totalTimespan;
  const endPosition = endMonths / totalTimespan;
  
  const durationInMonths = endMonths - startMonths;
  const isShortTerm = durationInMonths < 12;
  
  return {
    startPosition: 1 - endPosition, // Invert for newest at top
    endPosition: 1 - startPosition,
    durationInMonths,
    isShortTerm
  };
}

// Adjust positions to ensure minimum spacing
export function adjustPositionsWithMinSpacing(jobs: Array<{ position: TimelineJobPosition }>, minSpacing: number = 0.05): void {
  // Sort by start position (top to bottom)
  const sortedJobs = [...jobs].sort((a, b) => a.position.startPosition - b.position.startPosition);
  
  // First pass: ensure minimum spacing between jobs
  for (let i = 1; i < sortedJobs.length; i++) {
    const prevJob = sortedJobs[i - 1];
    const currentJob = sortedJobs[i];
    
    // Check if we need to add spacing between jobs
    const gap = currentJob.position.startPosition - prevJob.position.endPosition;
    if (gap < minSpacing) {
      const shift = minSpacing - gap;
      
      // Move all subsequent jobs down
      for (let j = i; j < sortedJobs.length; j++) {
        sortedJobs[j].position.startPosition += shift;
        sortedJobs[j].position.endPosition += shift;
      }
    }
  }

  // Second pass: normalize positions if they exceed 1
  const maxPosition = Math.max(...sortedJobs.map(j => j.position.endPosition));
  if (maxPosition > 1) {
    const scale = 1 / maxPosition;
    sortedJobs.forEach(job => {
      job.position.startPosition *= scale;
      job.position.endPosition *= scale;
    });
  }

  // Third pass: add padding at start and end
  const padding = 0.05;
  const firstStart = Math.min(...sortedJobs.map(j => j.position.startPosition));
  const lastEnd = Math.max(...sortedJobs.map(j => j.position.endPosition));
  const range = lastEnd - firstStart;
  const scale = (1 - 2 * padding) / range;
  
  sortedJobs.forEach(job => {
    job.position.startPosition = padding + (job.position.startPosition - firstStart) * scale;
    job.position.endPosition = padding + (job.position.endPosition - firstStart) * scale;
  });
}
