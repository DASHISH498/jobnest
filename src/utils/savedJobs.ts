
import type { Job } from "../types/job";

const STORAGE_KEY = "jobnest-saved-jobs";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getSavedJobs(): Job[] {
  if (!isBrowser()) return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return [];

    const parsed: unknown = JSON.parse(stored);

    return Array.isArray(parsed) ? (parsed as Job[]) : [];
  } catch {
    return [];
  }
}

export function isJobSaved(jobId: number): boolean {
  return getSavedJobs().some((job) => job.id === jobId);
}

export function toggleSavedJob(job: Job): boolean {
  const savedJobs = getSavedJobs();
  const alreadySaved = savedJobs.some(
    (savedJob) => savedJob.id === job.id,
  );

  const updatedJobs = alreadySaved
    ? savedJobs.filter((savedJob) => savedJob.id !== job.id)
    : [job, ...savedJobs];

  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedJobs));
  }

  return !alreadySaved;
}
