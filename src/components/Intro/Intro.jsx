import Button from '../Button';
import image from '/public/images/illustration-intro.svg';
export default function Intro() {
  return(
    <section className=''>
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