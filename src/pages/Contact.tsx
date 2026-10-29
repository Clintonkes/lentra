import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { FormError, Sending } from "@/components/FormStatus";
import { pageImages } from "@/config/images";
import { fullAddress, mapsEmbedUrl, mapsUrl, site } from "@/config/site";
import { createContact, wakeBackend } from "@/lib/api";

const methods = [
  { icon: Phone, title: "Call us", value: site.phone, href: `tel:${site.phoneRaw}`, note: site.hoursShort },
  { icon: Mail, title: "Email us", value: site.email, href: `mailto:${site.email}`, note: "We reply within one business day" },
  { icon: MapPin, title: "Visit us", value: fullAddress, href: mapsUrl, note: "Open in Google Maps" },
];

const empty = { name: "", phone: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(wakeBackend, []);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await createContact({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        subject: form.subject.trim() || undefined,
        message: form.message.trim(),
      });
      setSent(true);
      setForm(empty);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or call us.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your yard"
        subtitle="Questions, ideas or a project in mind? Reach out by phone, email or the form below."
        image={pageImages.contact.hero}
      />

      <section className="section">
        <div className="container-max">
          <div className="grid gap-5 md:grid-cols-3">
            {methods.map((m) => (
              <a
                key={m.title}
                href={m.href}
                target={m.icon === MapPin ? "_blank" : undefined}
                rel={m.icon === MapPin ? "noopener noreferrer" : undefined}
                className="card group p-7 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-evergreen-50 text-evergreen-700 transition group-hover:bg-clay-600 group-hover:text-white">
                  <m.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 break-words font-medium text-evergreen-950">{m.value}</p>
                <p className="mt-1 text-sm text-sand-600">{m.note}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="card p-6 md:p-10">
                {sent ? (
                  <div className="py-10 text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-evergreen-50">
                      <CheckCircle2 className="h-8 w-8 text-evergreen-600" />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold">Message sent</h2>
                    <p className="mx-auto mt-3 max-w-sm text-sand-700">Thanks for reaching out. We have emailed you a copy and will get back to you shortly.</p>
                    <button type="button" onClick={() => setSent(false)} className="btn-outline mt-8">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-bold">Send us a message</h2>
                      <p className="mt-2 text-sand-700">Whether it is a question about a service or advice for your lawn, we would love to hear from you.</p>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-name" className="label">Your name <span className="text-clay-600">*</span></label>
                        <input id="c-name" name="name" required autoComplete="name" value={form.name} onChange={update} className="input" placeholder="Jane Smith" />
                      </div>
                      <div>
                        <label htmlFor="c-phone" className="label">Phone</label>
                        <input id="c-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} className="input" placeholder="(210) 555 0123" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-email" className="label">Email <span className="text-clay-600">*</span></label>
                      <input id="c-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} className="input" placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label htmlFor="c-subject" className="label">Subject <span className="text-clay-600">*</span></label>
                      <input id="c-subject" name="subject" required value={form.subject} onChange={update} className="input" placeholder="How can we help?" />
                    </div>
                    <div>
                      <label htmlFor="c-message" className="label">Message <span className="text-clay-600">*</span></label>
                      <textarea id="c-message" name="message" rows={5} required value={form.message} onChange={update} className="input resize-y" placeholder="Write your message here" />
                    </div>
                    <FormError message={error} />
                    <button type="submit" disabled={sending} className="btn-primary w-full py-4 text-base">
                      {sending ? <Sending label="Sending" /> : <>Send Message <Send className="h-5 w-5" /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-2">
              <div className="card p-7">
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <Clock className="h-5 w-5 text-clay-600" /> Business hours
                </h3>
                <ul className="mt-5 divide-y divide-sand-200 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between py-2.5">
                      <span className="font-medium text-evergreen-950">{h.day}</span>
                      <span className={h.time === "Closed" ? "font-medium text-clay-700" : "text-sand-700"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-3xl bg-sand-200 shadow-soft">
                <iframe title="Lentra LLC location" src={mapsEmbedUrl} className="h-64 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="rounded-3xl bg-evergreen-900 p-7 text-white">
                <h3 className="text-lg font-bold text-white">Looking for pricing?</h3>
                <p className="mt-2 text-sm text-evergreen-100/80">The quote form is the fastest way to get a custom estimate for your property.</p>
                <Link to="/quote" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-clay-300 hover:text-clay-200">
                  Get a free quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
