import { Projects } from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24" style={{ background: '#1c1c1a' }}>
      <section className="py-16 px-6" style={{ backgroundColor: '#1f1f1c' }}>
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
    </main>
  );
}
