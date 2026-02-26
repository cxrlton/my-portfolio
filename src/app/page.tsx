'use client';

import { useRef, useState, useEffect } from 'react';
import { ViewCounter } from "@/components/ViewCounter";
import { CurrentFocus } from "@/components/CurrentFocus";
import { ContactForm } from "@/components/ContactForm";

const SECTIONS = ['Home', 'Projects', 'Publications', 'Skills', 'Contact'];

export default function Home() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((s) => s === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    sectionRefs.current.forEach((s) => { if (s) observer.observe(s); });
    return () => observer.disconnect();
  }, []);

  function scrollTo(i: number) {
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <style>{`#snap-container::-webkit-scrollbar { display: none; }`}</style>

      {/* Dot navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {SECTIONS.map((label, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            title={label}
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? '6px' : '5px',
              height: active === i ? '6px' : '5px',
              backgroundColor: active === i ? '#a3a380' : '#3a3a38',
              transform: active === i ? 'scale(1.6)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      <div
        id="snap-container"
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >

        {/* ── Hero ── */}
        <section
          ref={(el) => { sectionRefs.current[0] = el; }}
          className="h-screen snap-start flex flex-col items-center justify-center px-6 text-center relative"
          style={{ background: '#1c1c1a' }}
        >
          <p className="text-neutral-500 text-base mb-4 tracking-widest uppercase font-light">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-7xl font-light text-neutral-200 mb-4 tracking-tight">
            Pradham{' '}
            <span style={{ color: '#a3a380' }}>Mummaleti</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-neutral-400 mb-8 font-light">
            Associate Data Scientist
          </h2>
          <p className="text-neutral-500 max-w-lg text-base leading-relaxed font-light">
            Teaching machines to understand the world — without imposing one.
          </p>

          <CurrentFocus />

          <div className="flex gap-4 flex-col sm:flex-row mt-12">
            <button
              onClick={() => scrollTo(1)}
              className="px-8 py-3 text-neutral-200 font-normal border transition-all hover:bg-neutral-200 hover:text-neutral-900"
              style={{ borderColor: '#a3a380', backgroundColor: 'transparent' }}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo(4)}
              className="px-8 py-3 border border-neutral-700 text-neutral-400 font-normal hover:border-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Get In Touch
            </button>
            <a
              href="/cv.pdf"
              download
              className="px-8 py-3 border border-neutral-700 text-neutral-400 font-normal hover:border-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="absolute bottom-20">
            <ViewCounter />
          </div>

          <button
            onClick={() => scrollTo(1)}
            className="absolute bottom-10 animate-bounce"
            aria-label="Scroll to next section"
          >
            <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </section>

        {/* ── Projects ── */}
        <section
          ref={(el) => { sectionRefs.current[1] = el; }}
          className="h-screen snap-start flex flex-col items-center justify-center px-6"
          style={{ background: '#1f1f1c' }}
        >
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-light text-neutral-200 text-center mb-2 tracking-tight">
              Research & Projects
            </h2>
            <p className="text-neutral-500 text-center mb-10 font-light text-sm">
              Deep learning architectures, NLP research, and scalable ML systems
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  label: 'NLP',
                  title: 'Dialect-Robust QA',
                  desc: 'LLM evaluation across African American and West African English dialects.',
                },
                {
                  label: 'Computer Vision',
                  title: 'Body Measurement Automation',
                  desc: 'Extracting human body measurements from 2D images using deep learning.',
                },
                {
                  label: 'ML Systems',
                  title: 'Distributed Training',
                  desc: 'Scalable training pipelines for large language models across GPU clusters.',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="p-5 border border-neutral-800"
                  style={{ backgroundColor: '#222220' }}
                >
                  <span className="text-xs tracking-widest uppercase mb-3 inline-block font-light" style={{ color: '#a3a380' }}>
                    {p.label}
                  </span>
                  <h3 className="text-base font-normal text-neutral-200 mb-2">{p.title}</h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/projects" className="text-sm font-light hover:underline" style={{ color: '#a3a380' }}>
                View all projects →
              </a>
            </div>
          </div>
        </section>

        {/* ── Publications ── */}
        <section
          ref={(el) => { sectionRefs.current[2] = el; }}
          className="h-screen snap-start flex flex-col items-center justify-center px-6"
          style={{ background: '#1c1c1a' }}
        >
          <div className="w-full max-w-3xl">
            <h2 className="text-3xl font-light text-neutral-200 text-center mb-10 tracking-tight">
              Publications
            </h2>

            <div className="space-y-5">
              <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
                <span className="text-xs tracking-widest uppercase mb-3 inline-block" style={{ color: '#a3a380' }}>
                  ACL 2025
                </span>
                <h3 className="text-base font-normal text-neutral-200 mb-2">
                  That Ain&apos;t Right: Assessing LLM Performance on QA in African American and West African English Dialects
                </h3>
                <p className="text-neutral-500 text-sm font-light">
                  W. Coggins, J. McKenzie, S. Youm, <span style={{ color: '#a3a380' }}>P. Mummaleti</span>, J. Gilbert, E. Ragan, and B. J. Dorr
                </p>
                <p className="text-neutral-600 text-xs mt-2 font-light">9th Widening NLP Workshop, Suzhou, China</p>
              </div>

              <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
                <span className="text-xs tracking-widest uppercase mb-3 inline-block" style={{ color: '#a3a380' }}>
                  COMSYS 2024
                </span>
                <h3 className="text-base font-normal text-neutral-200 mb-2">
                  Automation of Human Body Measurements from 2D Images
                </h3>
                <p className="text-neutral-500 text-sm font-light">
                  C. Srikanth, S. R. Yerabelly, <span style={{ color: '#a3a380' }}>P. Mummaleti</span>, and A. Jain
                </p>
                <p className="text-neutral-600 text-xs mt-2 font-light">5th International Conference on Frontiers in Computing and Systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section
          ref={(el) => { sectionRefs.current[3] = el; }}
          className="h-screen snap-start flex flex-col items-center justify-center px-6"
          style={{ background: '#1f1f1c' }}
        >
          <div className="w-full max-w-3xl">
            <h2 className="text-3xl font-light text-neutral-200 text-center mb-10 tracking-tight">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { label: 'Languages', skills: ['Python', 'C/C++', 'Julia', 'Pony', 'R', 'SQL'] },
                { label: 'ML & AI', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'FAISS'] },
                { label: 'Tools & Data', skills: ['NumPy', 'Pandas', 'Jupyter', 'AWS', 'Git'] },
                { label: 'Focus Areas', skills: ['NLP', 'LLMs', 'Distributed Training', 'Transformers'] },
              ].map(({ label, skills }) => (
                <div key={label} className="p-5 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
                  <h3 className="text-xs font-normal text-neutral-300 mb-3 tracking-widest uppercase">{label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <span key={s} className="px-3 py-1 text-neutral-400 text-sm border border-neutral-700 font-light">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          ref={(el) => { sectionRefs.current[4] = el; }}
          className="h-screen snap-start flex flex-col items-center justify-center px-6"
          style={{ background: '#1c1c1a' }}
        >
          <div className="w-full max-w-xl text-center">
            <h2 className="text-3xl font-light text-neutral-200 mb-4 tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-neutral-500 mb-10 font-light text-sm">
              Open to research collaborations, ML engineering roles, and interesting projects.
            </p>

            <ContactForm />

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="mailto:pradhammummaleti@ufl.edu" className="px-5 py-2 border border-neutral-700 text-neutral-400 font-light hover:border-neutral-500 hover:text-neutral-300 transition-colors text-sm">
                pradhammummaleti@ufl.edu
              </a>
              <a href="https://linkedin.com/in/pradhammummaleti" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-neutral-700 text-neutral-400 font-light hover:border-neutral-500 hover:text-neutral-300 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://github.com/cxrlton" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-neutral-700 text-neutral-400 font-light hover:border-neutral-500 hover:text-neutral-300 transition-colors text-sm">
                GitHub
              </a>
            </div>

            <p className="text-neutral-700 text-xs font-light mt-16">© 2025 Pradham Mummaleti</p>
          </div>
        </section>

      </div>
    </>
  );
}
