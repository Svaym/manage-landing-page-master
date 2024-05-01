export default function Button({marginTop}) {
  return(
    <>
      <button style={{marginTop:marginTop}} className="bg-[#f25f3a] text-zinc-50 py-3 px-5 rounded-full text-[15px] shadow-md shadow-[#f25f3a]/50 transition-colors duration-300 ease-in hover:bg-[#ec7f68] active:bg-[#eaa090] md:block md:mx-auto">Get Started</button>
    </>
  )
}