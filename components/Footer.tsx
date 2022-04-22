import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <Link href={href}>
    <a
    className='text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-500 font-epilogue transition'
    target='_blank'
    rel='noopener noreferrer'
    
  >
    {children}</a>
  </Link>
);
  
  export default function Footer() {
    return (
      <footer>
        <div className="flex flex-col justify-center intems-start max-w-4xl mx-auto w-full">
          <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
            <div className='flex flex-col space-y-4'>
               <a href='/' className='text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-500 font-epilogue transition'>Home</a>
                <a href='/blog' className='text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-500 font-epilogue transition'>Blog</a>
            </div>
            <div className='flex flex-col space-y-4'>
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