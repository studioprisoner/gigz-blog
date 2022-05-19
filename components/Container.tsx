import Head from 'next/head';
import { useRouter } from 'next/router';

import NavBar from './NavBar';
import Footer from '../components/Footer';

export default function Container(props) {

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