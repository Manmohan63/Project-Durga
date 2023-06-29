// import footer from "@/components/footer"

import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import Link from 'next/link';
 const Footer= () => {
  return (
    <div className="bg-[#313030]">
    <div className="flex justify-around sm:flex-wrap sm:gap-6 text-[white] pt-16 pb-28 font-light">
      <div>
        <h4 className="text-xl font-semibold text-[#e10982]">About AADYA</h4>
        <div className="pt-2">
        <ul>
          <li>
           <p>office number 215 </p>
           
           <p>mall roal</p>
           
           <p>769001</p>
          </li>
          <br/>
          <li>
            Contact: &nbsp; +122121232
          </li>
          <br/>
          <li>
            Email: &nbsp; xyz@gmail.com
          </li>
        </ul>
      </div>
      <br/>
      <h1> Join Us </h1>
      
      <div className="flex gap-3 pt-2">
       <FaFacebookF size={20}/>
       <FaInstagram size={20}/>
       <FaTwitter size={20}/>
      </div>
      </div>
      <div>
      <h1 className="text-xl font-semibold text-[#e10982]">QUICK LINKS</h1>
      
      <div className="pt-2">
        <ul>
          <li>
          <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="/">About Us</Link>
          </li>
          <li>
          <Link href="/">Resources</Link>
          </li>
          <li>
          <Link href="/">Contact</Link>
          </li>
          <li>
          <Link href="/">Gallery</Link>
          </li>
          <li>
          <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
      </div>
      <div>
        <h1 className="text-xl  font-semibold text-[#e10982]">GET SUBSCRIBED!!</h1>
        <h1 className="pt-2">Don't miss our future updates.</h1>
        <br/>
        <form>
          <label>Name:</label><br/>
          <input type="text" className="border-b-2 bg-[#313030] focus:outline-none border-[white]" ></input><br/>
          <label>Email:</label><br/>
          <input type="email" className="border-b-2 bg-[#313030] focus:outline-none border-[white]" ></input><br/>
          <br/>
          <button type="submit"  className="rounded-lg p-1.5 bg-[#e10982]  hover:bg-[#f33ba3]">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}
export default Footer;
