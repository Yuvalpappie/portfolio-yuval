import { useState, useEffect, useMemo } from 'react'

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [terminalGlow, setTerminalGlow] = useState(false)

  const lines = useMemo(() => [
    '> BIOS v2.1.337 - INITIALIZING...',
    '> Loading bootloader...',
    '> Mounting filesystems...',
    '> Starting network services...',
    '> Establishing secure connection...',
    '> ACCESS GRANTED.',
    '',
    '╔═══════════════════════════════════════════════════════════════╗',
    '║    ██╗   ██╗██╗   ██╗██╗   ██╗ █████╗ ██╗                    ║',
    '║    ╚██╗ ██╔╝██║   ██║██║   ██║██╔══██╗██║                    ║', 
    '║     ╚████╔╝ ██║   ██║██║   ██║███████║██║                    ║',
    '║      ╚██╔╝  ██║   ██║╚██╗ ██╔╝██╔══██║██║                    ║',
    '║       ██║   ╚██████╔╝ ╚████╔╝ ██║  ██║███████╗               ║',
    '║       ╚═╝    ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝               ║',
    '║                                                               ║',
    '║               FULL STACK SOFTWARE ENGINEER                    ║',
    '║                   AMSTERDAM, NETHERLANDS                      ║',
    '╚═══════════════════════════════════════════════════════════════╝',
    '',
    'yuval@amsterdam:~$ cat /proc/cpuinfo | head -10',
    '',
    '┌─ SYSTEM SPECIFICATIONS ───────────────────────────────────────┐',
    '│ Name:           Yuval Pappie                                  │',
    '│ Location:       Amsterdam, NL                                │',
    '│ Status:         Building the future                         │',
    '│ Role:           Full Stack Software Engineer                  │',
    '│ Background:     MSc Business Analytics (VU Amsterdam)        │',
    '│ Interests:      [AI, Startups, Tech]                        │',
    '│ Runtime:        Available for new opportunities              │',
    '└───────────────────────────────────────────────────────────────┘',
    '',
    'yuval@amsterdam:~$ ls -la /dev/contact/',
    '',
    'drwxr-xr-x 3 yuval yuval  4096 Mar  1 13:18 .',
    'drwxr-xr-x 8 root  root   4096 Mar  1 13:18 ..',
    '-rw-r--r-- 1 yuval yuval    42 Mar  1 13:18 email.link',
    '-rw-r--r-- 1 yuval yuval    38 Mar  1 13:18 linkedin.link', 
    '-rw-r--r-- 1 yuval yuval    35 Mar  1 13:18 github.link',
    '',
    'yuval@amsterdam:~$ cat /dev/contact/*.link',
    '',
    '📧 EMAIL    → yuval.pappie@gmail.com',
    '💼 LINKEDIN → linkedin.com/in/yuvalpappie',  
    '👨‍💻 GITHUB   → github.com/Yuvalpappie',
    '',
    'yuval@amsterdam:~$ uptime && exit',
    '',
    '⚡ System online • Ready for collaboration • All systems green',
    '',
    'Connection terminated by user. Thanks for visiting! 🚀',
  ], [])

  const contactLinks = {
    'yuval.pappie@gmail.com': 'mailto:yuval.pappie@gmail.com',
    'linkedin.com/in/yuvalpappie': 'https://linkedin.com/in/yuvalpappie', 
    'github.com/Yuvalpappie': 'https://github.com/Yuvalpappie'
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < lines.length) {
        const currentText = lines[currentLine]
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setDisplayText('')
          setCurrentLine(currentLine + 1)
        }
      }
    }, currentLine < 6 ? 80 : 40) // Slower for boot sequence

    return () => clearInterval(timer)
  }, [currentLine, displayText, lines])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(!showCursor)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [showCursor])

  // Terminal glow effect
  useEffect(() => {
    const glowTimer = setInterval(() => {
      setTerminalGlow(!terminalGlow)
    }, 2000)
    return () => clearInterval(glowTimer)
  }, [terminalGlow])

  const handleContactClick = (line) => {
    Object.entries(contactLinks).forEach(([text, url]) => {
      if (line.includes(text)) {
        window.open(url, '_blank')
      }
    })
  }

  const isClickableLine = (line) => {
    return Object.keys(contactLinks).some(contact => line.includes(contact))
  }

  return (
    <div className="mb-8 sm:mb-12">
      {/* CRT Monitor Frame */}
      <div className="relative">
        {/* Outer CRT bezel */}
        <div className={`bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl transition-all duration-1000 ${
          terminalGlow ? 'shadow-green-400/30' : 'shadow-black/50'
        }`}>
          {/* Inner screen with curvature */}
          <div className="relative bg-black rounded-lg overflow-hidden" style={{
            boxShadow: 'inset 0 0 50px rgba(0, 255, 65, 0.1), 0 0 30px rgba(0, 255, 65, 0.2)'
          }}>
            
            {/* Screen glare effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />
            
            {/* Enhanced scanlines */}
            <div className="absolute inset-0 pointer-events-none z-20" style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.03) 2px, rgba(0, 255, 65, 0.03) 4px)',
              animation: 'scanlines 0.1s linear infinite'
            }} />

            {/* Terminal window */}
            <div className="bg-black border-2 border-green-400/50 rounded-lg overflow-hidden">
              
              {/* Terminal header with enhanced styling */}
              <div className="flex items-center justify-between bg-gray-900 border-b border-green-400/50 p-3">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  <span className="ml-4 text-green-400 text-xs sm:text-sm font-mono">
                    root@yuval-portfolio:~# █
                  </span>
                </div>
                <div className="text-green-400/70 text-xs">
                  [{new Date().toISOString().split('T')[0]}]
                </div>
              </div>

              {/* Enhanced terminal content */}
              <div className="p-4 sm:p-6 min-h-[400px] sm:min-h-[500px] overflow-x-auto font-mono">
                {lines.slice(0, currentLine).map((line, index) => (
                  <div key={index} className="flex mb-1">
                    <span 
                      className={`
                        ${line.startsWith('>') ? 'text-cyan-400' : ''}
                        ${line.startsWith('yuval@') ? 'text-yellow-400 font-bold' : ''}
                        ${line.includes('╔') || line.includes('║') || line.includes('╚') ? 'text-green-300 font-bold' : ''}
                        ${line.includes('┌') || line.includes('│') || line.includes('└') ? 'text-blue-400' : ''}
                        ${line.includes('YUVAL') && line.includes('██') ? 'text-green-400 font-bold' : ''}
                        ${line.includes('FULL STACK') || line.includes('AMSTERDAM') ? 'text-gray-300 font-bold' : ''}
                        ${line.includes('drwx') || line.includes('-rw-') ? 'text-blue-300' : ''}
                        ${line.includes('EMAIL') || line.includes('LINKEDIN') || line.includes('GITHUB') ? 'text-white font-bold' : ''}
                        ${line.includes('System online') ? 'text-green-400 font-bold animate-pulse' : ''}
                        ${line.includes('Thanks for visiting') ? 'text-cyan-400 animate-pulse' : ''}
                        ${isClickableLine(line) ? 'hover:text-yellow-300 cursor-pointer hover:bg-green-900/20 px-1 rounded transition-all' : ''}
                        whitespace-pre text-xs sm:text-sm leading-relaxed
                      `}
                      onClick={() => isClickableLine(line) && handleContactClick(line)}
                    >
                      {line}
                    </span>
                  </div>
                ))}
                
                {currentLine < lines.length && (
                  <div className="flex mb-1">
                    <span className={`
                      ${lines[currentLine]?.startsWith('>') ? 'text-cyan-400' : ''}
                      ${lines[currentLine]?.startsWith('yuval@') ? 'text-yellow-400 font-bold' : ''}
                      ${lines[currentLine]?.includes('╔') || lines[currentLine]?.includes('║') || lines[currentLine]?.includes('╚') ? 'text-green-300 font-bold' : ''}
                      ${lines[currentLine]?.includes('┌') || lines[currentLine]?.includes('│') || lines[currentLine]?.includes('└') ? 'text-blue-400' : ''}
                      ${lines[currentLine]?.includes('YUVAL') && lines[currentLine]?.includes('██') ? 'text-green-400 font-bold' : ''}
                      ${lines[currentLine]?.includes('FULL STACK') || lines[currentLine]?.includes('AMSTERDAM') ? 'text-gray-300 font-bold' : ''}
                      ${lines[currentLine]?.includes('drwx') || lines[currentLine]?.includes('-rw-') ? 'text-blue-300' : ''}
                      ${lines[currentLine]?.includes('EMAIL') || lines[currentLine]?.includes('LINKEDIN') || lines[currentLine]?.includes('GITHUB') ? 'text-white font-bold' : ''}
                      ${lines[currentLine]?.includes('System online') ? 'text-green-400 font-bold animate-pulse' : ''}
                      ${lines[currentLine]?.includes('Thanks for visiting') ? 'text-cyan-400 animate-pulse' : ''}
                      whitespace-pre text-xs sm:text-sm leading-relaxed
                    `}>
                      {displayText}
                      {showCursor && <span className="bg-green-400 text-black animate-pulse">█</span>}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RGB glow effect around monitor */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 rounded-2xl opacity-20 blur-sm -z-10 animate-pulse"></div>
      </div>

      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  )
}