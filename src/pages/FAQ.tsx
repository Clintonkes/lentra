import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, ArrowRight, HelpCircle, MessageSquare } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { faqs, site } from '@/config/site';

const heroImage =
  'https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our lawn care and property maintenance services."
        breadcrumb="FAQ"
        image={heroImage}
      />

      <section className="py-20 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HelpCircle className="w-8 h-8 text-copper-500" />
            <h2 className="text-3xl font-extrabold text-navy-900">Got Questions? We Have Answers</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-copper-300 shadow-lg' : 'border-navy-100 shadow-sm hover:shadow-md'
              }`}>
                <button onClick={() => toggle(index)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-navy-900 text-base">{faq.question}</span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'bg-copper-600 text-white rotate-180' : 'bg-navy-100 text-navy-600'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-navy-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 bg-navy-900 rounded-3xl p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-copper-600 flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">Still Have Questions?</h3>
            <p className="text-navy-300 mb-6 max-w-md mx-auto">
              We are happy to help. Reach out and we will answer any questions you have about our services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${site.phoneRaw}`}
                className="bg-copper-600 hover:bg-copper-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2">
                <Phone className="w-5 h-5" /> {site.phone}
              </a>
              <Link to="/contact"
                className="border border-navy-600 hover:border-copper-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2">
                Send a Message <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
