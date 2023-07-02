import React from 'react'
import Image from 'next/image';
const Globe = () => {
    return (
        <div>
            <Image
                src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688240929/globe-fotor-2023070211712_di8lee.png'}
                height={500}
                width={500}
                alt='globe'
                className={'h-[200px] lg:h-[130px] md:h-[100px] sm:h-[70px] w-auto rounded-full bg-[white] p-4 xl:mx-12 lg:mx-12 md:mx-10 sm:mx-4'}
            />
        </div>
    )
}
export default Globe