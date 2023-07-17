import SmallRoundedPic from './SmallRoundedPic';

export default function NotificationTab() {
  return (
    <section className=' flex flex-col bg-black_faded'>
      <div className=' my-2 flex justify-between items-center mx-4'>
        <h1 className=' text-2xl'>Notifications</h1>
        {/* //:todo search icon svg later */}
        <button>Search</button>
      </div>
      <h1 className=' text-md mx-4 mb-1'>Today</h1>
      <NotificationCard />
      <div className=' flex flex-col mx-4'></div>
    </section>
  );
}

const NotificationCard = () => {
  return (
    <div className=' bg-teal-900'>
      <div className=' flex justify-between'>
        <div className='flex gap-3 px-4 py-2'>
          <SmallRoundedPic
            alt='fb'
            src='/assets/images/mobile.jpg'
            width={50}
            height={50}
          />
          <div>
            <p className=' text-sm'>This person liked your image</p>
            <p className=' text-sm'>
              {new Date().toDateString().replace(' ', ', ')}
            </p>
          </div>
        </div>
        <button className=' text-xl mx-4'>❌</button>
      </div>
    </div>
  );
};
