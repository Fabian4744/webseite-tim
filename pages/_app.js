import '@styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application;
