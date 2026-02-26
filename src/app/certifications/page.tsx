export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-24" style={{ background: '#1c1c1a' }}>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-neutral-200 text-center mb-16 tracking-tight">
            Certifications
          </h2>

          <div className="space-y-5">
            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-normal text-neutral-200">
                    Senior Certificate in Computer Science & Engineering
                  </h3>
                  <p className="text-sm font-light mt-1" style={{ color: '#a3a380' }}>
                    University of Florida
                  </p>
                </div>
                <span className="text-xs tracking-widest uppercase text-neutral-500 font-light whitespace-nowrap">
                  Jan 2024 – May 2024
                </span>
              </div>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">
                Completed the final undergraduate semester through an exchange program at the University of Florida, earning 9 graduate-level credits.
              </p>
            </div>

            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-base font-normal text-neutral-200">
                    Generative AI with Large Language Models
                  </h3>
                  <p className="text-sm font-light mt-1" style={{ color: '#a3a380' }}>
                    Coursera · Amazon Web Services · DeepLearning.AI
                  </p>
                </div>
                <span className="text-xs tracking-widest uppercase text-neutral-500 font-light whitespace-nowrap">
                  Oct 2023
                </span>
              </div>
            </div>

            <div className="p-6 border border-neutral-800" style={{ backgroundColor: '#222220' }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-base font-normal text-neutral-200">
                    Natural Language Processing with Classification and Vector Spaces
                  </h3>
                  <p className="text-sm font-light mt-1" style={{ color: '#a3a380' }}>
                    Coursera · DeepLearning.AI
                  </p>
                </div>
                <span className="text-xs tracking-widest uppercase text-neutral-500 font-light whitespace-nowrap">
                  June 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
