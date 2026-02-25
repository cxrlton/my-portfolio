export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24" style={{ background: '#1c1c1a' }}>
      <section className="py-16 px-6" style={{ backgroundColor: '#1f1f1c' }}>
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
    </main>
  );
}
