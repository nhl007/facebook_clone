import Link from 'next/link';
import Image from 'next/image';
import Reaction from './Reaction';

export default function PostCard({ name, image }: PostCardPropsType) {
  return (
    <div className='bg-black_faded my-2 py-2 max-h-full'>
      {/* //?>Post Information */}
      <div className='flex justify-between px-4'>
        <div className=' flex gap-2 justify-center items-center'>
          <Link
            href='profile'
            className=' flex justify-center items-center p-3 bg-white rounded-[20px] w-10 h-10 text-xl'
          >
            N
          </Link>

          <p>
            <span className=' font-bold'> {name}</span>
            <br />
            <span>2h</span>
          </p>
        </div>
        <div className=''>
          <button className='font-extrabold text-2xl mr-4 mt-[-20px]'>
            ...
          </button>
          <button className='font-bold text-2xl'>X</button>
        </div>
      </div>
      {/* //?caption */}
      <p className=' mt-2 px-4'>{'this is cap'}</p>
      {image && (
        <Image
          src='/assets/images/mobile.jpg'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto my-3'
          alt=''
        />
      )}
      {/* //?reactions */}
      <div className='flex justify-between px-4'>
        <div>😎😒🤚🏻 13</div>
        <div>total comments</div>
      </div>
      <div className=' border-b-[.1px] border-b-ash my-2 mx-4' />
      {/* //?reaction pannel */}
      <Reaction />
    </div>
  );
}
