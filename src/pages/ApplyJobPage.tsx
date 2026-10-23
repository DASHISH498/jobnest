import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Upload,
  CheckCircle,
} from "lucide-react";
import { jobs } from "../data/jobs";
import {
  submitApplication,
  hasApplied,
  type NewJobApplication,
} from "../utils/applications";

const initialForm: NewJobApplication = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  currentCompany: "",
  experience: "",
  currentCTC: "",
  expectedCTC: "",
  linkedIn: "",
  portfolio: "",
  coverLetter: "",
  resumeName: "",
};

const inputClass =
  "w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-cyan-500";

export default function ApplyJobPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((item) => item.id === Number(id));

  const [form, setForm] = useState<NewJobApplication>(initialForm);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!job) {
    return (
      <section className="flex h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Job Not Found</h1>
          <Link
            to="/jobs"
            className="mt-5 inline-block text-cyan-400 hover:underline"
          >
            Browse all jobs
          </Link>
        </div>
      </section>
    );
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setForm((previous) => ({
        ...previous,
        resumeName: file.name,
      }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!confirmed) {
      setError("Please confirm that your information is correct.");
      return;
    }

    if (hasApplied(job.id, form.email)) {
      setError("You have already applied for this job with this email.");
      return;
    }

    setSubmitting(true);

    try {
      submitApplication(job, form);
      navigate("/application-success");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your application. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="mx-auto flex h-full max-w-4xl flex-col px-4 py-4 sm:px-6 sm:py-6">
        <Link
          to={`/jobs/${job.id}`}
          className="mb-4 inline-flex shrink-0 items-center gap-2 self-start text-zinc-400 transition hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to job details
        </Link>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          {/* Fixed job information header */}
          <div className="shrink-0 border-b border-zinc-800 p-5 sm:p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <BriefcaseBusiness size={22} />
            </div>

            <p className="text-sm font-medium text-cyan-400">
              Job Application
            </p>

            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
              Apply for {job.title}
            </h1>

            <p className="mt-2 text-zinc-400">{job.company}</p>
            <p className="mt-1 text-sm text-zinc-500">{job.location}</p>
          </div>

          {/* Only this form area scrolls */}
          <form
            onSubmit={handleSubmit}
            className="min-h-0 flex-1 space-y-8 overflow-y-auto overscroll-contain p-5 sm:p-8"
          >
            <div>
              <h2 className="text-xl font-semibold">
                Personal Information
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Enter your contact details.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter first name"
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter last name"
                    autoComplete="family-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8">
              <h2 className="text-xl font-semibold">
                Professional Details
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Tell the employer about your experience.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="currentCompany"
                    className="mb-2 block text-sm"
                  >
                    Current Company
                  </label>
                  <input
                    id="currentCompany"
                    name="currentCompany"
                    value={form.currentCompany}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="mb-2 block text-sm">
                    Total Experience
                  </label>
                  <input
                    id="experience"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. 6 years"
                  />
                </div>

                <div>
                  <label htmlFor="currentCTC" className="mb-2 block text-sm">
                    Current CTC
                  </label>
                  <input
                    id="currentCTC"
                    name="currentCTC"
                    value={form.currentCTC}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. 6.5 LPA"
                  />
                </div>

                <div>
                  <label htmlFor="expectedCTC" className="mb-2 block text-sm">
                    Expected CTC
                  </label>
                  <input
                    id="expectedCTC"
                    name="expectedCTC"
                    value={form.expectedCTC}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. 10 LPA"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="linkedIn" className="mb-2 block text-sm">
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedIn"
                    name="linkedIn"
                    type="url"
                    value={form.linkedIn}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="portfolio" className="mb-2 block text-sm">
                    Portfolio Website
                  </label>
                  <input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={form.portfolio}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="coverLetter" className="mb-2 block text-sm">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={form.coverLetter}
                    onChange={handleChange}
                    rows={5}
                    className={inputClass}
                    placeholder="Tell the employer why you're a good fit..."
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8">
              <h2 className="text-xl font-semibold">Resume</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Select your resume file. This demo saves only the filename.
              </p>

              <label
                htmlFor="resume"
                className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-950 p-6 text-center transition hover:border-cyan-500"
              >
                <Upload className="mb-3 text-cyan-400" size={28} />
                <span className="font-medium">
                  {form.resumeName || "Choose your resume"}
                </span>
                <span className="mt-1 text-sm text-zinc-500">
                  PDF or DOC/DOCX
                </span>
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="sr-only"
                />
              </label>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(event) => {
                    setConfirmed(event.target.checked);
                    setError("");
                  }}
                  className="mt-1 accent-cyan-500"
                />
                <span>
                  I confirm that the information provided is correct.
                </span>
              </label>
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-zinc-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <CheckCircle size={19} />
              {submitting ? "Submitting..." : "Submit Application"}
            </button>

            <p className="text-center text-xs text-zinc-500">
              Your application is saved locally in this browser demo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}