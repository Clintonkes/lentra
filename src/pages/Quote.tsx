import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { FormError, Sending } from "@/components/FormStatus";
import { serviceIcons } from "@/components/icons";
import { pageImages } from "@/config/images";
import { services, site } from "@/config/site";
import { createBooking, wakeBackend } from "@/lib/api";

const propertySizes = [
  "Small (under 1/4 acre)",
  "Medium (1/4 to 1/2 acre)",
  "Large (1/2 to 1 acre)",
  "Extra large (over 1 acre)",
  "Commercial property",
];
const frequencies = ["One time", "Weekly", "Every other week", "Monthly", "Seasonal"];
const times = ["Morning", "Afternoon", "Any time"];

const empty = {
  service: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  lawn_size: "",
  frequency: "",
  preferred_date: "",
  preferred_time: "",
  notes: "",
};

function today() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

export default function Quote() {
  const [params] = useSearchParams();
  const preselected = services.find((s) => s.slug === params.get("service"))?.title ?? "";
  const [form, setForm] = useState({ ...empty, service: preselected });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  useEffect(wakeBackend, []);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.service) {
      setError("Please choose the service you are interested in.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const booking = await createBooking({
        service: form.service,
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        // Optional fields go out as undefined, not "": the API rejects an
        // empty string for a date.
        lawn_size: form.lawn_size || undefined,
        frequency: form.frequency || undefined,
        preferred_date: form.preferred_date || undefined,
        preferred_time: form.preferred_time || undefined,
        notes: form.notes.trim() || undefined,
      });
      setReference(booking.reference);
      setForm(empty);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or call us.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Free quote"
        title="Get your free quote"
        subtitle="Tell us about your property and we will send a custom estimate within one business day. No obligation, ever."
        image={pageImages.quote.hero}
      />

      <section className="section">
        <div className="container-max grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {reference ? (
              <div className="card p-8 text-center md:p-14">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-evergreen-50">
                  <CheckCircle2 className="h-10 w-10 text-evergreen-600" />
                </span>
                <h2 className="mt-6 text-3xl font-bold">Request received</h2>
                <p className="mx-auto mt-4 max-w-lg leading-relaxed text-sand-700">
                  Thank you for choosing {site.name}. We have emailed you a confirmation and will be in touch within one business day with your estimate.
                </p>
                <p className="mx-auto mt-8 inline-block rounded-2xl bg-sand-100 px-6 py-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sand-600">Your reference</span>
                  <span className="mt-1 block font-display text-2xl font-bold tracking-wider text-evergreen-950">{reference}</span>
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link to="/" className="btn-dark">
                    Back to home <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button type="button" onClick={() => setReference("")} className="btn-outline">
                    Request another quote
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="card space-y-8 p-6 md:p-10">
                <fieldset>
                  <legend className="font-display text-xl font-semibold text-evergreen-950">
                    1. Which service do you need? <span className="text-clay-600">*</span>
                  </legend>
                  <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.icon];
                      const active = form.service === s.title;
                      return (
                        <button
                          key={s.slug}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setForm((f) => ({ ...f, service: s.title }))}
                          className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition ${
                            active
                              ? "border-evergreen-800 bg-evergreen-900 text-white shadow-soft"
                              : "border-sand-200 bg-sand-50 text-evergreen-950 hover:border-evergreen-600"
                          }`}
                        >
                          <Icon className={`h-6 w-6 ${active ? "text-clay-300" : "text-evergreen-700"}`} />
                          <span className="text-sm font-semibold leading-tight">{s.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-display text-xl font-semibold text-evergreen-950">2. Your details</legend>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="q-name" className="label">Full name <span className="text-clay-600">*</span></label>
                      <input id="q-name" name="name" required autoComplete="name" value={form.name} onChange={update} className="input" placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label htmlFor="q-phone" className="label">Phone <span className="text-clay-600">*</span></label>
                      <input id="q-phone" name="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={update} className="input" placeholder="(210) 555 0123" />
                    </div>
                    <div>
                      <label htmlFor="q-email" className="label">Email <span className="text-clay-600">*</span></label>
                      <input id="q-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} className="input" placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label htmlFor="q-address" className="label">Property address <span className="text-clay-600">*</span></label>
                      <input id="q-address" name="address" required autoComplete="street-address" value={form.address} onChange={update} className="input" placeholder="123 Main St, San Antonio, TX" />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-display text-xl font-semibold text-evergreen-950">3. Property and timing</legend>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="q-size" className="label">Property size</label>
                      <select id="q-size" name="lawn_size" value={form.lawn_size} onChange={update} className="input">
                        <option value="">Select a size</option>
                        {propertySizes.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="q-frequency" className="label">How often</label>
                      <select id="q-frequency" name="frequency" value={form.frequency} onChange={update} className="input">
                        <option value="">Select a frequency</option>
                        {frequencies.map((f) => <option key={f}>{f}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="q-date" className="label">Preferred start date</label>
                      <input id="q-date" name="preferred_date" type="date" min={today()} value={form.preferred_date} onChange={update} className="input" />
                    </div>
                    <div>
                      <label htmlFor="q-time" className="label">Preferred time</label>
                      <select id="q-time" name="preferred_time" value={form.preferred_time} onChange={update} className="input">
                        <option value="">Select a time</option>
                        {times.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="q-notes" className="label">Anything else we should know?</label>
                      <textarea id="q-notes" name="notes" rows={4} value={form.notes} onChange={update} className="input resize-y" placeholder="Gate codes, pets, problem areas or questions about your lawn" />
                    </div>
                  </div>
                </fieldset>

                <FormError message={error} />

                <button type="submit" disabled={sending} className="btn-primary w-full py-4 text-base">
                  {sending ? <Sending label="Sending your request" /> : <>Get My Free Quote <ArrowRight className="h-5 w-5" /></>}
                </button>
                <p className="flex items-center justify-center gap-2 text-center text-xs text-sand-600">
                  <ShieldCheck className="h-4 w-4 text-evergreen-600" /> Your details are only used to prepare your quote.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-evergreen-900 p-7 text-white">
              <h3 className="text-xl font-bold text-white">Why request a quote?</h3>
              <ul className="mt-5 space-y-3 text-sm text-evergreen-50/90">
                {["Free, no obligation estimate", "Tailored to your property", "Reply within one business day", "No hidden fees or surprises", "Flexible scheduling"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-clay-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-clay-50 p-7">
              <h3 className="text-xl font-bold">Prefer to talk?</h3>
              <a href={`tel:${site.phoneRaw}`} className="mt-4 flex items-center gap-3 font-display text-xl font-bold text-clay-700 hover:text-clay-800">
                <Phone className="h-5 w-5" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-3 text-sm text-sand-800 hover:text-clay-700">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
              <p className="mt-4 flex items-center gap-3 border-t border-clay-200 pt-4 text-sm text-sand-700">
                <Clock className="h-4 w-4 shrink-0" /> {site.hoursShort}
              </p>
            </div>
            <div className="card p-7">
              <h3 className="text-lg font-bold">Areas we serve</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.serviceAreas.map((a) => (
                  <span key={a} className="rounded-full bg-evergreen-50 px-3 py-1 text-xs font-medium text-evergreen-800">{a}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
