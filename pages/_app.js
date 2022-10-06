import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Transition from './../components/Transitions';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Transition>
        <Navbar />
        <Component {...pageProps} />
      </Transition>
    </>
  )
}

export default MyApp
