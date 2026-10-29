import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Phone, Plus } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { pageImages } from "@/config/images";
import { faqs, site } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="Everything you might want to know about our lawn care and landscaping services."
        image={pageImages.faq.hero}
      />

      <section className="section">
        <div className="container-max max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div key={faq.question} className={`card overflow-hidden transition ${open ? "ring-1 ring-clay-300" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-evergreen-950">{faq.question}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${open ? "rotate-45 bg-clay-600 text-white" : "bg-evergreen-50 text-evergreen-700"}`}>
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-sand-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-[2rem] bg-evergreen-900 p-10 text-center">
            <MessageSquare className="mx-auto h-10 w-10 text-clay-400" />
            <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">Still have questions?</h2>
            <p className="mx-auto mt-3 max-w-md text-evergreen-100/80">We are happy to help. Call us or send a message and we will get right back to you.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <Link to="/contact" className="btn-ghost">
                Send a message <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
