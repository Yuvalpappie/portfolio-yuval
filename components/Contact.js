import { useEffect, useState } from 'react'

export default function Contact() {
  const [connectionStatus, setConnectionStatus] = useState('INITIALIZING')

  useEffect(() => {
    const statusSequence = [
      'INITIALIZING',
      'SCANNING NETWORKS',
      'ESTABLISHING SECURE CONNECTION',
    ]

    let index = 0
    const updateStatus = () => {
      if (index < statusSequence.length - 1) {
        setConnectionStatus(statusSequence[index])
        index++
        setTimeout(updateStatus, 800)
      } else {
        setConnectionStatus(statusSequence[index])
      }
    }

    const timer = setTimeout(updateStatus, 1000)
    return () => clearTimeout(timer)
  }, [])

  const contactMethods = [
    {
      protocol: 'EMAIL',
      address: 'pappieyuval@gmail.com',
      port: '587',
      status: 'ACTIVE',
      icon: '📧',
      link: 'mailto:pappieyuval@gmail.com'
    },
    {
      protocol: 'LINKEDIN',
      address: 'linkedin.com/in/yuvalpappie',
      port: '443',
      status: 'ACTIVE',
      icon: '💼',
      link: 'https://www.linkedin.com/in/yuval-pappie-30025673/'
    },
    {
      protocol: 'GITHUB',
      address: 'github.com/Yuvalpappie',
      port: '443',
      status: 'PUBLIC',
      icon: '👨‍💻',
      link: 'https://github.com/Yuvalpappie'
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <div className="text-cyan-400 text-base sm:text-sm mb-2 overflow-x-auto">
          <span className="whitespace-nowrap">yuval@amsterdam:~$ ./establish_connection.sh --remote --secure</span>
        </div>
      </div>

      {/* Connection Details */}
      <div className="border border-purple-400 bg-gray-900 bg-opacity-50 p-3 sm:p-6 rounded-lg mb-6 overflow-x-auto">
        <div className="text-green-400 font-bold mb-4 text-sm sm:text-base">
          <span className="whitespace-nowrap">┌─ CONTACT ───────────────────────────────────────────────────┐</span>
        </div>
        
        <div className="space-y-3 mb-4">
          {contactMethods.map((method) => (
            <a 
              key={method.protocol}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 bg-gray-800 bg-opacity-50 rounded hover:bg-opacity-70 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <span className="text-lg flex-shrink-0">{method.icon}</span>
                <span className="text-green-300 font-mono text-xs sm:text-sm flex-shrink-0">{method.protocol}</span>
                <span className="text-gray-400 text-xs sm:text-sm truncate">{method.address}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <span className="text-xs text-gray-500 hidden sm:inline">:{method.port}</span>
                <span className={`text-xs px-1 sm:px-2 py-1 rounded ${
                  method.status === 'SECURE' ? 'bg-green-900 text-green-300' :
                  method.status === 'ACTIVE' ? 'bg-blue-900 text-blue-300' :
                  method.status === 'PUBLIC' ? 'bg-purple-900 text-purple-300' :
                  'bg-cyan-900 text-cyan-300'
                }`}>
                  {method.status}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-green-400 text-sm sm:text-base overflow-x-auto">
          <span className="whitespace-nowrap">└─────────────────────────────────────────────────────────────┘</span>
        </div>
      </div>

      <div className="mt-4 text-center text-cyan-400 text-sm animate-pulse overflow-x-auto">
        <span className="whitespace-nowrap">yuval@amsterdam:~$ echo &quot;Thanks for visiting!&quot; && exit</span>
      </div>
    </div>
  )
}