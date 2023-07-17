'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Reaction() {
  const [likeButtonHover, setLikeButtonHover] = useState(false);
  const [likeMenuHover, setLikeMenuHover] = useState(false);

  const mouseEnterAction = (btn: boolean) => {
    if (btn) {
      setLikeButtonHover(true);
    } else {
      setLikeMenuHover(true);
    }

    setTimeout(() => {
      if (btn) {
        setLikeButtonHover(false);
      } else setLikeMenuHover(false);
    }, 3000);
  };

  const mouseLeaveAction = (btn: boolean) => {
    setTimeout(() => {
      if (btn) {
        setLikeButtonHover(false);
      } else setLikeMenuHover(false);
    }, 3000);
  };

  return (
    <div className=' flex justify-around relative'>
      <button
        onClick={() => mouseEnterAction(true)}
        onMouseEnter={() => setLikeButtonHover(true)}
        onMouseLeave={() => mouseLeaveAction(true)}
      >
        Like
      </button>
      <button>Comment</button>
      <button>Send</button>
      {(likeButtonHover || likeMenuHover) && (
        <div
          onClick={() => mouseEnterAction(false)}
          onMouseEnter={() => setLikeMenuHover(true)}
          onMouseLeave={() => mouseLeaveAction(false)}
          className=' absolute bg-black_faded top-[-70px] z-[999]'
        >
          <Image src='/assets/reacts/love.gif' alt='s' width={32} height={32} />

          <span> 😎</span>
          <span> 😎</span>
          <span> 😎</span>
          <span> 😎</span>
        </div>
      )}
    </div>
  );
}
