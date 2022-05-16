import Head from 'next/head';
import { useRouter } from 'next/router';
import { FEATURE_FLAGS } from '@lib/constants'
import { getPostHogInstance } from '@lib/posthog'
import { getFeatureFlagVariant } from '@lib/posthog-node'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import NavBar from './NavBar';
import Footer from '../components/Footer';

export default function Container(props) {

    const resetVariant = () => {
        const posthog = getPostHogInstance()
        posthog.reset(true)
        window.location.reload()
      }

    const [homePageAvailable, setHomePageAvailable] = useState(false)

      useEffect(() => {
        const checkHomePageAvailability = async () => {
          const available = (await getFeatureFlagVariant(
            Cookies.get('distinct_id'),
            FEATURE_FLAGS.NEW_INDEX_PAGE
          ))
            ? true
            : false
          setHomePageAvailable(available)
        }
    
        checkHomePageAvailability()
      }, [])

    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: 'Gigz App | Coming Soon.',
        description: `Gigz is a companion app to help you remember your live music memories`,
        image: '/assets/img/gigz-card.jpg',
        type: 'website',
        ...customMeta
    };

    return (
        <div className='relative bg-white bg-speaker-pattern bg-pattern'>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://gigz.app${router.asPath}`} />
                <link rel="canonical" href={`https://gigz.app${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Gigz App" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@gigz_app" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <NavBar />            
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}