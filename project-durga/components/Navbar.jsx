import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Divide as Hamburger } from 'hamburger-react'
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='flex p-1 h-[86px] items-center justify-between fixed top-0 left-0 min-w-full bg-[#ffc6de] z-10'>
            <Link href='/'>
                <Image
                    src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1687885869/aadhya-removebg-preview_cropped_mbqzx9.png'}
                    height={100}
                    width={100}
                    className={'h-[80px] w-[80px] rounded-full bg-[white] m-1'}
                />
            </Link>
            <nav className='flex w-[70%] items-center justify-around lg:text-sm md:hidden sm:hidden'>
                <NavigationLink className='hover:bg-[#ea028b]' href={'/'} text={'Home'} />
                <NavigationLink className='hover:bg-[#ea028b]' href={'/about_us'} text={'About us'} />
                <NavigationDropdown className='hover:bg-[#ea028b]' text={'Resources and Articles'}
                    arr={[{
                        "name": "Resources",
                        "link": "/resources",
                        "key": 1
                    },
                    {
                        "name": "Success Stories",
                        "link": "/success_stories",
                        "key": 2
                    },
                    {
                        "name": "Blogs",
                        "link": "/blogs",
                        "key": 3
                    }]}
                />
                <NavigationLink className='hover:bg-[#ea028b]' href={'/gallery'} text={'Gallery'} />
                <NavigationDropdown className='hover:bg-[#ea028b]' text={'Helplines'}
                    arr={[{
                        "name": 'Community Forum',
                        "link": "/community_forum",
                        "key": 1
                    },
                    {
                        "name": "Find nearby places",
                        "link": "/find_nearby_places",
                        "key": 2
                    }]}
                />
                <NavigationDropdown className='hover:bg-[#ea028b]' text={'Volunteer and Support'}
                    arr={[{
                        "name": "Join us",
                        "link": "/join_us",
                        "key": 1
                    },
                    {
                        "name": "Donate us",
                        "link": "/donate_us",
                        "key": 2
                    }]}
                />
            </nav>
            <Link href='/contact_us' className={'rounded-md px-4 p-1.5 mr-2 transition-all ease-in-out duration-300 bg-[#ff5fbc] hover:bg-[#ff5fbc] lg:text-sm md:hidden sm:hidden ' + `${router.pathname == "/contact_us" ? "bg-[#ff5fbc] text-[white]" : ""}`}>Contact us</Link>
            <div className={'hidden sm:block md:block text-[white] bg-light_main rounded-full p-2'}>
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                />
            </div>
        </div>
    )
}


function NavigationLink({ href, text }) {
    const router = useRouter();
    return (
        <li className={'list-none transition-all ease-in-out duration-300 hover:bg-[#ea028b] p-2 rounded-md ' + `${router.pathname === href ?"bg-[#ff5fbc] text-[white]":""}`}><Link href={href}>{text}</Link></li>
    );
}
function NavigationDropdown({ text, arr }) {
    const router = useRouter();
    const [isopen, setopen] = useState(false);
    let ischildopen = ChildExists(router.pathname);
    function ChildExists(childname) {
        return arr.some(function (obj) {
            return obj.link === childname;
        });
    }
    return (
        <div className='flex flex-col transition-all ease-in-out delay-100 duration-300' 
                onMouseEnter={() => {
                    setopen(true);
                }}
                onMouseLeave={() => {
                    setopen(close);
                }}
                >
            <li className={'list-none items-center flex p-2 rounded-md transition-all ease-in-out duration-300 hover:bg-[#ea028b] ' + `${ischildopen ? "bg-[#ff5fbc] text-[white]" : ""}`}>{text}</li>
            <div className={"absolute border-2 rounded-xl overflow-hidden mt-12 w-[11em] transition-all ease-in-out duration-300 " + `${isopen ? "opacity-1" : "opacity-0"}`}>
                {arr.map((d, index) => (
                    <div key={index} className=''> 
                        <Link href={d.link} className='p-2 block bg-[#ffc6de] hover:bg-[#ea028b]' onClick={() => {
                    setopen(false);
                }}>{d.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Navbar
