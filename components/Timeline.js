import { useState } from 'react'

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState(null)

  const timelineItems = [
    {
      id: 'snibble',
      year: '2022',
      type: 'PROJECT',
      title: 'Snibble - Social Food Discovery App',
      company: 'Solo Founder',
      status: '[LAUNCHED]',
      description: 'Built a mobile social app for discovering the best dishes recommended by friends, chefs and food experts. Scaled to 600+ users in Amsterdam.',
      tech: ['React Native', 'Firebase', 'Google Maps API', 'Algolia', 'TailwindCSS'],
      link: 'https://www.snibble.co',
      details: 'Designed and built the app from scratch in 3 months. Solved the trust problem with restaurant review platforms by focusing on personal recommendations for specific dishes rather than entire restaurants.'
    },
    {
      id: 'ml-engineer',
      year: '2019-2022',
      type: 'CAREER',
      title: 'Machine Learning Engineer',
      company: 'Various Companies',
      status: '[COMPLETED]',
      description: '3+ years building ML systems and data pipelines at scale.',
      tech: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes'],
      details: 'Worked on recommendation systems, computer vision projects, and NLP applications. Built end-to-end ML pipelines from data collection to production deployment.'
    },
    {
      id: 'ownboard',
      year: '2021',
      type: 'PROJECT',
      title: 'Ownboard - Personal Dashboard',
      company: 'Side Project',
      status: '[ACTIVE]',
      description: 'Self-hosted dashboard for tracking personal metrics and goals.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      details: 'Built a personal productivity dashboard with habit tracking, goal setting, and data visualization features.'
    },
    {
      id: 'dse',
      year: '2020',
      type: 'PROJECT',
      title: 'Decision Support Engine',
      company: 'Academic Project',
      status: '[ARCHIVED]',
      description: 'AI-powered system for complex business decision making.',
      tech: ['Python', 'Scikit-learn', 'Flask', 'React'],
      details: 'Developed during MSc program. Combined multiple ML algorithms to provide decision recommendations with uncertainty quantification.'
    },
    {
      id: 'matching-engine',
      year: '2019',
      type: 'PROJECT',
      title: 'High-Performance Matching Engine',
      company: 'Trading System',
      status: '[PROTOTYPE]',
      description: 'Low-latency order matching system for financial markets.',
      tech: ['C++', 'Redis', 'WebSocket', 'FIX Protocol'],
      details: 'Built for understanding market microstructure. Achieved sub-microsecond matching latency using custom data structures and memory management.'
    },
    {
      id: 'education',
      year: '2018-2020',
      type: 'EDUCATION',
      title: 'MSc Business Analytics',
      company: 'VU University Amsterdam',
      status: '[GRADUATED]',
      description: 'Specialized in Machine Learning and Data Science.',
      tech: ['Python', 'R', 'SQL', 'Statistics', 'ML Algorithms'],
      details: 'Thesis on deep learning applications in financial markets. Graduated with distinction.'
    }
  ]

  return (
    <div className="mb-12">
      <div className="mb-6">
        <div className="text-cyan-400 text-lg mb-2">
          yuval@amsterdam:~$ ./show_timeline.sh --type=all
        </div>
        <div className="text-green-400">
          ┌─ CAREER & PROJECTS TIMELINE ─────────────────────────────────┐
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-400 opacity-50"></div>

        {timelineItems.map((item, index) => (
          <div key={item.id} className="relative mb-8">
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="ml-16 border border-green-400 bg-gray-900 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer"
                 onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 font-mono text-sm">[{item.year}]</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.type === 'PROJECT' ? 'bg-blue-900 text-blue-300' :
                    item.type === 'CAREER' ? 'bg-purple-900 text-purple-300' :
                    'bg-green-900 text-green-300'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-cyan-400 text-xs">{item.status}</span>
                </div>
                <div className="text-green-400 text-sm">
                  {selectedItem === item.id ? '[−]' : '[+]'}
                </div>
              </div>

              {/* Title and Company */}
              <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.company}</p>
              
              {/* Description */}
              <p className="text-green-300 text-sm mb-3">{item.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tech.map((tech) => (
                  <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expanded Details */}
              {selectedItem === item.id && (
                <div className="border-t border-green-400 pt-3 mt-3 animate-fade-in">
                  <p className="text-gray-300 text-sm mb-3">{item.details}</p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      → View Project
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-green-400 mt-6">
        └───────────────────────────────────────────────────────────────┘
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}