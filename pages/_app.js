import '../styles/globals.css'
import { ParallaxProvidxer } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvidxer scrollAxis='vertical'>
      <Component {...pageProps} />
    </ParallaxProvidxer>
  )
}

export default MyApp
