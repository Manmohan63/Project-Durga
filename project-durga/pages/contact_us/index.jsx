import React from 'react'
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <>
      <div className="flex justify-around items-center bg-origin-border min-w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('https://images.livemint.com/img/2022/03/07/1600x900/LSpic_1646677330637_1646677340040.jpg')]" >
        <div className='bg-[black] opacity-80 min-w-full min-h-screen flex justify-center items-center ' >
          <div className="flex text-[white] p-8 lg:p-6 md:p-4 sm:p-2 justify-around items-center flex-col opacity-100 leading-5">
            <div className="text-6xl md:text-5xl sm:text-3xl m-4 font-bold">Contact Us</div>
            <div className="text-3xl lg:text-2xl md:text-xl sm:text-lg m-4 text-center font-bold">Supporting lesser Privileged Since 2023</div>
            <div className="text-3xl lg:text-2xl md:text-xl sm:text-lg rounded-2xl border-[white] border-4 p-2 px-4 m-4 hover:bg-main hover:opacity-100"><Link href='/donate_us'> Donate Now</Link></div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className='shadow-2xl xl:w-1/3 w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.657622579312!2d84.89840587496637!3d22.25306557972059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1687708863721!5m2!1sen!2sin" width="600" height="630" style={{ "border": 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'></iframe>
        </div>
        <div className='flex xl:w-2/3 w-full sm:flex-col'>
          <div className='p-6 w-1/2 bg-[#e4e4e4] sm:w-full'>
            <div className="text-4xl lg:text-4xl md:text-3xl sm:text-3xl m-4 sm:m-1">Meet Us</div>
            <div className='my-12'>
              <div className="text-2xl md:text-xl sm:text-lg m-4 sm:m-2 flex gap-5 items-center font-bold">
                <span className='text-main'><BsTelephone /></span>Phone</div>
              <div className="text-xl m-4 mb-5"><a href="tel:+91-661-2462021">+91-661-2462021</a></div>
            </div>
          <div className='my-12'>
            <div className="text-2xl m-4 flex gap-5 items-center font-bold">
              <span className='text-main'><IoLocationOutline /></span>Our Office</div>
            <div className="text-xl m-4">National Institute of Technology, Rourkela, Odisha, India - 769008</div>
          </div>
          <div className='my-12'>
            <div className="text-2xl m-4 flex gap-5 items-center font-bold">
              <span className='text-main'><TfiEmail /></span>Mail us</div>
            <div className="text-xl m-4"><a href="mailto:registrar@nitrkl.ac.in">aadhya@nitrkl.ac.in</a></div>
          </div>
          </div>
          <form className='p-6 w-1/2 flex flex-col sm:w-full'>
            <div className="text-4xl lg:text-4xl md:text-3xl sm:text-3xl m-4 sm:m-1">Get in Touch</div>
            <div className=''>
              <div className="text-2xl md:text-xl sm:text-lg m-4 sm:m-2 flex gap-5 items-center">Name</div>
              <div className="text-xl md:text-lg sm:text-base m-4 sm:m-1"><input type="text" className='bg-[#e4e4e4] rounded-md p-2 w-full' name="" id="" placeholder='Enter your Name' /></div>
            </div>
            <div className=''>
              <div className="text-2xl md:text-xl sm:text-lg m-4 sm:m-2 flex gap-5 items-center">Email</div>
              <div className="text-xl md:text-lg sm:text-base m-4 sm:m-1"><input type="text" className='bg-[#e4e4e4] rounded-md p-2 w-full' name="" id="" placeholder='Enter a valid email address' /></div>
            </div>
            <div className=''>
              <div className="text-2xl md:text-xl sm:text-lg m-4 sm:m-2 flex gap-5 items-center">How can we help? </div>
              <div className="text-xl md:text-lg sm:text-base m-4 sm:m-1"><textarea name="postContent" rows={3} cols={30} className='resize-none bg-[#e4e4e4] rounded-md p-2 w-full text-xl md:text-lg sm:text-base sm:m-1' /></div>
            </div>
            <div className='flex flex-col items-center'>
              <button type="submit" className="w-10/12 bg-main p-2 text-[white] rounded-md mb-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact