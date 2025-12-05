"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
              Engineered Data{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Insights
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              Building scalable data infrastructure and transforming data into actionable business intelligence.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/50 flex items-center gap-2"
            >
              Explore Projects <ChevronRight size={20} />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg font-semibold transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative bg-slate-900/50 border border-slate-700 rounded-2xl p-12 backdrop-blur">
            <div className="space-y-6">
              {["Data Pipeline", "ETL Processing", "Data Warehouse", "Analytics"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
