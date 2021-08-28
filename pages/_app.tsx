import ReactGA from 'react-ga4'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import type { AppProps } from 'next/app'

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) return

    // Initialize GA.
    const testMode = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_DEBUG === 'true'
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
      testMode,
    })
    ReactGA.set({ anonymizeIp: true })

    // Send Pageview for initial view.
    const url = window.location.pathname + window.location.search
    ReactGA.send({ hitType: 'pageview', page: url })
  }, [])

  /**
   * Send pageView for each page visited by client-side routing.
   */
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) return () => {}

    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: 'pageview', page: url })
    }

    // Subscribe to router changes.
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
