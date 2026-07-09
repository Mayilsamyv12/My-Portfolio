import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filterOptions = [
    { value: 'all',       label: 'All (3)' },
    { value: 'webapp',    label: 'Web App' },
    { value: 'backend',   label: 'Backend' },
    { value: 'ecommerce', label: 'E-commerce' },
  ]

  const allProjects = [
    { 
      id: 1, 
      title: 'Smart Healthcare Appointment & Pharmacy Platform', 
      category: 'webapp', 
      categoryLabel: 'Web App', 
      tags: ['React (Vite)', 'Django REST', 'Docker'], 
      year: '2026', 
      desc: 'A decoupled healthcare platform with role-based access for patients, doctors, and lab admins.', 
      img: '/images/smart_healthcare_mockup.png', 
      url: 'https://github.com/Mayilsamyv12',
      features: [
        'Architected a decoupled system — a React SPA frontend consuming a Django REST API.',
        'Integrated Razorpay for online medicine and lab-test payments.',
        'Implemented location-based search to surface nearby hospitals and labs.',
        'Containerized the stack with Docker and docker-compose.'
      ]
    },
    { 
      id: 2, 
      title: 'Eshop — Django E-Commerce Platform', 
      category: 'ecommerce', 
      categoryLabel: 'E-commerce', 
      tags: ['Python', 'Django', 'MySQL'], 
      year: '2026', 
      desc: 'A server-rendered e-commerce app with cart, checkout, and order tracking.', 
      img: '/images/ecommerce_mockup.png', 
      url: 'https://github.com/Mayilsamyv12',
      features: [
        'Built a server-rendered e-commerce application with product catalog, cart, checkout, and tracking.',
        'Implemented user authentication, profile management, and a review/ratings system.',
        'Designed the relational schema for products, categories, and orders.'
      ]
    },
    { 
      id: 3, 
      title: 'Smart Complaint & Service Ticket System (Capstone Project)', 
      category: 'backend', 
      categoryLabel: 'Backend', 
      tags: ['Flask', 'pandas', 'MySQL'], 
      year: '2026', 
      desc: 'A complaint tracking system with admin/manager roles and automated reporting.', 
      img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&q=80', 
      url: 'https://github.com/Mayilsamyv12',
      features: [
        'Built a Flask application for tracking and status updates with separate admin and manager logins.',
        'Added automated email notifications on status change and Excel export for reporting using pandas.',
        'Designed the MySQL schema for complaints, users, and status history.'
      ]
    }
  ]

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter)

  return (
    <>
      <section className="pt-36 pb-12 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="reveal font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">All Projects</h1>
          <p className="reveal text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">A complete look at my work across web apps, frontend templates and backend scripting.</p>
          <div className="reveal flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  filter === option.value
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <article key={p.id} className="card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent flex flex-col justify-between h-full">
                <div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="block pf w-full h-48">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </a>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2.5 py-1 rounded-full ${
                            tag === p.categoryLabel
                              ? 'bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                    </a>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    {p.features && p.features.length > 0 && (
                      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                        <p className="text-xs font-bold text-zinc-750 dark:text-zinc-300 mb-1">Key Features:</p>
                        <ul className="text-[11px] text-zinc-500 dark:text-zinc-400 space-y-1 pl-4 list-disc">
                          {p.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6 pt-0 mt-4">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-white nl">
                    View project &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-sm">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>
            <div className="relative z-10">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-4">Ready to start?</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Want your project here?</h2>
              <p className="text-zinc-400 max-w-md mx-auto mb-8">I'm available for new projects. Tell me about what you're building and let's see if we're a good fit.</p>
              <Link to="/#contact" className="inline-flex items-center gap-2 btn-primary bg-accent text-white font-medium px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors">Start a project &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
