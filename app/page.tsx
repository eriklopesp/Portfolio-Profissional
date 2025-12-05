"use client"

import Link from "next/link"
import { useState } from "react"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import Navigation from "@/components/navigation"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mb-20 animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">Engenheiro de Dados</h1>
              <p className="text-xl text-slate-300 mb-2">Criação de arquiteturas de dados em cloud, datasets, micro serviços e Analytics.</p>
              <p className="text-slate-400 mb-8">
                Especializado na construção de pipelines de dados escaláveis, data warehouses e infraestrutura de analytics. 
                Ajudo empresas a transformar dados brutos em inteligência de negócios.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  Projetos <ChevronRight size={20} />
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white rounded-lg font-semibold transition-colors"
                >
                  Entre em contato
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-400 text-sm">Python | SQL | Spark</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-400 text-sm">Data Warehouse | ETL | Pipeline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-400 text-sm">AWS | Google Cloud | Databricks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-400 text-sm">Analytics | BI Tools | Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold text-white mb-2">Sobre mim</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Atualmente atuando na implementação de soluções sólidas de infraestrutura de dados. Minha atuação cobre todo o ciclo de vida dos dados — desde a coleta e ingestão, passando pelo processamento e tratamento de dados estruturados e não estruturados (como JSON e XML), até armazenamento, modelagem e disponibilização para analytics.
                Tenho experiência prática construindo pipelines de dados eficientes (ETL/ELT) em Python e MySQL, além de trabalhar na organização e transformação de dados para suportar decisões de negócio. Atualmente, estou aprofundando conhecimentos em cloud computing, especialmente AWS, com foco em arquitetura de dados moderna e escalável.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white mb-12">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Linguagens", skills: ["Python", "SQL", "PySpark", "JavaScript"] },
              { title: "Data Platforms", skills: ["Apache Spark", "Hadoop", "Kafka", "Databricks"] },
              { title: "Cloud Services", skills: ["AWS", "Google Cloud", "Azure"] },
              { title: "Data Warehousing", skills: ["BigQuery", "Redshift", "Postgres"] }, 
              { title: "BI & Analytics", skills: ["Looker", "Power BI", "Grafana"] },
              { title: "Tools & Frameworks", skills: ["dbt", "Airflow", "Docker", "Git"] },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, sidx) => (
                    <div key={sidx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white mb-12">Experiências</h2>
          <div className="space-y-8">
            {[
              {
                title: "Analista de Dados PL",
                company: "Grupo PLL",
                period: "2024 - 2025",
                description:
                  "Desenvolvimento de dashboards em Power BI ou Python, utilizando DAX, M ou Numpy para construção de análises de acordo com o contexto. Desenvolvimento de relatórios em MySQL ou Postgres, utilizando conceitos como Tuning SQL visando eficiência/performance de querys, que forneçam suporte a longo prazo em relação a ingestão de dados, que rodem de maneira automatizada sem gerar gargalos em atualizações. Versionamento e governança de códigos no GitHub, com documentação que evidencia processos e aspectos técnicos da construção de cada solução de dados. Responsável pela construção de pipelines completos, da extração de dados através de API’s, ERP interno ou Banco de Dados, até manipulação através de Python pandas ou MySQL, ingestão e visualização, em métricas de BI para construção de KPI’s que norteie o operacional em suas tomadas de decisão, utilizando a massa de dados como fonte de informação. Participação de meets e kick-offs para alinhamento de estratégias internas, e reuniões com stakeholders para alinhamentos de expectativa/entrega/roadmap.."
              },
              {
                title: "Analista de Business Intelligence",
                company: "MarcoMKT",
                period: "2022 - 2024",
                description:
                  "Líder técnico do BI da Brother Brasil, responsável pela melhoria contínua de processos comerciais e criação de storytellings visuais com ferramentas de DataViz. Eu tinha uma participação muito ativa nas decisões de negócio, o foco era embasar tomadas de decisão e orientar de maneira documentada os processos operacionais e administrativos com agregações e análises que gerassem insights de caráter decisório. Análises comparativas, de propensão, gráfico de pareto, estatística, entre outros métodos para criação de KPI’s estratégicos que suportava a operação. Para além da parte conceitual, a parte técnica para a construção desses relatórios envolvia muito SQL Server, Python (Pandas), Linguagem M, Power BI (DAX) e API’S para extração de dados. Todo o processo de manipulação de dados, carregamento e disponibilização em banco era feito via SQL Server e Python, de acordo com cada necessidade.",
              },
              {
                title: "Assistente de Business Intelligence",
                company: "Allis Field Marketing",
                period: "2021 - 2022",
                description:
                  "Apoio em projetos de automação de dashboards, criação de pesquisas em sistemas de roteirização e relatórios analíticos em SQL, Excel, Power BI com foco em insights operacionais. Suporte em modelagem e qualidade de dados, garantindo consistência e normalização. Assistência ao Analista de BI em demandas de tratamento de dados e estruturação de métricas.",
              },
            ].map((exp, idx) => (
              <div key={idx} className="border-l-2 border-blue-600 pl-6 py-2">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400 text-sm">{exp.company}</p>
                <p className="text-slate-500 text-xs mb-2">{exp.period}</p>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        {/* <section id="projects" className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Projetos em destaque</h2>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold group"
            >
              View All <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real-time Data Pipeline",
                description:
                  "Built a high-throughput data ingestion pipeline processing 1M+ events per second using Kafka and Apache Spark.",
                technologies: ["Kafka", "Spark", "Python", "AWS"],
                link: "#",
              },
              {
                title: "Cloud Data Warehouse",
                description:
                  "Designed and implemented a scalable data warehouse on Google BigQuery with optimized schemas and cost reduction strategies.",
                technologies: ["BigQuery", "SQL", "dbt", "Terraform"],
                link: "#",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20 group cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tidx) => (
                    <span key={tidx} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  See More <ExternalLink size={16} />
                </Link>
              </div>
            ))}
          </div>
        </section> */}

        {/* CTA Section */}
        <section id="contact" className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-500/30 rounded-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos trabalhar juntos!</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Sempre estou aberto a discutir novos projetos e oportunidades na área de dados. Sinta-se à vontade para entrar em contato!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="eriklopesp.ti@gmail.com"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Mail size={20} /> E-mail
              </a>
              <a
                href="https://www.linkedin.com/in/eriklopesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm">© 2025 Erik Portfolio. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="https://github.com/eriklopesp" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/eriklopesp/" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
