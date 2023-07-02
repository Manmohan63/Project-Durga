// import footer from "@/components/footer"

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="bg-[#313030] font-medium sm:text-center">
      <div className="flex justify-around sm:flex-wrap sm:gap-6 text-[white] pt-16 pb-12 ">
        <div>
          <h4 className="text-xl font-semibold text-[#e10982]">About AADHYA</h4>
          <div className="pt-2">
            <ul className="flex flex-col gap-1">
              <li>
                National Institute of Technology, Rourkela<br />
                Odisha, India - 769008
              </li>
              <br />
              <li>
                Contact: &nbsp; <a href="tel:+91-661-2462021">+91-661-2462021</a>
              </li>
              <br />
              <li>
                Email: &nbsp; <a href="mailto:registrar@nitrkl.ac.in">aadhya@nitrkl.ac.in</a>
              </li>
            </ul>
          </div>
          <br />
          <div className="font-semibold flex justify-start sm:justify-center items-center"> <span> Join Us:</span>
            <div className="flex justify-start items-center">
              <div className="flex flex-col">
              <div className="m-2 flex items-start hover:text-main transition-all ease-in-out duration-30"><a href="#"><FaFacebookF size={20} className={''} /></a></div>
              </div>
              <div className="flex flex-col">
              <div className="m-2 flex items-start hover:text-main transition-all ease-in-out duration-30"><a href="#"><FaInstagram size={20} className={''} /></a></div>
              </div>
              <div className="flex flex-col">
              <div className="m-2 flex items-start hover:text-main transition-all ease-in-out duration-30"><a href="#"><FaTwitter size={20} className={''} /></a></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl  font-semibold text-[#e10982]">QUICK LINKS</h1>

          <div className="pt-2 min-h-full">
            <ul className="flex flex-col gap-5 justify-around">
              <li>
                <Link href="/" className="hover:text-main transition-all ease-in-out duration-30">Home</Link>
              </li>
              <li>
                <Link href="/about_us" className="hover:text-main transition-all ease-in-out duration-30">About Us</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-main transition-all ease-in-out duration-30">Resources</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-main transition-all ease-in-out duration-30">Gallery</Link>
              </li>
              <li>
                <Link href="/community_forum" className="hover:text-main transition-all ease-in-out duration-30">Community Forum</Link>
              </li>
              <li>
                <Link href="/join_us" className="hover:text-main transition-all ease-in-out duration-30">Join us</Link>
              </li>
              <li>
                <Link href="/contact_us" className="hover:text-main transition-all ease-in-out duration-30">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-xl  font-semibold text-[#e10982]">GET SUBSCRIBED!!</h1>
          <h1 className="pt-2">Don't miss our future updates.</h1>
          <br />
          <form className="flex flex-col justify-around">
            <label className="flex">Name: &nbsp;<div className="text-main flex items-start"><FaStarOfLife size={6} /></div></label><br />
            <input type="text" className="border-b-2 bg-[#313030] focus:outline-none border-[white]" ></input><br />
            <label className="flex">Email: &nbsp;<div className="text-main flex items-start"><FaStarOfLife size={6} /></div></label><br />
            <input type="email" className="border-b-2 bg-[#313030] focus:outline-none border-[white]" ></input><br />
            <br />
            <button type="submit" className="rounded-lg p-1.5 bg-[#e10982]  hover:bg-[#f33ba3]">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Footer;
