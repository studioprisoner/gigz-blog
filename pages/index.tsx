
import Container from '../components/Container'

export default function Home() {
  return (
    <Container>
      <div className='py-16'>
        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-6">
              <h1 className="font-bold font-epilogue text-4xl md:text-5xl max-x-xl text-white leading-light">
                <span className="block xl:inline">Gigz App</span>{' '}
                <span className="block xl:inline text-pink-500">Coming Soon</span>
              </h1>
              <p className="text-white text-base leading-relaxed mt-8">Gigz is a concert companion that helps you store your memories. Now you won’t be able to forget the amazing moments you've experiencd, just tap the app to make them stick!</p>
              <p className="text-white text-base leading-relaxed mt-8">Coming soon, sign up to join the waiting list.</p>
              <form className="sm:flex pt-8"
              action="https://buttondown.email/api/emails/embed-subscribe/studioprisoner"
              method="post"
              target="_self"
              onSubmit="window.open('https://buttondown.email/studioprisoner', 'popupwindow')"
              >
              <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-500 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0" type="submit" value="Subscribe">Notify Me</button>
              </form>
            </div>
            <div className="col-span-6 flex justify-center">
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