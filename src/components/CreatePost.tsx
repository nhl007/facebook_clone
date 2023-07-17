import Link from 'next/link';

export default function CreatePostLay() {
  return (
    <section className='flex justify-between items-center px-4 pb-3 pt-3 bg-black_faded'>
      {/* //:todo  profile page*/}
      <Link
        href='profile'
        className=' flex justify-center items-center p-2 bg-white_faded rounded-[20px] w-10 h-10'
      >
        N
      </Link>
      <Link
        href='new-post'
        className=' rounded-[20px] border-[1px] px-4 py-1 border-white_faded min-w-[16rem] max-w-[420px]'
      >
        Whats on Your Mind !
      </Link>
      {/* //:todo input image to post page */}
      <Link href='new-post'>OK</Link>
    </section>
  );
}
