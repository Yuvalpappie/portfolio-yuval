import Head from 'next/head'
import Terminal from '../components/Terminal'
import Timeline from '../components/Timeline'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      <Head>
        <title>yuval@amsterdam:~$ whoami</title>
        <meta name="description" content="Yuval Pappie - Full Stack Engineer & AI Enthusiast" />
        <link rel="icon" href="/terminal-icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Matrix rain background */}
      <div className="matrix-bg fixed inset-0 z-0 opacity-10" />
      
      {/* Scanlines effect */}
      <div className="scanlines fixed inset-0 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 py-8">
        <Terminal />
        <Timeline />
        <Skills />
        <Contact />
      </div>

      <style jsx>{`
        .matrix-bg {
          background: 
            linear-gradient(90deg, transparent 98%, #00ff41 99%, #00ff41 100%),
            linear-gradient(180deg, transparent 98%, #00ff41 99%, #00ff41 100%);
          background-size: 20px 20px;
          animation: matrix 20s linear infinite;
        }
        
        .scanlines {
          background: linear-gradient(transparent 50%, rgba(0, 255, 65, 0.03) 50%);
          background-size: 100% 4px;
          animation: scanlines 0.1s linear infinite;
        }

        @keyframes matrix {
          0% { background-position: 0 0; }
          100% { background-position: 20px 20px; }
        }

        @keyframes scanlines {
          0% { background-position: 0 0; }
          100% { background-position: 0 4px; }
        }
      `}</style>
    </div>
  )
}