import { ViewCounter } from "@/components/ViewCounter";
import { CurrentFocus } from "@/components/CurrentFocus";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#1c1c1a' }}>
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

        <p className="text-neutral-500 max-w-lg text-base leading-relaxed font-light">
          Teaching machines to understand the world — without imposing one.
        </p>

        <CurrentFocus />

        <div className="flex gap-4 flex-col sm:flex-row mt-12">
          <a
            href="/projects"
            className="px-8 py-3 text-neutral-200 font-normal rounded-none border transition-all hover:bg-neutral-200 hover:text-neutral-900"
            style={{ borderColor: '#a3a380', backgroundColor: 'transparent' }}
          >
            View My Work
          </a>
          <a
            href="/contact"
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
          <ViewCounter />
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
    </main>
  );
}
