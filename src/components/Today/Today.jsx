export default function Today() {
  return(
    <section className="bg-[#f25f3a] mt-24 py-16 bg-pattern bg-no-repeat bg-cover bg-right xxs:bg-pattern-mobile xxs:bg-left-center">
      <div className="container">
        <div className="flex items-center justify-between md:flex-col md:gap-y-4">
          <h2 className=" font-bold text-4xl text-zinc-50 w-[40%] lg:text-2xl md:text-4xl md:text-center md:w-3/4 xs:text-3xl xxs:w-[70%]">
          Simplify how your team works today.
          </h2>
          <button className="relative text-[#f25f3a] bg-zinc-50 py-3 px-5 rounded-full transition duration-300 ease-in hover:brightness-150 active:contrast-200">Get Started</button>
        </div>
      </div>
    </section>
  )
}