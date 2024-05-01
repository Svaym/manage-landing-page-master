export default function Title({children}) {
  return(
    <>
      <h2 className="font-bold text-5xl text-blue-950 w-[70%] xl:w-[75%] xl:text-4xl lg:text-3xl lg:w-4/5 md:text-5xl md:text-center md:mx-auto sm:text-3xl">
        {children}
      </h2>
    </>
  )
}