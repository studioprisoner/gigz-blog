import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';

import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

function NavItem({ href, text }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
            <a  href={href}
                className={cn(
                    isActive
                    ? 'font-semibold font-epilogue text-gray-900 dark:text-white dark:hover:text-pink-500'
                    : 'font-normal font-epilogue text-gray-900 dark:text-white dark:hover:text-pink-500',
                    'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:text-pink-500 dark:hover:text-pink-500 transition-all'
                )}
                >
                    <span className='capsize'>{text}</span>
                </a>
    );
}

export default function Container(props) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    //After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

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
        <div className='min-h-screen bg-hero-background-light dark:bg-hero-background bg-cover'>
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
            <div className='flex flex-col justify-center px-8'>
                <nav className='flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:text-gray-100'>
                    <div className='flex items-center'>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="300" height="100"
                                viewBox="0 0 300 100"
                                className='fill-gray-900 dark:fill-white'>
                            <path d="M141.668 69.8c-4.2 0-8.028-1.044-11.484-3.132-3.432-2.112-6.168-5.184-8.208-9.216-2.016-4.056-3.024-9.036-3.024-14.94 0-5.88 1.068-10.86 3.204-14.94s5.004-7.188 8.604-9.324c3.624-2.136 7.668-3.204 12.132-3.204 3.72 0 6.864.6 9.432 1.8 2.592 1.2 4.692 2.736 6.3 4.608 1.632 1.872 2.82 3.852 3.564 5.94.744 2.064 1.116 3.972 1.116 5.724v.432h-10.872v-.432a9.206 9.206 0 0 0-.612-3.276 8.602 8.602 0 0 0-1.836-2.952c-.792-.864-1.788-1.56-2.988-2.088-1.176-.528-2.544-.792-4.104-.792-2.112 0-4.128.6-6.048 1.8-1.92 1.2-3.492 3.156-4.716 5.868-1.224 2.688-1.836 6.3-1.836 10.836 0 3.456.336 6.36 1.008 8.712.696 2.352 1.62 4.236 2.772 5.652 1.152 1.392 2.46 2.4 3.924 3.024 1.488.624 3.024.936 4.608.936 2.184 0 4.008-.36 5.472-1.08 1.488-.744 2.652-1.656 3.492-2.736.84-1.08 1.38-2.148 1.62-3.204V50.36h-10.512v-8.064h20.412v26.64h-5.868l-1.008-5.868c-.192.456-.6 1.056-1.224 1.8s-1.512 1.5-2.664 2.268c-1.128.744-2.58 1.368-4.356 1.872-1.752.528-3.852.792-6.3.792ZM171.604 68.936V30.704h11.052v38.232h-11.052Zm5.508-44.46c-1.728 0-3.24-.456-4.536-1.368-1.272-.912-1.908-2.196-1.908-3.852 0-1.68.636-2.976 1.908-3.888 1.296-.912 2.808-1.368 4.536-1.368 1.752 0 3.264.456 4.536 1.368 1.296.912 1.944 2.208 1.944 3.888 0 1.68-.648 2.976-1.944 3.888-1.272.888-2.784 1.332-4.536 1.332ZM217.267 64.4c2.352.24 4.404.696 6.156 1.368 1.776.648 3.156 1.62 4.14 2.916.984 1.272 1.476 2.976 1.476 5.112 0 2.472-.816 4.572-2.448 6.3-1.608 1.752-3.972 3.084-7.092 3.996-3.12.912-6.9 1.368-11.34 1.368-6.552 0-11.628-.948-15.228-2.844-3.576-1.872-5.364-4.38-5.364-7.524 0-.888.096-1.692.288-2.412.216-.696.48-1.296.792-1.8l10.152 1.476c-.12.168-.252.42-.396.756-.12.36-.18.804-.18 1.332 0 1.272.948 2.22 2.844 2.844 1.92.624 4.392.936 7.416.936 2.136 0 3.96-.156 5.472-.468 1.536-.288 2.7-.72 3.492-1.296.816-.576 1.224-1.236 1.224-1.98 0-1.08-.528-1.788-1.584-2.124-1.032-.336-2.232-.576-3.6-.72l-14.472-1.476c-2.664-.264-4.872-1.032-6.624-2.304-1.752-1.272-2.628-2.988-2.628-5.148 0-1.344.372-2.568 1.116-3.672.744-1.128 1.596-2.052 2.556-2.772.96-.744 1.764-1.212 2.412-1.404l5.688 2.88c-.456.072-.996.36-1.62.864-.6.504-.9 1.092-.9 1.764 0 .672.336 1.248 1.008 1.728.696.48 1.956.804 3.78.972l13.464 1.332Zm3.78-33.696h9.828l-3.996 14.688c-.744 2.784-1.848 5.268-3.312 7.452-1.464 2.16-3.42 3.864-5.868 5.112-2.424 1.248-5.484 1.872-9.18 1.872-3.888 0-7.26-.6-10.116-1.8-2.832-1.2-5.016-2.892-6.552-5.076-1.536-2.208-2.304-4.812-2.304-7.812s.78-5.64 2.34-7.92c1.584-2.28 3.732-4.056 6.444-5.328 2.736-1.272 5.832-1.908 9.288-1.908 2.616 0 5.004.432 7.164 1.296 2.184.84 3.936 1.956 5.256 3.348 1.344 1.392 2.04 2.928 2.088 4.608l-2.052.54.972-9.072Zm-12.6 20.952c1.584 0 2.976-.252 4.176-.756 1.2-.528 2.136-1.284 2.808-2.268.672-1.008 1.008-2.22 1.008-3.636 0-1.392-.336-2.58-1.008-3.564-.672-.984-1.608-1.74-2.808-2.268-1.2-.528-2.592-.792-4.176-.792-1.512 0-2.88.276-4.104.828-1.2.528-2.148 1.296-2.844 2.304-.696.984-1.044 2.184-1.044 3.6 0 1.392.336 2.58 1.008 3.564.672.96 1.608 1.704 2.808 2.232 1.2.504 2.592.756 4.176.756ZM246.057 60.188h20.736v8.748h-32.688v-8.28l20.232-21.636.252.396h-19.764v-8.712h31.536v8.28l-20.052 21.564-.252-.36ZM34.726 30.448l4.384-4.722c.787-.675 2.968-1.484 5.397.674l3.844 3.364a2 2 0 0 1 .147 2.868l-6.289 6.754a2 2 0 0 1-2.877.052L35.4 35.507c-2.158-2.159-1.349-4.272-.674-5.06ZM64.076 25.347l6.627.022c1.059.124 3.192 1.209 3.253 4.55l.14 5.31a2 2 0 0 1-2.008 2.052l-9.609-.044a2 2 0 0 1-1.989-2.08l.233-5.772c.126-3.137 2.288-3.999 3.353-4.038ZM100.254 28.099l-6.234-2.184c-1.016-.311-3.333-.206-4.477 2.707l-2.1 5.353a2 2 0 0 0 1.198 2.617l9.02 3.174a2 2 0 0 0 2.571-1.281l1.6-5.04c1.033-3.166-.622-4.883-1.578-5.346ZM50.12 34.686l7.643 3.243c.554.235.829.86.626 1.427l-5.792 16.22c-.344.962-1.685 1.017-2.105.085l-6.486-14.362a1.136 1.136 0 0 1 .194-1.232l4.636-5.1c.325-.356.84-.47 1.284-.28ZM79.785 47.843l7.692-9.09a2 2 0 0 1 2.2-.592l4.85 1.733a2 2 0 0 1 1.242 2.465L89.15 64.134c-.547 1.8-3.049 1.918-3.764.18l-5.925-14.419a2 2 0 0 1 .323-2.052ZM61.293 40.104l-10.08 31.498a2 2 0 0 0 1.905 2.61H82.9a2 2 0 0 0 1.852-2.756L71.9 39.958a2 2 0 0 0-1.852-1.244h-6.852a2 2 0 0 0-1.904 1.39Z"/>
                            </svg>
                        </div>
                        <div className='ml-[-0.60rem'>
                        <MobileMenu />
                        <NavItem href='/' text="Home" />
                        <NavItem href='/blog' text="Blog" />
                    </div>
                    </div>
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="w-9 h-9 bg-pink-300 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-pink-600  transition-all"
                        onClick={() =>
                        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                        }
                    >
                        {mounted && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5 text-pink-600 dark:text-gray-200"
                        >
                            {resolvedTheme === 'dark' ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                            ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                            )}
                        </svg>
                        )}
                    </button>
                </nav>
            </div>
            <main
                id="skip"
                className='felx flex-col justify-center px-8'
            >
                {children}
                <Footer />
            </main>
        </div>
    );
}