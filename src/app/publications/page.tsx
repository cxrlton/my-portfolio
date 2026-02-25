export default function PublicationsPage() {
  return (
    <main className="min-h-screen pt-24" style={{ background: '#1c1c1a' }}>
      <section className="py-16 px-6">
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
    </main>
  );
}
