import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import Cookies from 'js-cookie'
import { usePostHog } from '@lib/posthog'
import { PostHog } from 'posthog-js'


export default function App({ Component, pageProps }: AppProps) {

  usePostHog(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_API_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    loaded: (posthog: PostHog) => {
      // Set the distinct_id being used by PostHog on the client
      // so we can also use on the server.
      Cookies.set('distinct_id', posthog.get_distinct_id())
    },
  })

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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}