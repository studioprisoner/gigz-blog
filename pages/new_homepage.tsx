
import NewContainer from '../components/NewContainer'
import Subscribe from '../components/NewSubscribe';

export default function Home() {
  return (
    <NewContainer>
      <div className="mt-16 mx-auto max-w-7xl py-32 px-6 sm:mt-24 sm:px-6 lg:mt-32 sm:py-64 lg:px-0">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-slate-800 sm:text-base lg:text-sm xl:text-base">
                  Coming soon
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-slate-800">Gigz app, </span>
                  <span className="block bg-gradient-to-r from-gigz-orange via-blue-500 to-gigz-pink bg-clip-text text-transparent">store them all.</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-slate-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Gigz is a concert companion that helps you store your memories. Now you will not be able to forget the amazing moments you've experienced, just tap the app to make them stick!
              </p>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             
              <div className="relative mx-auto w-full lg:max-w-md">
                  <img
                    className="w-full"
                    src="/assets/img/gigz-mark-large.png"
                    alt=""
                  />
              </div>
            </div>
          </div>
        </div>
      <Subscribe />
    </NewContainer>
  );
}