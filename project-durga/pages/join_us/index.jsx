import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import Globe from '../../components/Globe';

const Index = () => {
  return (
    <>
      <div className="bg-origin-border min-w-screen xl:min-h-screen lg:min-h-screen md:min-h-fit bg-center bg-cover bg-no-repeat bg-[url('https://www.srujna.org/wp-content/uploads/2019/03/resourcebanner.jpeg')]">
        <div className="min-h-screen min-w-screen bg-[black] opacity-80 flex justify-center items-center xl:px-20 lg:px-4 md:px-2 sm:px-2 xl:py-10 lg:py-8 md:py-4 sm:py-2">

          <div className='flex xl:min-h-screen lg:min-h-screen md:min-h-fit min-w-full sm:text-center md:flex-col sm:flex-col items-center'>

            <div className='flex flex-col justify-around items-center xl:w-1/2 lg:w-1/2 sm:min-w-full'>
              <div className='flex items-center justify-between'>
                <Globe />
                <Globe />
              </div>
              <div className='flex items-center justify-between'>
                <Globe />
              </div>
              <div className='flex items-center justify-between'>
                <Globe />
                <Globe />
              </div>
            </div>


            <div className='min-h-full flex flex-col justify-center text-[white] xl:w-1/2 lg:w-1/2 items-center'>
              <div className='text-main font-medium text-4xl lg:text-3xl md:text-2xl sm:text-xl my-8'>
                Our Supporters
              </div>
              <div className=' text-xl lg:text-lg md:text-md sm:text-sm font-medium leading-8 text-center'>
                More than 56 companies and organizations have supported Srujna, financially and non-financially. We are grateful for their enthusiasm and commitment to the cause and the trust they have placed in us.
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Celebrity Testimonial */}
      
      <div className='flex min-w-screen justify-around items-around p-4'>
        <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/Neho6BCJeoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/CjWd5MZ0HAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/gupM7RMANZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <div className='min-w-[360px] min-h-[280px] bg-[red]'>hello</div>
        <div className='min-w-[360px] min-h-[280px] bg-[red]'>hello</div>
        <div className='min-w-[360px] min-h-[280px] bg-[red]'>hello</div> */}
      </div>
    </>
  )
}

export default Index