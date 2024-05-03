import Button from '../Button';
import image from '/public/images/illustration-intro.svg';
export default function Intro() {
  return(
    <section>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 -top-20 right-44 3xl:-right-24 3xl:-top-40 2xl:-right-36 2xl:-top-24 md:-right-80 md:-top-56" width="814" height="814"><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" rx="218" transform="rotate(45 718.814 -291.157)"/></svg>
      <div className="container">
        <div className="flex items-center mt-24 md:flex-col-reverse md:gap-y-4 md:mt-12">
          <div>
            <h1 className="font-bold text-5xl text-blue-950 w-[70%] xl:w-[75%] xl:text-4xl lg:text-3xl lg:w-4/5 md:text-5xl md:text-center md:mx-auto sm:w-full xs:text-4xl">Bring everyone together to build better products.</h1>
            <p className="w-[52%] text-gray-400 mt-8 xl:w-3/4 lg:w-[88%] md:text-center md:mx-auto md:mt-3">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <Button marginTop="2rem" />
          </div>
          <figure>
            <img src={image} className="w-[65rem] lg:w-[60rem] md:w-[40rem]" alt="" />
          </figure>
        </div>
      </div>
    </section>
  )
}