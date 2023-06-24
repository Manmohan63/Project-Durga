import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='flex p-1 h-[82px] items-center justify-between fixed top-0 left-0 min-w-full bg-[#ffc6de]'>
            <Link href='/'>
                <Image
                    src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1687631532/aadhya-removebg-preview_odfw2c.png'}
                    height={200}
                    width={200}
                    className={'h-[100px] w-[185px]'}
                />
            </Link>
            <nav className='flex w-[70%] items-center justify-around'>
                <NavigationLink className='hover:bg-[#dd83a8]' href={'/'} text={'Home'} />
                <NavigationLink className='hover:bg-[#dd83a8]' href={'/about_us'} text={'About us'} />
                <NavigationDropdown className='hover:bg-[#dd83a8]' text={'Resources and Articles'}
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
                <NavigationLink className='hover:bg-[#dd83a8]' href={'/gallery'} text={'Gallery'} />
                <NavigationLink className='hover:bg-[#dd83a8]' href={'/community_forum'} text={'Community Forum'} />
                <NavigationDropdown className='hover:bg-[#dd83a8]' text={'Volunteer and Support'}
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
            <Link href='/contact_us' className={'border-2 rounded-md p-1 mr-2 transition-all ease-in-out duration-300 hover:bg-[#dd83a8] ' + `${router.pathname == "/contact_us" ? "bg-[#dd83a8]" : ""}`}>Contact us</Link>
        </div>
    )
}


function NavigationLink({ href, text }) {
    const router = useRouter();
    return (
        <li className={'list-none transition-all ease-in-out duration-300 hover:bg-[#dd83a8] p-2 rounded-md ' + `${router.pathname === href ?"bg-[#dd83a8]":""}`}><Link href={href}>{text}</Link></li>
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
            <li className={'list-none items-center flex p-2 rounded-md transition-all ease-in-out duration-300 hover:bg-[#dd83a8] ' + `${ischildopen ? "bg-[#dd83a8]" : ""}`}>{text}</li>
            <div className={"absolute border-2 rounded-xl overflow-hidden mt-12 w-[11em] transition-all ease-in-out duration-300 " + `${isopen ? "opacity-1" : "opacity-0"}`}>
                {arr.map((d, index) => (
                    <div key={index} className=''> 
                        <Link href={d.link} className='p-2 block bg-[#ffc6de] hover:bg-[#dd83a8]' onClick={() => {
                    setopen(false);
                }}>{d.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Navbar
