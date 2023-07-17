'use client';

import { useFeatureContext } from '@/context/Feature/FeatureContext';

function Alert() {
  const {
    state: { alertSuccess, alertText },
  } = useFeatureContext();
  return (
    <div
      className={` ${
        alertSuccess ? 'bg-green-500' : 'bg-red'
      } absolute bottom-0 w-full py-2 px-1 flex justify-center items-center`}
    >
      <h1>{alertText}</h1>
    </div>
  );
}

export default Alert;
