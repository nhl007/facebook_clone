import Image from 'next/image';

type smallImageProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

export default function SmallRoundedPic({
  alt,
  height,
  src,
  width,
}: smallImageProps) {
  return (
    <div className=' m-auto'>
      <Image
        alt={alt}
        width={width}
        height={height}
        src={src}
        className={` rounded-full bg-contain`}
      />
    </div>
  );
}
