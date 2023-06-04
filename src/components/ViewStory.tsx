import Image from 'next/image';
import Link from 'next/link';
export default function ViewStoryLay() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className='overflow-hidden mt-2 bg-zinc-900 flex'>
      <div className='flex overflow-x-scroll gap-2 py-2'>
        {/* //? create story */}
        <div className=' relative min-w-[100px] bg-zinc-800 rounded-xl ml-4'>
          <Image
            src='/assets/images/mobile.png'
            // src='assets/icons/loader.svg'
            alt='story'
            width={150}
            height={200}
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
    <div className=' relative min-w-[100px] bg-zinc-800 rounded-xl'>
      <Link
        href='profile'
        className=' absolute top-2 left-2 flex justify-center items-center p-2 bg-white rounded-[16px] w-8 h-8'
      >
        N
      </Link>
      <Image
        src='/assets/images/mobile.png'
        // src='assets/icons/loader.svg'
        alt='story'
        width={150}
        height={200}
      />
    </div>
  );
};
