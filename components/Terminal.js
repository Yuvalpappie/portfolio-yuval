import { useEffect, useMemo, useState } from 'react'

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const lines = useMemo(() => [
    '> initializing connection...',
    '> loading profile data...',
    '> access granted.',
    '',
    '╔═══════════════════════════════════════════════════════════════╗',
    '║                      YUVAL PAPPIE                             ║',
    '║                 Full Stack Engineer                           ║',
    '╚═══════════════════════════════════════════════════════════════╝',
    '',
    'yuval@amsterdam:~$ cat /etc/about.txt',
    '',
    '┌─ SYSTEM INFO ─────────────────────────────────────────────────┐',
    '│ Name:           Yuval Pappie                                  │',
    '│ Location:       Amsterdam, NL                                 │',
    '│ Role:           Full Stack Software Engineer                  │',
    '│ Background:     MSc Business Analytics (VU Amsterdam)         │',
    '│ Interests:      [AI, Startups, Tech]                          │',
    '└───────────────────────────────────────────────────────────────┘',
  ], [])

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
    }, 50)

    return () => clearInterval(timer)
  }, [currentLine, displayText, lines])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(!showCursor)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [showCursor])

  const getPrompt = (index) => {
    if (lines[index]?.startsWith('>')) return lines[index]
    if (lines[index]?.startsWith('yuval@')) return lines[index]
    return lines[index]
  }

  return (
    <div className="mb-4">
      <div className="bg-gray-900 border-2 border-green-400 rounded-lg p-3 sm:p-6 shadow-2xl overflow-x-auto">
        {/* Terminal header */}
        <div className="flex items-center mb-4 border-b border-green-400 pb-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-4 text-green-400 text-sm">
            terminal@yuval-portfolio:~$
          </div>
        </div>

        {/* Terminal content */}
        <div className="space-y-1 min-h-[300px] sm:min-h-[400px] overflow-x-auto">
          {lines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="flex">
              <span className={`
                ${line.startsWith('>') ? 'text-cyan-400' : ''}
                ${line.startsWith('yuval@') ? 'text-yellow-400' : ''}
                ${line.includes('╔') || line.includes('║') || line.includes('╚') ? 'text-green-300 font-bold' : ''}
                ${line.includes('┌') || line.includes('│') || line.includes('└') ? 'text-blue-400' : ''}
                ${line.includes('YUVAL PAPPIE') ? 'text-white font-bold text-center' : ''}
                ${line.includes('Full Stack Engineer') || line.includes('Amsterdam, Netherlands') ? 'text-gray-300 text-center' : ''}
                whitespace-pre text-xs sm:text-sm
              `}>
                {line}
              </span>
            </div>
          ))}
          
          {currentLine < lines.length && (
            <div className="flex">
              <span className={`
                ${lines[currentLine]?.startsWith('>') ? 'text-cyan-400' : ''}
                ${lines[currentLine]?.startsWith('yuval@') ? 'text-yellow-400' : ''}
                ${lines[currentLine]?.includes('╔') || lines[currentLine]?.includes('║') || lines[currentLine]?.includes('╚') ? 'text-green-300 font-bold' : ''}
                ${lines[currentLine]?.includes('┌') || lines[currentLine]?.includes('│') || lines[currentLine]?.includes('└') ? 'text-blue-400' : ''}
                ${lines[currentLine]?.includes('YUVAL PAPPIE') ? 'text-white font-bold' : ''}
                ${lines[currentLine]?.includes('Full Stack Engineer') || lines[currentLine]?.includes('Amsterdam, Netherlands') ? 'text-gray-300' : ''}
                whitespace-pre text-xs sm:text-sm
              `}>
                {displayText}
                {showCursor && <span className="bg-green-400 text-black">█</span>}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}