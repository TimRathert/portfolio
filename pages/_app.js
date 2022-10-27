import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { GoogleAnalytics } from 'nextjs-google-analytics'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <GoogleAnalytics trackPageViews/>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
