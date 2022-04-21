import Link from 'next/link';
import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import { Views } from '../lib/types';

import type { Blog } from 'contentlayer/generated';

export default function BlogPost({
  title,
  summary,
  slug
}){

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-white">
              {title}
            </h4>
          </div>
          <p className="text-gray-900 dark:text-white dark:white">{summary}</p>
        </div>
      </a>
    </Link>
  );
}