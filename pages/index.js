import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className="flex max-w-[400px] md:max-w-[700px] mx-auto  h-screen mb-12">
      <Head>
        <title>Yuval Pappie</title>
        <meta name="description" content="Yuval Pappie" />
        <link rel="icon" href="/ylogo.png" />
      </Head>


      <div className='flex flex-col w-full mt-16 mb-32 px-6'>

        <Hero />

        <About />

        <Projects />

        <Contact />


      </div>

    </div >
  )
}
