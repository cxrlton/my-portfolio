import { Projects } from "@/components/Projects";
import { ContactForm } from "@/components/ContactForm";
import { ViewCounter } from "@/components/ViewCounter";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#1c1c1a' }}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <p className="text-neutral-500 text-base mb-4 tracking-widest uppercase font-light">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl sm:text-7xl font-light text-neutral-200 mb-4 tracking-tight">
          Pradham{" "}
          <span style={{ color: '#a3a380' }}>
            Mummaleti
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-neutral-400 mb-8 font-light">
          Associate Data Scientist
        </h2>

        <p className="text-neutral-500 max-w-lg text-base mb-12 leading-relaxed font-light">
          Teaching machines to understand the world — without imposing one.
        </p>

        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            href="#projects"
            className="px-8 py-3 text-neutral-200 font-normal rounded-none border transition-all hover:bg-neutral-200 hover:text-neutral-900"
            style={{ borderColor: '#a3a380', backgroundColor: 'transparent' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-neutral-700 text-neutral-400 font-normal rounded-none hover:border-neutral-500 hover:text-neutral-300 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 border border-neutral-700 text-neutral-400 font-normal rounded-none hover:border-neutral-500 hover:text-neutral-300 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* View Counter */}
        <div className="absolute bottom-20">
          <ViewCounter page="home" />
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-5 h-5 text-neutral-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6" style={{ backgroundColor: '#1f1f1c' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-neutral-200 text-center mb-2 tracking-tight">
            Research & Projects
          </h2>
          <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto font-light">
            Deep learning architectures, NLP research, and scalable ML systems
          </p>

          <Projects />
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#1c1c1a' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-neutral-200 text-center mb-16 tracking-tight">
            Publications
          </h2>

          <div className="space-y-6">
            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <span className="text-xs tracking-widest uppercase mb-3 inline-block" style={{ color: '#a3a380' }}>
                ACL 2025
              </span>
              <h3 className="text-lg font-normal text-neutral-200 mb-2">
                That Ain&apos;t Right: Assessing LLM Performance on QA in African American and West African English Dialects
              </h3>
              <p className="text-neutral-500 text-sm font-light">
                W. Coggins, J. McKenzie, S. Youm, <span style={{ color: '#a3a380' }}>P. Mummaleti</span>, J. Gilbert, E. Ragan, and B. J. Dorr
              </p>
              <p className="text-neutral-600 text-sm mt-2 font-light">
                9th Widening NLP Workshop, Suzhou, China
              </p>
            </div>

            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <span className="text-xs tracking-widest uppercase mb-3 inline-block" style={{ color: '#a3a380' }}>
                COMSYS 2024
              </span>
              <h3 className="text-lg font-normal text-neutral-200 mb-2">
                Automation of Human Body Measurements from 2D Images
              </h3>
              <p className="text-neutral-500 text-sm font-light">
                C. Srikanth, S. R. Yerabelly, <span style={{ color: '#a3a380' }}>P. Mummaleti</span>, and A. Jain
              </p>
              <p className="text-neutral-600 text-sm mt-2 font-light">
                5th International Conference on Frontiers in Computing and Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6" style={{ backgroundColor: '#1f1f1c' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-neutral-200 text-center mb-16 tracking-tight">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <h3 className="text-base font-normal text-neutral-300 mb-4 tracking-wide uppercase">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C/C++", "Julia", "Pony", "R", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-neutral-400 text-sm border border-neutral-700 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <h3 className="text-base font-normal text-neutral-300 mb-4 tracking-wide uppercase">
                ML & AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "FAISS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-neutral-400 text-sm border border-neutral-700 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <h3 className="text-base font-normal text-neutral-300 mb-4 tracking-wide uppercase">
                Tools & Data
              </h3>
              <div className="flex flex-wrap gap-2">
                {["NumPy", "Pandas", "Jupyter", "AWS", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-neutral-400 text-sm border border-neutral-700 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <h3 className="text-base font-normal text-neutral-300 mb-4 tracking-wide uppercase">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {["NLP", "LLMs", "Distributed Training", "Transformers"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-neutral-400 text-sm border border-neutral-700 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#1c1c1a' }}>
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

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-800">
        <p className="text-center text-neutral-600 text-sm font-light">
          © 2025 Pradham Mummaleti
        </p>
      </footer>
    </main>
  );
}
