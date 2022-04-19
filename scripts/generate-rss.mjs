import { writeFileSync } from 'fs';
import dynamic from 'next/dynamic';
import RSS from 'rss';

const allBlogs = dynamic(() => import('../.contentlayer/generatedallblogs.mjs'))

async function generate() {
  const feed = new RSS({
    title: 'Gigz App',
    site_url: 'https://gigz.app',
    feed_url: 'https://gigz.app/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://gigz.app/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();