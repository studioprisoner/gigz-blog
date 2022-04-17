import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a 
    className='text-white hover:text-pink-500 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);
  
  export default function Footer() {
    return (
      <footer>
        <div className="flex flex-col justify-center intems-start max-w-2xl mx-auto w-full mb-8">
          <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
            <div className='flex flex-col space-y-4'>
              <Link href='/'>
                <a className='text-white hover:text-pink-500 transition'>Home</a>
              </Link>
              <Link href='/about'>
                <a className='text-white hover:text-pink-500 transition'>About</a>
              </Link>
              <Link href='/blog'>
                <a className='text-white hover:text-pink-500 transition'>Blog</a>
              </Link>
            </div>
            <div className='flex flex-col spayce-y-4'>
              <ExternalLink href="https://twitter.com/gigz_app">
                Twitter
              </ExternalLink>
              <ExternalLink href="https://instagram.com/gigz_app">
                Instagram
              </ExternalLink>
              <ExternalLink href="https://facebook.com/gigzappau">
                Facebook
              </ExternalLink>
            </div>
          </div>
        </div>
      </footer>
    )
  }