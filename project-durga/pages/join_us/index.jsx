import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import Globe from '../../components/Globe';
import { HiOutlinePlusSm } from "react-icons/hi";
import CountUp from 'react-countup';

const Index = () => {
  return (
    <>
      <div className="flex justify-around items-center bg-origin-border min-w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('https://www.srujna.org/wp-content/uploads/2021/05/Get-Involved-Page.png')]" >
        <div className='bg-[black] opacity-80 min-w-full min-h-screen flex justify-center items-center ' >
          <div className="flex text-[white] p-8 lg:p-6 md:p-4 sm:p-2 justify-around items-center flex-col opacity-100 leading-5">
            <div className="text-6xl md:text-5xl sm:text-3xl m-4 font-bold ">Work with us</div>
            <div className="text-3xl lg:text-2xl md:text-xl sm:text-lg rounded-2xl border-[white] border-4 p-2 px-4 m-4 hover:bg-main "><Link href='#'> Join us</Link></div>
          </div>
        </div>
      </div>

      {/* Data and figures */}
      <div className='flex justify-center items-center xl:py-52 lg:py-32 md:py-16 sm:py-12 bg-main'>
        <div className='flex flex-wrap justify-around min-w-full sm:flex-col sm:gap-8 sm:justify-center sm:items-center'>
          <Figures count={45} text={'Clients'}/>
          <Figures count={56} text={'Companies for Ngo Mela'}/>
          <Figures count={7} text={'Employee Engagement Events'}/>
          <Figures count={30} text={'Volunteers'}/>
        </div>
      </div>

      {/* Companies Support */}
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
                More than 56 companies and organizations have supported Aadhya, financially and non-financially. We are grateful for their enthusiasm and commitment to the cause and the trust they have placed in us.
              </div>
            </div>


          </div>
        </div>
      </div>


      {/* Celebrity Testimonial */}
      <div className='py-12 text-center'>
        <div className='text-5xl md:text-3xl sm:text-xl text-center py-10'>
          Recommendations
        </div>
        <div className='flex min-w-screen justify-around items-around p-4 md:flex-col sm:flex-col gap-5 md:items-center sm:items-center'>
          <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/Neho6BCJeoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='border-4 border-main rounded-xl md:w-[500px] md:h-[350px] sm:h-[180px] sm:w-[250px]'></iframe>
          <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/CjWd5MZ0HAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='border-4 border-main rounded-xl md:w-[500px] md:h-[350px] sm:h-[180px] sm:w-[250px]'></iframe>
          <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/gupM7RMANZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='border-4 border-main rounded-xl md:w-[500px] md:h-[350px] sm:h-[180px] sm:w-[250px]'></iframe>
        </div>
      </div>
    </>
  )
}

function Figures ({count, text}) {
  return (
    <div className='text-[white] w-1/4 flex flex-col items-center'>
      <div className='text-6xl flex'>
        <CountUp end={count} duration={6}/> <span className='flex items-start '><HiOutlinePlusSm size={25} /></span>
      </div>
      <div className='xl:text-xl lg:text-xl md:text-lg sm:text-base'>
        {text}
      </div>
    </div>
  );
}

export default Index