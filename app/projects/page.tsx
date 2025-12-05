"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  image: string
  github?: string
  demo?: string
  metrics?: string[]
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Real-time Data Pipeline",
      description: "High-throughput data ingestion system processing 1M+ events per second",
      fullDescription:
        "Built a production-grade real-time data pipeline handling 1M+ events per second using Apache Kafka, Apache Spark Structured Streaming, and AWS infrastructure. Implemented data quality checks, monitoring, and alerting systems.",
      technologies: ["Kafka", "Apache Spark", "Python", "AWS", "Docker", "Redis"],
      image: "/data-pipeline-visualization.png",
      github: "https://github.com",
      demo: "https://example.com",
      metrics: ["1M+ events/sec", "99.99% uptime", "< 100ms latency"],
    },
    {
      id: 2,
      title: "Cloud Data Warehouse",
      description: "Scalable multi-tenant data warehouse on Google BigQuery",
      fullDescription:
        "Designed and implemented a multi-tenant data warehouse using Google BigQuery with optimized schemas, partitioning strategies, and cost optimization. Reduced query times by 75% and cut infrastructure costs by 40%.",
      technologies: ["BigQuery", "SQL", "dbt", "Terraform", "Python", "Looker"],
      image: "/data-warehouse-architecture.png",
      github: "https://github.com",
      metrics: ["75% query time reduction", "40% cost savings", "500B+ records"],
    },
  ]

  const technologies = ["Todos", "Python", "SQL", "Spark", "AWS", "GCP", "Docker"]
  const filteredProjects = projects

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Navigation activeSection="projects" setActiveSection={() => {}} />

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-5xl font-bold text-white">Projetos GitHub</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl">
            Uma coleção dos meus projetos e contribuições recentes em engenharia de dados. Explore o código, decisões de arquitetura e o impacto de cada projeto.
          </p>
        </section>

        {/* Filter */}
        <section className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mb-16">
          <div className="flex gap-3 flex-wrap">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === tech ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-500/30 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Interessado em colaborar?</h2>
            <p className="text-slate-300 mb-8">
              Vamos discutir suas necessidades em engenharia de dados e como posso ajudar a escalar sua infraestrutura de dados.
            </p>
            <a
              href="eriklopesp.ti@gmail.com"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Entre em contato!
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 md:px-12 lg:px-16 py-12 mt-20">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          © 2025 Erik Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20 group">
      <div className="relative h-48 bg-gradient-to-br from-blue-900/20 to-emerald-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-blue-400">📊</span>
            </div>
            <p className="text-slate-400 text-sm">{project.technologies[0]}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-slate-800/50 rounded">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-emerald-400 font-semibold text-sm">{metric}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
