'use client';
import { signOut } from 'next-auth/react';
import { SmallRoundedPic } from '@/components';

export default function ProfileTab() {
  return (
    <section className=' mt-2'>
      <div className='flex justify-between px-4'>
        <h1 className='text-2xl font-semibold'>Menu</h1>
        <button>Search</button>
      </div>
      <div className=' bg-black_faded mx-4 mt-4 rounded-md flex justify-between'>
        <div className=' ml-2 py-2 flex items-center gap-2'>
          <SmallRoundedPic
            alt={'name'}
            src='/assets/images/signin.png'
            width={40}
            height={40}
          />
          <h1 className=' text-lg font-semibold'>Adi</h1>
        </div>
        <div className=' flex justify-center items-center gap-3 pr-2'>
          <SmallRoundedPic
            alt={'name'}
            src='/assets/images/mobile.jpg'
            width={25}
            height={25}
          />
          <button className=' rounded-full flex justify-center items-center w-[25px] h-[25px] p-2 bg-white text-sm '>
            🔽
          </button>
        </div>
      </div>
      <div className='mt-10 w-full flex justify-center'>
        <button
          className=' px-4 py-2 text-xl bg-red text-white'
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </section>
  );
}
