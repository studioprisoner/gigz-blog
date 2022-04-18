import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Continer from '../components/Container';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';

const editUrl = (slug) =>
    `https://github.com/studioprisoner/gigz-blog/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
        `https://gigz.app/blog${slug}`
    )}`;

export default function BlogLayout({
    children,
    post
}: PropsWithChildren<{ post: Blog }>) {
    return (
        <Continer
            title={`${post.title} - Gigz`}
            description={post.summary}
            image={`https://gigz.app${post.image}`}
            date={new Date(post.publishedAt).toISOString()}
            type="article"
        >
            <article className='flex flex-col items-start justify-center w-full max-w-4xl mx-auto mb-16'>
                <h1 className='mb-4 text-3xl font-bold trcking-tight text-gray-900 dark:text-white md:text-5xl'>
                    {post.title}
                </h1>
                <div className='flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center'>
                    <div className='flex items-center'>
                        <Image
                            alt='Josh Illichmann'
                            height={24}
                            width={25}
                            src="/avatar.jpg"
                            className='rounded-full'
                        />
                        <p className='ml-2 text-sm text-gray-900 dark:text-white'>
                            {'Josh Illichmann / '}
                            {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                        </p>
                    </div>
                    <p className='mt-2 text-sm text-gray-900 dark:text-white min-w-32 md:mt-0'>
                        {post.readingTime.text}
                    </p>
                </div>
                <div className='w-full mt-4 prose dark:prose-dark max-w-none'>
                    {children}
                </div>
                <div className='text-sm text-gray-700 dark:text-white mt-6'>
                    <a
                        href={discussUrl(post.slug)}
                        className="hover:text-pink-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Discuss on Twitter'}
                    </a>
                    {` • `}
                    <a
                        href={editUrl(post.slug)}
                        className="hover:text-pink-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Edit on GitHub'}
                    </a>
                </div>
            </article>
        </Continer>
    );
}