import React from 'react'

const index = () => {
  return (
    <section className="bg-[#edecec]">
    <div className="flex sm:flex-col justify-around gap-7">
        
            <div className="w-1/2 sm:w-full pr-8">
                <h1 className="text-4xl text-[#cd7684]">We envision a India “where every woman and every girl, who wants to earn, gets the opportunities
                    to do so.”</h1><br/>
                <p className='text-lg'>
                    For the thousands of stifled women in low-income communities across the country,
                    Srujna is the key to unlocking their power! Srujna touches their lives,
                    by transforming the many groups that work with grassroots women – helping create powerful,
                    enterprising women that produce and sell hand-made products. Together,
                    they provide livelihood opportunities to these low-income women – empowering them to become role
                    models and changemakers in their families and communities.
                </p>
            </div>
        
        <div className="ourEnvision_vdo ">
            <iframe width={560} height={360} src="https://www.youtube.com/embed/5zbe9rYFmbo"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</section>
  )};


export default index