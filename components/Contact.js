import { useState, useEffect } from 'react'

export default function Contact() {
  const [connectionStatus, setConnectionStatus] = useState('INITIALIZING')
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const statusSequence = [
      'INITIALIZING',
      'SCANNING NETWORKS',
      'ESTABLISHING SECURE CONNECTION',
      'CONNECTION ESTABLISHED',
      'READY FOR TRANSMISSION'
    ]

    let index = 0
    const updateStatus = () => {
      if (index < statusSequence.length - 1) {
        setConnectionStatus(statusSequence[index])
        index++
        setTimeout(updateStatus, 800)
      } else {
        setConnectionStatus(statusSequence[index])
        setShowForm(true)
      }
    }

    const timer = setTimeout(updateStatus, 1000)
    return () => clearTimeout(timer)
  }, [])

  const contactMethods = [
    {
      protocol: 'EMAIL',
      address: 'yuval.pappie@gmail.com',
      port: '587',
      status: 'SECURE',
      icon: '📧'
    },
    {
      protocol: 'LINKEDIN',
      address: 'linkedin.com/in/yuvalpappie',
      port: '443',
      status: 'ACTIVE',
      icon: '💼'
    },
    {
      protocol: 'GITHUB',
      address: 'github.com/Yuvalpappie',
      port: '443',
      status: 'PUBLIC',
      icon: '👨‍💻'
    },
    {
      protocol: 'TWITTER',
      address: 'twitter.com/yuvalpappie',
      port: '443',
      status: 'ONLINE',
      icon: '🐦'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form handling logic here
    console.log('Form submitted')
  }

  return (
    <div className="mb-12">
      <div className="mb-6">
        <div className="text-cyan-400 text-lg mb-2">
          yuval@amsterdam:~$ ./establish_connection.sh --remote --secure
        </div>
        <div className="text-yellow-400 text-sm mb-4 animate-pulse">
          Status: {connectionStatus}...
        </div>
      </div>

      {showForm && (
        <>
          {/* Connection Details */}
          <div className="border border-green-400 bg-gray-900 bg-opacity-50 p-6 rounded-lg mb-6">
            <div className="text-green-400 font-bold mb-4">
              ┌─ AVAILABLE COMMUNICATION PROTOCOLS ─────────────────────────┐
            </div>
            
            <div className="space-y-3 mb-4">
              {contactMethods.map((method) => (
                <div key={method.protocol} className="flex items-center justify-between p-2 bg-gray-800 bg-opacity-50 rounded">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{method.icon}</span>
                    <span className="text-green-300 font-mono text-sm">{method.protocol}</span>
                    <span className="text-gray-400 text-sm">{method.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">:{method.port}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      method.status === 'SECURE' ? 'bg-green-900 text-green-300' :
                      method.status === 'ACTIVE' ? 'bg-blue-900 text-blue-300' :
                      method.status === 'PUBLIC' ? 'bg-purple-900 text-purple-300' :
                      'bg-cyan-900 text-cyan-300'
                    }`}>
                      {method.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-green-400">
              └─────────────────────────────────────────────────────────────┘
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="border border-green-400 bg-gray-900 bg-opacity-50 p-6 rounded-lg">
            <div className="text-cyan-400 font-bold mb-4">
              QUICK.MESSAGE.TERMINAL
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-green-300 text-sm block mb-1">FROM:</label>
                <input 
                  type="email" 
                  placeholder="your.email@domain.com"
                  className="w-full bg-black border border-green-400 text-green-300 p-2 rounded font-mono focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>
              
              <div>
                <label className="text-green-300 text-sm block mb-1">SUBJECT:</label>
                <input 
                  type="text" 
                  placeholder="Re: Collaboration Opportunity"
                  className="w-full bg-black border border-green-400 text-green-300 p-2 rounded font-mono focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>
              
              <div>
                <label className="text-green-300 text-sm block mb-1">MESSAGE.BODY:</label>
                <textarea 
                  rows="5"
                  placeholder="Hello Yuval,&#10;&#10;I'd love to discuss...&#10;&#10;Best regards,"
                  className="w-full bg-black border border-green-400 text-green-300 p-2 rounded font-mono focus:outline-none focus:border-cyan-400 resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-900 hover:bg-green-800 text-green-300 font-mono py-3 px-4 rounded border border-green-400 transition-colors"
              >
                [TRANSMIT MESSAGE] → Send()
              </button>
            </form>

            <div className="mt-4 text-xs text-gray-500">
              * All communications are encrypted end-to-end
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="text-green-400 text-sm mb-2">
              ┌─ SESSION INFO ─────────────────────────────────────────────────┐
            </div>
            <div className="text-gray-400 text-xs space-y-1">
              <div>Last updated: {new Date().toISOString()}</div>
              <div>Server: amsterdam.yuval.local</div>
              <div>Uptime: {Math.floor(Math.random() * 365)} days</div>
              <div>Status: Ready for new adventures 🚀</div>
            </div>
            <div className="text-green-400 text-sm mt-2">
              └────────────────────────────────────────────────────────────────┘
            </div>
            
            <div className="mt-4 text-cyan-400 text-sm animate-pulse">
              yuval@amsterdam:~$ echo &quot;Thanks for visiting!&quot; && exit
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        form {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}