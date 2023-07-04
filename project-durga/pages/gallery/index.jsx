import React from 'react'

const data = [
  [
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475284/1f3e64cbf92c61f295c9acc33ed3ec05_d9qaem.jpg',
    },
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688427120/actress-madhuri-dixit-during-the-launch-of-power-337048_igfcab.jpg',
    },
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475416/edc87bb26fdd66928341c682dcc6c24a_iaj7ml.jpg',
    },
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475459/d32546a738249455f361d5bf647ed996_ajbfgc.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/f2/84/55/f28455bb6699cc8c66f8ffe838371303.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/88/92/a9/8892a991fd9861f99b7778b339a3bad1.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/22/f9/89/22f989510469c51bb87605589421b50e.jpg',
    },
  ],
  [
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475210/9edb3e93c50d30ffa84b4e87aca7919b_pgnvrh.jpg',
    },
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475411/f989003b603eb9c8dfcf4dcf9d7576ca_zrq2if.jpg',
    },
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688475308/f02231ed6ebcbb6c28b8453ce8a413bb_jkawwy.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/c2/db/23/c2db234f78b45302b71d342163dbe720.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/71/06/b9/7106b9e922112f08a556eb09bc1a4f97.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/b1/56/9d/b1569d5e078aa79ac01e703c1c683807.jpg',
    },
  ],
  [
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688371576/mother-teresa-9504160-1-402_x7ywe7.jpg',
    },
    {
      'link': 'https://res.cloudinary.com/dk8ign4oc/image/upload/v1688426833/AFP_94L4YA_1618490389449_1618490417636_gas4xv.jpg',
    },
    {
      'link': 'https://i.pinimg.com/564x/11/9c/74/119c74beef09b27179e76bdad72adfb5.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/99/bf/cc/99bfccbfb7180ed7a75372ff77524493.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/44/b3/e1/44b3e12944795e5c52118c4393e76eb9.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/d6/78/c4/d678c4ac30d6d98cf6f44c149d0391b5.jpg',
    },
  ],
  [
    {
      'link': 'https://i.pinimg.com/236x/1f/23/b9/1f23b95a7e405c5b5519b962bfab79c9.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/78/a1/b1/78a1b1108c7389d3cef3d31d5ebb6b47.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/3e/19/27/3e1927f0230e29736cfa90acad567fa2.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/49/57/aa/4957aa3674f5ecbb1da59c8a1b0411ab.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/67/97/38/6797386e6375fdbb7a89dd4493d5304f.jpg',
    },
    {
      'link': 'https://i.pinimg.com/236x/e6/d6/fc/e6d6fceacb4fb4e9814f59aff655a760.jpg',
    },
  ],
];
const Gallery = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 backdrop-blur-2xl min-w-screen p-4 sm:p-1 overflow-hidden '>
        <div className='flex gap-7 sm:gap-1'>
          <div className="flex-col">
            {data[0].map((e) => {
              return <img src={e.link} className={'h-auto my-4 sm:my-2 border-2 border-black w-[350px] sm:w-[200px]'} alt="Image" />;
            })}
          </div>
          <div className="flex-col">
            {data[1].map((e) => {
              return <img src={e.link} className={'h-auto my-4 sm:my-2 border-2 border-black w-[350px] sm:w-[200px]'} alt="Image" />;
            })}
          </div>
          <div className="flex-col">
            {data[2].map((e) => {
              return <img src={e.link} className={'h-auto my-4 sm:my-2 border-2 border-black w-[350px] sm:w-[200px]'} alt="Image" />;
            })}
          </div>
          <div className="flex-col">
            {data[3].map((e) => {
              return <img src={e.link} className={'h-auto my-4 sm:my-2 border-2 border-black w-[350px] sm:w-[200px]'} alt="Image" />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery