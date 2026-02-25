import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24" style={{ background: '#1c1c1a' }}>
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-neutral-200 mb-4 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-neutral-500 mb-12 font-light">
            Open to research collaborations, ML engineering roles, and interesting projects.
          </p>

          <ContactForm />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="mailto:pradhammummaleti@ufl.edu"
              className="px-6 py-2 border border-neutral-700 text-neutral-400 font-light hover:border-neutral-500 hover:text-neutral-300 transition-colors"
            >
              pradhammummaleti@ufl.edu
            </a>
            <a
              href="https://linkedin.com/in/pradhammummaleti"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-neutral-700 text-neutral-400 font-light hover:border-neutral-500 hover:text-neutral-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/cxrlton"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-neutral-700 text-neutral-400 font-light hover:border-neutral-500 hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
