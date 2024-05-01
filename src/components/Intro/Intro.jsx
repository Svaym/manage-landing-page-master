import Title from "../Title";
import Description from "../Description";
import Button from '../Button';
import image from '/public/images/illustration-intro.svg';
export default function Intro() {
  return(
    <section>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 -right-36 -top-24 md:-right-80 md:-top-56" width="814" height="814"><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fill-rule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></svg>
      <div className="container">
        <div className="flex items-center mt-24 md:flex-col-reverse md:gap-y-4 md:mt-12">
          <div>
            <Title>Bring everyone together to build better products.</Title>
            <Description>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</Description>
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