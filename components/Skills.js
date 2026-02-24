import { useState, useEffect, useMemo } from 'react'

const skillCategories = {
  'Frontend': {
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'React Native'],
    proficiency: [95, 90, 88, 92, 85]
  },
  'Backend': {
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    proficiency: [90, 95, 85, 80, 82]
  },
  'AI/ML': {
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
    proficiency: [85, 80, 90, 78, 75]
  },
  'DevOps': {
    skills: ['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Linux'],
    proficiency: [88, 82, 75, 85, 90]
  },
  'Tools': {
    skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Firebase'],
    proficiency: [95, 90, 85, 88, 87]
  }
}

export default function Skills() {
  const [loadingSkill, setLoadingSkill] = useState('')
  const [loadedSkills, setLoadedSkills] = useState(new Set())

  const allSkills = useMemo(() => 
    Object.entries(skillCategories).flatMap(([category, data]) => 
      data.skills.map(skill => ({ skill, category }))
    ), []
  )

  useEffect(() => {
    let index = 0
    const loadSkills = () => {
      if (index < allSkills.length) {
        setLoadingSkill(`${allSkills[index].category}/${allSkills[index].skill}`)
        setTimeout(() => {
          setLoadedSkills(prev => new Set([...prev, allSkills[index].skill]))
          index++
          if (index < allSkills.length) {
            setTimeout(loadSkills, 200)
          } else {
            setLoadingSkill('')
          }
        }, 100)
      }
    }

    const timer = setTimeout(loadSkills, 1000)
    return () => clearTimeout(timer)
  }, [allSkills])

  const ProgressBar = ({ skill, proficiency, isLoaded }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className={`text-sm ${isLoaded ? 'text-green-300' : 'text-gray-500'}`}>
          {skill}
        </span>
        <span className={`text-xs font-mono ${isLoaded ? 'text-cyan-400' : 'text-gray-600'}`}>
          {isLoaded ? `${proficiency}%` : '---%'}
        </span>
      </div>
      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${
            isLoaded 
              ? 'bg-gradient-to-r from-green-500 to-cyan-400' 
              : 'bg-gray-700'
          }`}
          style={{ width: isLoaded ? `${proficiency}%` : '0%' }}
        >
          {isLoaded && (
            <div className="w-full h-full bg-gradient-to-r from-transparent to-white opacity-20 animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="mb-12">
      <div className="mb-6">
        <div className="text-cyan-400 text-lg mb-2">
          yuval@amsterdam:~$ sudo apt list --installed | grep -E &quot;(skills|expertise)&quot;
        </div>
        {loadingSkill && (
          <div className="text-yellow-400 text-sm mb-2 animate-pulse">
            Loading: {loadingSkill}...
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, data]) => (
          <div key={category} className="border border-green-400 bg-gray-900 bg-opacity-30 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-lg">
                /{category.toLowerCase()}
              </span>
              <div className="ml-2 flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            
            {data.skills.map((skill, index) => (
              <ProgressBar
                key={skill}
                skill={skill}
                proficiency={data.proficiency[index]}
                isLoaded={loadedSkills.has(skill)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* System Stats */}
      <div className="mt-8 border border-green-400 bg-gray-900 bg-opacity-50 p-4 rounded-lg">
        <div className="text-cyan-400 font-bold mb-3">SYSTEM.STATS</div>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-gray-400">Experience</div>
            <div className="text-green-300 font-mono">5+ years</div>
          </div>
          <div>
            <div className="text-gray-400">Projects Built</div>
            <div className="text-green-300 font-mono">25+</div>
          </div>
          <div>
            <div className="text-gray-400">Languages</div>
            <div className="text-green-300 font-mono">8+ active</div>
          </div>
          <div>
            <div className="text-gray-400">Status</div>
            <div className="text-green-400 font-mono animate-pulse">● ONLINE</div>
          </div>
        </div>
      </div>
    </div>
  )
}