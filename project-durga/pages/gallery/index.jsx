import React from 'react'
import Globe from '../../components/Globe';
import Marquee from "react-fast-marquee";
import Image from 'next/image';


const Index = () => {
  return (
    <>
      <div className='min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-pink-200 flex overflow-hidden justify-start items-start'>
        <div className='w-1/3 text-6xl font-semibold min-h-screen text-main flex justify-center items-start leading-snug'>
          THE <br />POWER<br /> OF<br /> WOMEN 
        </div>
        <div className='flex min-h-screen w-2/3 items-start justify-start bg-black'>
          <Marquee
            autoFill={true}
            direction='up'
            speed={50}
            gradient={false}
            className='min-h-screen'
          >
            <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688371576/mother-teresa-9504160-1-402_x7ywe7.jpg'}
              height={400}
              width={400}
            />
            <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688371576/mother-teresa-9504160-1-402_x7ywe7.jpg'}
              height={400}
              width={400}
            />
            <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688371576/mother-teresa-9504160-1-402_x7ywe7.jpg'}
              height={400}
              width={400}
            />
          </Marquee>
          <Marquee
            autoFill={true}
            direction='down'
            speed={50}
            gradient={false}
            className=''
          >
            <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688371576/mother-teresa-9504160-1-402_x7ywe7.jpg'}
              height={400}
              width={400}
              />
            <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688371576/mother-teresa-9504160-1-402_x7ywe7.jpg'}
              height={400}
              width={400}
              />
            <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688371576/mother-teresa-9504160-1-402_x7ywe7.jpg'}
              height={400}
              width={400}
              />
        </Marquee>
        </div>
      </div>
    </>
  )
}

export default Index