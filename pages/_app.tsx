import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigator from '../components/Navigator'

function MyApp({ Component, pageProps }: AppProps) {
  return(
 <div className='app__container'>
  <div className="app__navbar">
     <Navigator/>
  </div>
  <div className="app__content">
  <Component {...pageProps} />
  </div>
  </div>
)}

export default MyApp
