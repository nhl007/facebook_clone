import Link from 'next/link';
import Image from 'next/image';

export default function NavBar({ currentTab, setCurrentTab }: navProps) {
  return (
    <nav className='flex flex-col px-4 pt-3 bg-black_faded'>
      {/*//? first nav */}
      <div className='flex justify-between items-center mb-3'>
        <div>
          <Link href='/' className=' text-[24px]'>
            SrjBook
          </Link>
        </div>
        <div className='flex gap-4'>
          <Link href='/search'>Search</Link>
          <Link href='/messenger'>messenger</Link>
        </div>
      </div>

      {/* //? second nav */}
      <div className='flex justify-between items-start z-[1]'>
        <div
          className={` cursor-pointer px-3 pb-1 ${
            currentTab === 'home' && 'border-b-[5px] border-b-blue'
          }  `}
          onClick={() => setCurrentTab('home')}
        >
          <Image
            style={{ color: 'white', fill: 'currentcolor' }}
            color='blue'
            alt='home'
            width={32}
            height={32}
            src='assets/icons/home_tab.svg'
            className=' text-blue fill-neutral-500'
          />
        </div>

        <div
          className={` cursor-pointer px-3 pb-1 ${
            currentTab === 'friends' &&
            'border-b-[5px] border-b-blue text-blue-400'
          }  `}
          onClick={() => setCurrentTab('friends')}
        >
          <Image
            alt='home'
            width={32}
            height={32}
            src='assets/icons/home_tab.svg'
          />
        </div>
        <div
          className={` cursor-pointer px-3 pb-1 ${
            currentTab === 'notification' &&
            'border-b-[5px] border-b-blue-400 text-blue-400'
          }  `}
          onClick={() => setCurrentTab('notification')}
        >
          <Image
            alt='home'
            width={32}
            height={32}
            src='assets/icons/home_tab.svg'
          />
        </div>
        <div
          className={` cursor-pointer px-3 pb-1 ${
            currentTab === 'profile' &&
            'border-b-[5px] border-b-blue-400 text-blue-400'
          }  `}
          onClick={() => setCurrentTab('profile')}
        >
          <Image
            alt='home'
            width={32}
            height={32}
            src='assets/icons/home_tab.svg'
          />
        </div>
      </div>
      <div className=' h-[1px] max-w-[100vw] mx-[-16px] bg-white mt-[-1px]' />
    </nav>
  );
}
