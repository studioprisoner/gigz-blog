
import Container from '../components/Container'


export default function About() {
  return (
    <Container>
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-md shadow-md">
        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-gigz-purple font-semibold tracking-wide uppercase">About</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gigz-pink sm:text-4xl">
              Meet Josh
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="assets/img/josh.webp"
                    alt="Josh at Kaws Statue"
                    width={507}
                    height={760}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-slate-800">
                Hello! My name is Josh, a freelance designer and frontend developer from Melbourne, Australia and I'm the founder of Gigz.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-slate-800 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Gigz is a little side project of mine that I've been wanting to get off the ground for a while. I'll be challenging myself to design and build the whole application from scratch.
              </p>
              <p>
                I'm currently studying Design at Swinburne University here in Melbourne. This project is part of those studies and linking units to this project.
              </p>
              <h3>Where you can find me?</h3>
              <p>
                You can find me on various platforms on here. Come follow me on Twitter at <a href="https://twitter.com/studioprisoner">@studioprisoner</a>. Check out my projects on <a href="https://github.com/studioprisoner">Github</a>.
              </p>
              <p>
                I love posting my live music content over at Instagram, from stories to photos - <a href="https://instagram.com/studioprisoner">@studioprisoner</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}