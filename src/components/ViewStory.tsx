import Image from 'next/image';
import Link from 'next/link';
export default function ViewStoryLay() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className='overflow-hidden mt-2 bg-black_faded flex hide-scrollbar'>
      <div className='flex overflow-x-scroll gap-2 py-2'>
        {/* //? create story */}
        <div className=' relative min-w-[100px] ml-4'>
          <div className='w-full rounded-b-xl absolute bottom-0 flex flex-col justify-center items-center bg-black py-2'>
            <span className=' text-white bg-blue text-sm font-bold rounded-full p-1 '>
              ➕
            </span>
            <span>Create Story</span>
          </div>
          <Image
            src='/assets/images/mobile.jpg'
            alt='create story'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-[90px] rounded-lg object-cover'
          />
        </div>
        {arr.map((data) => {
          return <StoryCard key={data} />;
        })}
      </div>
    </section>
  );
}

const StoryCard = () => {
  return (
    <div className=' relative min-w-[100px] '>
      <Link
        href='profile'
        className=' absolute top-2 left-2 flex justify-center items-center p-2 bg-black_faded rounded-[16px] w-8 h-8'
      >
        N
      </Link>
      <Image
        src='/assets/images/mobile.jpg'
        // src='assets/icons/loader.svg'
        alt='story'
        width={0}
        height={0}
        sizes='100%'
        className='w-full h-[150px] rounded-lg object-cover'
      />
    </div>
  );
};
