import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className='fixed top-0 w-[100vw] h-[100vh] flex justify-center items-center'>
      <Image
        src='assets/icons/loader.svg'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default LoadingSpinner;
