"use client"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "TechCorp Analytics",
      period: "2022 - Present",
      description:
        "Leading data architecture initiatives and managing a team of engineers. Designed cloud-native platforms processing 10TB+ daily.",
    },
    {
      title: "Data Engineer",
      company: "DataFlow Solutions",
      period: "2020 - 2022",
      description:
        "Built and optimized ETL pipelines using Python and Spark. Reduced processing time by 60% through architecture improvements.",
    },
    {
      title: "Junior Data Engineer",
      company: "StartUp Data",
      period: "2019 - 2020",
      description:
        "Developed data warehouse infrastructure and implemented data quality frameworks using SQL and Python.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-16 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-blue-600 pl-6 py-2">
              <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
              <p className="text-slate-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
