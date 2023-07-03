import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import Globe from '../../components/Globe';

const Contact = () => {
  return (
    <>

      <div className="flex justify-around items-center bg-origin-border min-w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('https://images.livemint.com/img/2022/03/07/1600x900/LSpic_1646677330637_1646677340040.jpg')]" >
        <div className='bg-[black] opacity-80 min-w-full min-h-screen flex justify-center items-center ' >
          <div className="flex text-[white] p-8 lg:p-6 md:p-4 sm:p-2 justify-around items-center flex-col opacity-100 leading-5">
            <div className="text-6xl md:text-5xl sm:text-3xl m-4 font-bold ">Donate Us</div>
            <div className="text-3xl lg:text-2xl md:text-xl sm:text-lg m-4 text-center font-bold">Help make a difference!</div>
            <div className="text-3xl lg:text-2xl md:text-xl sm:text-lg rounded-2xl border-[white] border-4 p-2 px-4 m-4 hover:bg-main "><Link href='#'> Donate Now</Link></div>
          </div>
        </div>
      </div>


      <div className='flex flex-col justify-center items-center gap-2 min-w-screen py-20 text-center px-2'>
        <div className='text-3xl md:text-2xl sm:text-2xl font-medium'>Contribute to Aadhya</div>
        <div className='text-xl md:text-lg sm:text-lg opacity-40 font-semibold'>There are many reasons why 56 companies and 155 individuals have chosen to contribute to Srujna.</div>
      </div>


      <div className='flex justify-center items-center max-w-[100%]'>
        <div className='flex justify-center xl:leading-8 lg:leading-6 flex-wrap'>
          <div className='p-4 text-center xl:max-w-[25%] lg:max-w-[35%] md:max-w-[40%] sm:max-w-[100%] flex-none'>
            <div className='flex justify-center items-center'>
              <Image
                src={'https://www.srujna.org/wp-content/uploads/2019/03/keyword.png'}
                height={400}
                width={400}
                className={'h-[100px] w-auto sm:w-auto sm:h-[100px]'}
              />
            </div>
            <div className='text-xl md:text-lg sm:text-lg font-medium p-2 sm:p-0'>
              Guidestar Transparency Key
            </div>
            <div className='text-md sm:text-sm opacity-40 font-semibold'>
              GuideStar India is India's largest and most reliable online information repository. We have been awarded the prestigious GuideStarIndia Transparency Key award for 2018 and have joined India's largest pool of credible NGOs after undergoing a rigorous due diligence process.
            </div>
          </div>
          <div className='p-4 text-center xl:max-w-[25%] lg:max-w-[35%] md:max-w-[40%] sm:max-w-[100%] flex-none'>
            <div className='flex justify-center items-center px-12'>
              <Image
                src={'https://www.srujna.org/wp-content/uploads/2019/03/award.png'}
                height={400}
                width={400}
                className={'h-[100px] w-auto sm:w-auto sm:h-[100px]'}
              />
            </div>
            <div className='text-xl md:text-lg sm:text-lg font-medium p-2 sm:p-0'>
              India Sustainability Leadership Awards Certificate of Merit 2018
            </div>
            <div className='text-md sm:text-sm opacity-40 font-semibold'>
              Srujna was presented the with a Certificate of Merit for Contribution to Social Cause & Empowerment by ‘World CSR Day & World Sustainability'. The impact of Srujna's work being represented at a national platform and validated by World CSR Day.
            </div>
          </div>
          <div className='p-4 text-center xl:max-w-[25%] lg:max-w-[35%] md:max-w-[40%] sm:max-w-[100%] flex-none'>
            <div className='flex justify-center items-center px-12'>
              <Image
                src={'https://www.srujna.org/wp-content/uploads/2019/03/donate.png'}
                height={400}
                width={400}
                className={'h-[100px] w-auto sm:w-auto sm:h-[100px]'}
              />
            </div>
            <div className='text-xl md:text-lg sm:text-lg font-medium p-2 sm:p-0'>
              FCRA & 80G
            </div>
            <div className='text-md sm:text-sm opacity-40 font-semibold'>
              We can also receive foreign funds and the donors will get 80G certificate for tax exemption.
            </div>
          </div>
          <div className='p-4 text-center xl:max-w-[25%] lg:max-w-[35%] md:max-w-[40%] sm:max-w-[100%] flex-none'>
            <div className='flex justify-center items-center px-12'>
              <Image
                src={'https://www.srujna.org/wp-content/uploads/2019/03/report.png'}
                height={400}
                width={400}
                className={'h-[100px] w-auto sm:w-auto sm:h-[100px]'}
              />
            </div>
            <div className='text-xl md:text-lg sm:text-lg font-medium p-2 sm:p-0'>
              Third party Audited Accounts
            </div>
            <div className='text-md sm:text-sm opacity-40 font-semibold'>
              We value transparency and accountability. Every year account statements of Srujna are being audited by third party auditors and are published annually in the annual reports, which are available on public domains.
            </div>
          </div>
        </div>
      </div>


      <div className='flex justify-center items-center py-24 px-28 sm:p-4 bg-[#f7f7f7]'>
        <div className='flex justify-around items-center min-w-screen min-h-full gap-10 md:flex-col sm:flex-col '>
          <Image
            src={'https://www.srujna.org/wp-content/uploads/2019/03/Screenshot-2019-01-22-at-10.58.36-AM.png'}
            height={500}
            width={500}
            className={'h-[22vw] w-auto md:w-[70vw] md:h-auto sm:h-[200px] sm:w-auto '}
          />
          <div className='max-w-[35vw] min-h-full flex flex-col justify-around md:max-w-full sm:max-w-full md:text-center sm:text-center sm:text-sm sm:p-0'>
            <div className='text-main text-4xl mb-8'>
              Our Mission
            </div>
            <div className='font-medium opacity-40 leading-8'>
              To provide skills and knowledge to underprivileged women through trainings and workshops, to transform them into independent, confident and contributing members of their families and communities.
            </div>
          </div>
        </div>
      </div>


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
              <div className='text-xl rounded-lg border-[white] border-4 p-2 px-4 m-4 hover:bg-main '><Link href='/join_us'>Join us</Link></div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}
export default Contact