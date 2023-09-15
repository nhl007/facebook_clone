'use client';

import { useFeatureContext } from '@/context/feature/FeatureContext';

function Alert() {
  const {
    state: { alertSuccess, alertText },
  } = useFeatureContext();
  return (
    <div
      className={` ${
        alertSuccess ? 'bg-green-500' : 'bg-red'
      } fixed bottom-0 right-0 mr-1 mb-1 py-1 px-2 text-xs flex justify-center items-center`}
    >
      <p>{alertText}</p>
    </div>
  );
}

export default Alert;
