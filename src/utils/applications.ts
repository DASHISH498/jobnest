
import type { Job } from "../types/job";

const STORAGE_KEY = "jobnest-applications";

export interface JobApplication {
  id: string;
  jobId: number;
  jobTitle: string;
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentCompany: string;
  experience: string;
  currentCTC: string;
  expectedCTC: string;
  linkedIn: string;
  portfolio: string;
  coverLetter: string;
  resumeName: string;
  status: "Submitted" | "Under Review" | "Shortlisted" | "Rejected";
  appliedAt: string;
}

export type NewJobApplication = Omit<
  JobApplication,
  "id" | "jobId" | "jobTitle" | "company" | "status" | "appliedAt"
>;

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getApplications(): JobApplication[] {
  if (!isBrowser()) return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed: unknown = JSON.parse(stored);
    return Array.isArray(parsed) ? (parsed as JobApplication[]) : [];
  } catch {
    return [];
  }
}

function saveApplications(applications: JobApplication[]): void {
  if (!isBrowser()) return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}

export function hasApplied(jobId: number, email: string): boolean {
  const normalizedEmail = email.trim().toLowerCase();

  return getApplications().some(
    (application) =>
      application.jobId === jobId &&
      application.email.toLowerCase() === normalizedEmail,
  );
}

export function submitApplication(
  job: Job,
  formData: NewJobApplication,
): JobApplication {
  const applications = getApplications();
  const email = formData.email.trim().toLowerCase();

  const duplicate = applications.some(
    (application) =>
      application.jobId === job.id &&
      application.email.toLowerCase() === email,
  );

  if (duplicate) {
    throw new Error("You have already applied for this job with this email.");
  }

  const application: JobApplication = {
    ...formData,
    email,
    id: `${Date.now()}-${job.id}`,
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    status: "Submitted",
    appliedAt: new Date().toISOString(),
  };

  saveApplications([application, ...applications]);

  return application;
}
