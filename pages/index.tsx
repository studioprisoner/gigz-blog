
import Container from '../components/Container'
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <Container>
      <div className='relative max-w-3xl mx-auto py-16 px-6 flex flex-col items-center text-center sm:py-32 lg:px-0'>
          <h1 className='text-6xl tracking-tight font-extrabold text-slate-800 sm:text-5xl md:text-8xl'>
            <span>Gigz app, </span>
            <span className='bg-gradient-to-r from-gigz-purple via-blue-500 to-gigz-pink bg-clip-text text-transparent'>store them all</span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-base text-slate-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
          Gigz is a concert companion that helps you store your memories. Now you will not be able to forget the amazing moments you've experienced, just tap the app to make them stick!
          </p>
          <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
            <p className='uppercase text-2xl text-slate-800 font-bold sm:text-4xl'>Coming Soon</p>
        </div>
      </div>
      <Subscribe />
    </Container>
  );
}