import React from 'react'
import Image from 'next/image'
import Globe from '@/components/Globe'
import Link from 'next/link'
const Index = () => {
  return (
    <>
    <div>
   
    
    <div className="flex justify-around items-center bg-origin-border min-w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/ddtzbznea/image/upload/v1687695328/women_ilfvsz.jpg')]">
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gradient-to-r from-[#e1098356] to-[#e1098356] ">
      <h2 className="text-[white] text-6xl font-semibold mb-4">About Us</h2>
      <h4 className="text-[white] text-3xl mb-8">Helping create livelihood opportunities for<br />women across India, since 2011.</h4>
      {/* <a href="" className="bg-[white] text-[black] py-2 px-4 rounded-full hover:bg-gray-200">Learn More</a> */}
    </div>
  </div>
  </div>
  <div className=''>
  <div className=' flex flex-col  px-20 items-center'>
    <div>
  <h2 className='text-4xl pt-4'>About Us</h2><br/>
                <p className='text-lg'>At Aadhya, we believe that every woman deserves to be heard, respected, and empowered. Our website 
                serves as a platform for women from all walks of life to come together, share their stories, 
                and inspire each other towards personal growth and societal change. We are dedicated to
                 promoting women's empowerment, fostering a sense of community, and providing valuable 
                 resources for women around the world.</p>
                <br/><p className='text-lg'>At Aadhya, we are committed to making a lasting impact by empowering women, 
                fostering a sense of community, and providing the resources needed for personal and collective 
                growth. Join us on this transformative journey and let's inspire, uplift, and empower each other. 
                Together, we can create a world where every woman feels empowered to pursue her dreams and aspirations.</p>
  </div>
  <div className='flex sm:flex-wrap  justify-around  pt-6'>
    <div>
      <h1 className='text-4xl'>Our Mission</h1><br/>
      <p className='text-lg '>To facilitate work for women by creating a network of ground partners
         and mobilizing resources for them.</p>

    </div>
    <div>
      <h1 className='text-4xl'>Our Vision</h1><br/>
      <p className='text-lg '>To be the largest not for profit platform enabling women impacted 
        by poverty to earn a respectable income across India.</p>
    </div>
    <div className=''>
      <h1 className='text-4xl'>
      Our Values
      </h1><br/>
      <ul className='text-lg'>
        
        Our values include being Tansparent and Accountable, being professional, resourceful and effective.
        
        
        
        
      </ul>
    </div>
  </div>
  </div>
  </div>
  <div className="bg-cover bg-no-repeat " style={{ backgroundImage: 'url("https://res.cloudinary.com/ddtzbznea/image/upload/v1687695328/women_ilfvsz.jpg")' }}>
  <div className="Trustees pb-28 pl-8 pr-8 mt-24 bg-gradient-to-r from-[#000000d2] to-[#000000d2] text-[white]">
      <h2 className="text-4xl font-light mb-4 pt-8">Trustees of Aadya</h2>
      <p className="text-lg mb-8">
        We are a young team, passionate about helping others and creating a better world. Aadhya was started in
        2011.
      </p><br/>
      <div className="trusteesInfoContener flex sm:flex-wrap gap-6 pl-6 pr-6">
        <div className="trusteesInfo">
          <img src="https://res.cloudinary.com/ddtzbznea/image/upload/v1685636266/cld-sample.jpg" alt="imgError" className="w-full h-40" />
          <h4 className="text-2xl font-bold mt-4">Lorem </h4><br/>
          <p>Co-founder and Trustee</p><br/>
          <hr className="my-4" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem, 
            quo reprehenderit, excepturi aperiam iure optio nihil non atque fuga alias.
             Iure eum eius sint mollitia impedit modi? Veniam, quae.
          </p><br/>
          <hr className="my-4" />
          <a href="">LinkedIn</a>
        </div>
        <div className="trusteesInfo">
          <img src="https://res.cloudinary.com/ddtzbznea/image/upload/v1685636266/cld-sample.jpg" alt="imgError" className="w-full h-40" />
          <h4 className="text-2xl font-bold mt-4">Lorem</h4><br/>
          <p>Co-founder and Trustee</p><br/>
          <hr className="my-4" />
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem, 
            quo reprehenderit, excepturi aperiam iure optio nihil non atque fuga alias.
             Iure eum eius sint mollitia impedit modi? Veniam, quae.
          </p><br/>
          <hr className="my-4" />
          <a href="">LinkedIn</a>
        </div>
        <div className="trusteesInfo">
          <img src="https://res.cloudinary.com/ddtzbznea/image/upload/v1685636266/cld-sample.jpg" alt="imgError" className="w-full h-40" />
          <h4 className="text-2xl font-bold mt-4">Lorem</h4><br/>
          <p>Trustee- Director </p><br/>
          <hr className="my-4" />
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem, 
            quo reprehenderit, excepturi aperiam iure optio nihil non atque fuga alias.
             Iure eum eius sint mollitia impedit modi? Veniam, quae.
          </p><br/>
          <hr className="my-4" />
          <a href="">LinkedIn</a>
        </div>
      </div>
    </div>
    </div>
    <div className='pt-12'>
      <h1 className='text-4xl ml-8 pb-6 '>MEDIA COVERAGE</h1>
      <div className='flex flex-wrap justify-around gap-6'>
        <div className=' overflow-hidden  w-1/4 h-40'>
      <img src="https://th.bing.com/th/id/OIP.GikXjhpkDF_Ai7GWINy8JwHaFj?pid=ImgDet&rs=1" alt="imgError" className="   custom-zoom" />
      </div>
      <div className=' overflow-hidden w-1/4 h-40'>
       <img src="https://th.bing.com/th/id/OIP.GikXjhpkDF_Ai7GWINy8JwHaFj?pid=ImgDet&rs=1"alt="imgError" className="   custom-zoom" />
      </div>
      <div className=' overflow-hidden w-1/4 h-40'>
       <img src="https://th.bing.com/th/id/OIP.GikXjhpkDF_Ai7GWINy8JwHaFj?pid=ImgDet&rs=1"alt="imgError" className="   custom-zoom" />
      </div>
      <div className=' overflow-hidden w-1/4 h-40'>
       <img src="https://th.bing.com/th/id/OIP.GikXjhpkDF_Ai7GWINy8JwHaFj?pid=ImgDet&rs=1"alt="imgError" className="   custom-zoom" />
      </div>
      <div className=' overflow-hidden w-1/4 h-40'>
      <img src="https://th.bing.com/th/id/OIP.GikXjhpkDF_Ai7GWINy8JwHaFj?pid=ImgDet&rs=1" alt="imgError" className="   custom-zoom" />
      </div>
      <div className=' overflow-hidden w-1/4 h-40'>
      <img src="https://th.bing.com/th/id/OIP.GikXjhpkDF_Ai7GWINy8JwHaFj?pid=ImgDet&rs=1" alt="imgError" className="   custom-zoom" />
      </div>
      
      </div>
    </div>
    <div className='mt-24'>
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
    </div>
  </>

  )
}

export default Index