"use client"

export default function About() {
  return (
    <section id="Sobre" className="py-20 px-6 md:px-12 lg:px-16 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Sobre</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a passionate Data Engineer with a deep understanding of modern data architecture patterns and cloud
              technologies.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              My journey in data engineering has taken me through various roles where I've developed expertise in
              designing scalable solutions, optimizing performance, and implementing best practices.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Approach</h3>
              <p className="text-slate-400">
                I focus on building robust, scalable solutions that are maintainable and cost-effective.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Philosophy</h3>
              <p className="text-slate-400">
                Data should be accessible, reliable, and serve business objectives effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
