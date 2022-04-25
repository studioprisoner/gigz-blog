
import Container from '../components/Container'
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <Container>
      <div className='py-16'>
        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-6">
              <h1 className="font-bold font-epilogue text-4xl md:text-5xl max-x-xl text-gray-900 dark:text-white leading-light">
                <span className="block xl:inline">Gigz App</span>{' '}
                <span className="block xl:inline text-pink-500">Coming Soon</span>
              </h1>
              <p className="text-gray-900 dark:text-white text-base leading-relaxed mt-8">Gigz is a concert companion that helps you store your memories. Now you will not be able to forget the amazing moments you&#39;ve experienced, just tap the app to make them stick!</p>
              <p className="text-gray-900 dark:text-white text-base leading-relaxed mt-8">Coming soon, sign up to join the waiting list.</p>
              <Subscribe />
            </div>
            <div className="col-span-4 flex justify-center">
              <img
                className=""
                src="/assets/img/iphone-13.png"
                alt="Iphone 13 Pro"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}