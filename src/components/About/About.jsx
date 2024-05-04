import {data} from './data'
export default function About() {
  return(
    <section className='pt-28'>
      <div className="container">
        <div className='flex md:flex-col md:gap-y-7'>
          <div className='relative'>
            <h2 className='font-bold text-4xl text-blue-950 w-3/4 xl:w-[75%] lg:text-2xl lg:w-4/5 md:text-4xl md:text-center md:mx-auto xs:w-[90%] xs:text-3xl'>
              What’s different about Manage?
            </h2>
            <p className="w-[55%] text-gray-400 mt-8 xl:w-3/4 lg:w-[70%] lg:text-[15px] md:text-center md:mx-auto md:mt-3 xs:w-[90%]">
              Manage provides all the functionality your team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.
            </p>
          </div>
          <div className='ml-5 w-2/3 lg:w-full lg:ml-0 xs:px-2'>
            {data.map((item) => (
              <>
                <div key={item.digit} className='flex items-center gap-x-3 lg:gap-x-1 md:justify-center md:gap-x-3'>
                  <h4 className='w-14 h-8 text-center py-1 rounded-full bg-[#f25f3a] text-white lg:text-[15px] lg:w-10 md:w-14 md:text-base'>{item.digit}</h4>
                  <h3 className='font-bold text-blue-950 lg:text-[15px] lg:text-sm md:text-base xs:text-sm'>{item.title}</h3>
                </div>
                <p className='pl-[4.25rem] w-full my-6 text-gray-400 lg:text-[15px] lg:pl-11 lg:w-full lg:text-sm md:pl-0 md:mx-auto md:text-base xs:text-sm'>{item.description}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}