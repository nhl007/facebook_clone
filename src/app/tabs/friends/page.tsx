export default function FriendsTab() {
  return (
    <section className=' flex flex-col px-4 bg-black_faded'>
      <div className=' my-2 flex justify-between items-center'>
        <h1 className=' text-2xl'>Friends</h1>
        <button>Search</button>
      </div>
      <div className=' flex gap-4 mb-1'>
        <button className=' bg-zinc-700 px-4 py-2 rounded-full font-bold text-white'>
          Suggestions
        </button>
        <button className=' bg-zinc-700 px-4 py-2 rounded-full font-bold text-white'>
          Your Friends
        </button>
      </div>
      <div className=' my-2 h-[1px] bg-ash_faded' />
      <div className='flex justify-between mb-2'>
        <h1 className=' text-xl'>Friend Requests</h1>
        <button className=' text-blue'>See All</button>
      </div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
        return <FriendsRequestCard key={num} />;
      })}
    </section>
  );
}

const FriendsRequestCard = () => {
  return (
    <div className='flex gap-4 items-center my-2'>
      <div className='flex justify-center items-center w-[80px] h-[80px] rounded-[40px] bg-red '>
        A
      </div>
      <div className='flex flex-col grow-[1] gap-2'>
        <div className='flex justify-between'>
          <h1>Name</h1>
          <p>date</p>
        </div>
        <div className='flex gap-2'>
          <button className=' bg-blue py-2 w-[50%] rounded-md '>Confirm</button>
          <button className=' bg-zinc-700 py-2 w-[50%] rounded-md '>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
