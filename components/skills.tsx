"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "SQL", "Scala", "Java"],
    },
    {
      category: "Big Data",
      skills: ["Apache Spark", "Hadoop", "Kafka", "Airflow"],
    },
    {
      category: "Cloud",
      skills: ["AWS", "Google Cloud", "Azure", "Databricks"],
    },
    {
      category: "Data Warehousing",
      skills: ["Snowflake", "BigQuery", "Redshift", "Postgres"],
    },
    {
      category: "Tools",
      skills: ["dbt", "Docker", "Git", "Terraform"],
    },
    {
      category: "BI & Analytics",
      skills: ["Tableau", "Looker", "Power BI", "Grafana"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-white font-semibold mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
