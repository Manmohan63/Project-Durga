import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from 'next/image';
import Globe from './../components/Globe';
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdGirl } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import CountUp from 'react-countup';

const Home = () => {
    const photos = [
        {
            'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475416/edc87bb26fdd66928341c682dcc6c24a_iaj7ml.jpg',
            'text': '“Judge a country by the place it gives its women.” - Mahatma Gandhi '
        },
        {
            'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475411/f989003b603eb9c8dfcf4dcf9d7576ca_zrq2if.jpg',
            'text': 'I Know My Worth. I Embrace My Power. '
        },
        {
            'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475308/f02231ed6ebcbb6c28b8453ce8a413bb_jkawwy.jpg',
            'text': 'Promoting gender equality and empowering women! '
        },
        {
            'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475210/9edb3e93c50d30ffa84b4e87aca7919b_pgnvrh.jpg',
            'text': 'If she can learn, she can earn! '
        },
        {
            'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688427120/actress-madhuri-dixit-during-the-launch-of-power-337048_igfcab.jpg',
            'text': '“You get in life what you have the courage to ask for.” - Oprah Winfrey '
        },
        {
            'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688426833/AFP_94L4YA_1618490389449_1618490417636_gas4xv.jpg',
            'text': 'Enabling women to earn a respectable income! '
        },
        {
            'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475459/d32546a738249455f361d5bf647ed996_ajbfgc.jpg',
            'text': '"I raise up my voice—not so that I can shout, but so that those without a voice can be heard. … We cannot all succeed when half of us are held back." - Malala Yousafzai'
        },
        {
            'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475284/1f3e64cbf92c61f295c9acc33ed3ec05_d9qaem.jpg',
            'text': 'We define empowerment as letting this power out. '
        }
    ];
    let sz = photos.length;
    let link = 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688427120/actress-madhuri-dixit-during-the-launch-of-power-337048_igfcab.jpg';

    const [index, setIndex] = useState(0);
    const [img_link, setimg_link] = useState('https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475416/edc87bb26fdd66928341c682dcc6c24a_iaj7ml.jpg');
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => {
                if (index === sz - 1) {
                    return 0;
                } else {
                    console.log(index);
                    console.log(img_link);
                    return index + 1;
                }
            });
        }, 7000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        setimg_link(photos[index].link);
    }, [index]);

    return (
        <>

            {/* Carousel */}
            <div className={"flex justify-around items-center bg-origin-border min-w-screen min-h-screen bg-center bg-cover bg-no-repeat transition-all ease-in-out duration-500 "} 
                style={{ backgroundImage: `url(${img_link})` }}
            >
                <div className='bg-[black] opacity-60 min-w-full min-h-screen flex justify-center items-center ' >
                    <div className="flex text-[white] p-8 lg:p-6 md:p-4 sm:p-2 justify-around items-center flex-col opacity-100 leading-5">
                        <div className="text-6xl md:text-5xl sm:text-2xl m-4 font-bold ">Welcome to AADHYA</div>
                        <div className="text-3xl lg:text-2xl md:text-xl sm:text-lg m-4 text-center font-bold">{photos[index].text}</div>
                    </div>
                </div>
            </div>

            {/* Random Story */}
            <div className='flex justify-center items-center py-24 px-28 sm:p-2 bg-[#f7f7f7]'>
                <div className='flex justify-around items-center min-w-screen min-h-full gap-10 md:flex-col sm:flex-col '>
                    <Image
                        src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688426833/AFP_94L4YA_1618490389449_1618490417636_gas4xv.jpg'}
                        height={500}
                        width={500}
                        className={'h-[22vw] w-auto md:w-[70vw] md:h-auto sm:h-[200px] sm:w-auto '}
                    />
                    <div className='max-w-[35vw] min-h-full flex flex-col justify-around md:max-w-full sm:max-w-full md:text-center sm:text-center sm:text-sm sm:p-0'>
                        <div className='text-black font-bold xl:text-4xl lg:text-2xl md:text-xl sm:text-xl mb-8'>
                            We envision a India “where every woman and every girl, who wants to earn, gets the opportunities to do so.”
                        </div>
                        <div className='font-medium opacity-40 leading-5'>
                            For the thousands of stifled women in low-income communities across the country, Srujna is the key to unlocking their power! Srujna touches their lives, by transforming the many groups that work with grassroots women – helping create powerful, enterprising women that produce and sell hand-made products. Together, they provide livelihood opportunities to these low-income women – empowering them to become role models and changemakers in their families and communities.
                        </div>
                    </div>
                </div>
            </div>

            {/* Data and figures */}
            <div className="text-white bg-origin-border min-w-screen backdrop-blur-3xl bg-center bg-cover bg-no-repeat bg-[url('https://www.srujna.org/wp-content/uploads/2019/04/IMG_8680.jpg')] flex flex-col font-medium text-center">
                <div className='bg-black/[.8] opacity-80 min-w-full min-h-full xl:py-60 xl:px-20 lg:py-32 lg: md:px-12 md:py-16 sm:px-1 sm:py-12'>
                    <div className='flex '>
                        <div className='w-1/2 md:w-full sm:w-full px-8 text-left xl:mb-32 lg:mb-32 md:mb-16 sm:mb-8'>
                            We are on a mission to create an equal world for all women. In 2011 we started this journey and our impact till date has been:
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='flex flex-wrap justify-around xl:min-w-full lg:min-w-full md:flex-col md:gap-8 md:justify-center md:items-center sm:flex-col sm:gap-8 sm:justify-center sm:items-center'>
                            <Figures count={55000} text={'Number of women impacted'} />
                            <Figures count={60} text={'Orders and Market connects created'} />
                            <Figures count={1514} text={'Exhibitions organised'} />
                            <Figures count={270} text={'Number of clients'} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Youtube Channel */}
            <div className='py-12 text-center bg-[#f7f7f7]'>
                <div className='text-5xl md:text-3xl sm:text-xl text-center py-10'>
                    Our Youtube Channel
                </div>
                <div className='flex min-w-screen justify-around items-around p-4 md:flex-col sm:flex-col gap-5 md:items-center sm:items-center'>
                    <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/Neho6BCJeoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='border-4 border-main rounded-xl md:w-[500px] md:h-[350px] sm:h-[180px] sm:w-[250px]'></iframe>
                    <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/CjWd5MZ0HAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='border-4 border-main rounded-xl md:w-[500px] md:h-[350px] sm:h-[180px] sm:w-[250px]'></iframe>
                    <iframe width="360" height="280" src="https://www.youtube-nocookie.com/embed/gupM7RMANZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='border-4 border-main rounded-xl md:w-[500px] md:h-[350px] sm:h-[180px] sm:w-[250px]'></iframe>
                </div>
            </div>


            {/* 4 pillars */}
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

            {/* Events */}
            <div className='flex flex-col justify-center items-center gap-2 min-w-screen py-20 text-center px-2 bg-[#f7f7f7]'>
                <div className='text-3xl md:text-2xl sm:text-2xl font-medium'>Our Events</div>
                <div className='text-xl md:text-lg sm:text-lg'>We are hosting many events as a way for people to get involved, contribute and to learn  about the cause.</div>

                <div className='flex justify-center items-center gap-10 py-8 flex-wrap'>
                    <Blog_component head={'Join us in celebration of ” The Power Woman of The Year Ceremony”'} text={'June 2023'} link={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688427120/actress-madhuri-dixit-during-the-launch-of-power-337048_igfcab.jpg'} />
                    <Blog_component head={'Join us in celebration of ” The Power Woman of The Year Ceremony”'} text={'June 2023'} link={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688427120/actress-madhuri-dixit-during-the-launch-of-power-337048_igfcab.jpg'} />
                    <Blog_component head={'Join us in celebration of ” The Power Woman of The Year Ceremony”'} text={'June 2023'} link={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688427120/actress-madhuri-dixit-during-the-launch-of-power-337048_igfcab.jpg'} />
                </div>
                <div className='border-4 p-4 sm:p-2 rounded-xl hover:text-white hover:bg-main transition-all ease-in-out duration-450'>
                    <Link href='/join_us' className='inline p-2'>JOIN US <BsBoxArrowUpRight size={20} className='inline px-1' /></Link>
                </div>
            </div>

            {/* Support */}
            <div className="bg-origin-border min-w-screen xl:min-h-screen lg:min-h-screen md:min-h-fit bg-center bg-cover bg-no-repeat bg-[url('https://www.srujna.org/wp-content/uploads/2019/03/resourcebanner.jpeg')]">
                <div className="min-h-screen min-w-screen bg-[black] opacity-80 flex justify-center items-center xl:px-12 lg:px-4 md:px-2 sm:px-2 xl:py-10 lg:py-8 md:py-4 sm:py-2">

                    <div className='flex xl:min-h-screen lg:min-h-screen md:min-h-fit min-w-full sm:text-center md:flex-col sm:flex-col items-center gap-5'>

                        <div className='flex flex-col justify-around items-center xl:w-1/2 lg:w-1/2 sm:min-w-full gap-4 m-2'>
                            <div className='flex items-center justify-between gap-2'>
                                <Globe />
                                <Globe />
                                <Globe />
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <Globe />
                                <Globe />
                                <Globe />
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <Globe />
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

            {/* Journal Portion */}
            <div className='flex flex-col justify-center items-center gap-2 min-w-screen py-20 text-center px-2'>
                <div className='text-3xl md:text-2xl sm:text-2xl font-medium'>From the Journal</div>
                <div className='text-xl md:text-lg sm:text-lg'>It allows you to gather monthly subscriptions from fans to help fund your creative projects. They also encourage their users to offer rewards to fans as a way to repay them for their support.</div>

                <div className='flex justify-center items-center gap-10 py-8 flex-wrap'>
                    <Blog_component head={'How Financial Literacy Can Empower Women In India?'} text={'48% of the population in India is women. Majority of the women in India are...'} link={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688424638/1091149-financial-literacy_acvenm.webp'} />
                    <Blog_component head={'How Financial Literacy Can Empower Women In India?'} text={'48% of the population in India is women. Majority of the women in India are...'} link={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688424638/1091149-financial-literacy_acvenm.webp'} />
                    <Blog_component head={'How Financial Literacy Can Empower Women In India?'} text={'48% of the population in India is women. Majority of the women in India are...'} link={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688424638/1091149-financial-literacy_acvenm.webp'} />
                </div>
                <div className='border-4 p-4 sm:p-2 rounded-xl hover:text-white hover:bg-main transition-all ease-in-out duration-450'>
                    <Link href='/blogs' className='inline p-2'>SEE FULL BLOG <BsBoxArrowUpRight size={20} className='inline px-1' /></Link>
                </div>
            </div>
        </>
    )
}

function Figures({ count, text }) {
    return (
        <div className='text-[white] xl:w-1/4 lg:w-1/4 flex flex-col items-center'>
            <div className='text-6xl flex'>
                <CountUp end={count} duration={6} /> <span className='flex items-start '><HiOutlinePlusSm size={25} /></span>
            </div>
            <div className='xl:text-xl lg:text-xl md:text-lg sm:text-base'>
                {text}
            </div>
        </div>
    );
}

function Blog_component({ head, text, link }) {
    return (
        <>
            <div className='flex flex-col justify-center items-center w-[400px] sm:w-[280px] p-1 xl:max-w-[33%] lg:max-w-[35%] md:max-w-[40%] sm:max-w-[100%] flex-none'>
                <Image
                    src={link}
                    height={500}
                    width={700}
                    alt={'img'}
                    className={'h-auto xl:w-[450px] sm:w-[250px] hover:-translate-y-5 hover:scale-105 transition-all ease-in-out duration-500 hover:shadow-2xl'}
                />
                <div className='text-left p-4'>
                    <div className='text-2xl sm:text-lg font-bold'>{head}</div>
                    <div className='sm:text-sm font-medium'>{text}</div>
                </div>
            </div>
        </>
    );
}

export default Home