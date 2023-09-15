'use client';

import Link from 'next/link';
import { BiSolidHome, BiSolidBell } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { BsFillPeopleFill, BsMessenger, BsSearch } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  let current = pathname.split('/')[2];
  let currentTab = current ?? 'home';
  return (
    <nav className='flex flex-col px-4 pt-3 bg-black_faded sticky top-0 z-[999]'>
      {/*//? first nav */}
      <div
        className={`${
          currentTab === 'home'
            ? 'flex justify-between items-center mb-3'
            : 'hidden'
        }`}
      >
        <div>
          <Link href='/' className=' text-[28px] font-bold text-blue'>
            facebook
          </Link>
        </div>
        <div className='flex gap-4'>
          <Link href='/search'>
            <BsSearch size={28} />
          </Link>
          <Link href='/messenger'>
            <BsMessenger size={28} />
          </Link>
        </div>
      </div>

      {/* //? second nav */}
      <div className='flex justify-between items-start z-[1]'>
        <Link
          href='/tabs'
          className={` cursor-pointer px-3 pb-1 ${
            currentTab === 'home' &&
            'border-b-[3px] text-blue border-b-blue rounded-b-sm'
          }  `}
        >
          <BiSolidHome size={28} />
        </Link>

        <Link
          href='/tabs/friends'
          className={` cursor-pointer px-3 pb-1 ${
            currentTab === 'friends' &&
            'border-b-[3px] text-blue border-b-blue rounded-b-sm'
          }  `}
        >
          <BsFillPeopleFill size={28} />
        </Link>
        <Link
          href='/tabs/notification'
          className={` cursor-pointer px-3 pb-1 ${
            currentTab === 'notification' &&
            'border-b-[3px] border-b-blue text-blue rounded-b-sm'
          }  `}
        >
          <BiSolidBell size={28} />
        </Link>
        <Link
          href='/tabs/profile'
          className={` cursor-pointer px-3 pb-1 ${
            currentTab === 'profile' &&
            'border-b-[3px] border-b-blue text-blue rounded-b-sm'
          }  `}
        >
          <CgProfile size={28} />
        </Link>
      </div>

      <div className=' h-[0.1px] max-w-[100vw] mx-[-16px] bg-ash mt-[-1px]' />
    </nav>
  );
}
