import { useState } from "react";
import {comment} from "./comment";
export default function Slider() {
  const [slide, setSlide] = useState(1);
  function showSlide(id) {
    setSlide(id)
  }
  return(
    <section>
      <h2 className="text-center mt-24 font-bold text-4xl text-blue-950 lg:text-2xl md:text-4xl xs:text-3xl">What they’ve said</h2>
      {comment.map((item, id) => (
        <>
        <div key={id} className={slide == id ? "bg-zinc-50 mt-20 p-16 relative w-1/2 mx-auto animate-fade-in" : "hidden"}>
          <img className="h-28 mx-auto absolute -mt-14 top-0 left-0 right-0" src={item.image} alt="" />
          <h3 key={item.name} className='font-bold text-blue-950 text-center lg:text-[15px] lg:text-sm md:text-base xs:text-sm'>{item.name}</h3>
          <blockquote className='text-center mt-4 text-gray-400 mx-auto'>{item.comment}</blockquote>
        </div>
        </>
      ))}
      <div className="flex gap-x-4 justify-center mt-8">
        <button onClick={() => setSlide(0)} className={slide === 0 ? 'bg-[#f25f3a] border-2 rounded-full border-[#f25f3a] p-2' : 'border-2 rounded-full border-[#f25f3a] p-2 transition duration-300 ease-out hover:border-orange-300'}></button>
        <button onClick={() => setSlide(1)} className={slide === 1 ? 'bg-[#f25f3a] border-2 rounded-full border-[#f25f3a] p-2' : 'border-2 rounded-full border-[#f25f3a] p-2 transition duration-300 ease-out hover:border-orange-300'}></button>
        <button onClick={() => setSlide(2)} className={slide === 2 ? 'bg-[#f25f3a] border-2 rounded-full border-[#f25f3a] p-2' : 'border-2 rounded-full border-[#f25f3a] p-2 transition duration-300 ease-out hover:border-orange-300'}></button>
        <button onClick={() => setSlide(3)} className={slide === 3 ? 'bg-[#f25f3a] border-2 rounded-full border-[#f25f3a] p-2' : 'border-2 rounded-full border-[#f25f3a] p-2 transition duration-300 ease-out hover:border-orange-300'}></button>
      </div>
      <button className="bg-[#f25f3a] mt-8 text-zinc-50 py-3 px-5 mx-auto block rounded-full text-[15px] shadow-md shadow-[#f25f3a]/50 transition-colors duration-300 ease-in hover:bg-[#ec7f68] active:bg-[#eaa090] md:block md:mx-auto">Get Started</button>
    </section>
  )
}