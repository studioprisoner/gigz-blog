import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { UMAMI_SCRIPT_URL, UMAMI_WEBSITE_ID } from 'lib/umami'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

const isProduction = process.env.NODE_ENV === 'production';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('SDLJKPJJ', {
      includedDomains: ['www.gigz.app', 'gigz.app'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return(
    <ThemeProvider attribute="class">
      {isProduction && <Script src={UMAMI_SCRIPT_URL} data-website-id={UMAMI_WEBSITE_ID} />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}