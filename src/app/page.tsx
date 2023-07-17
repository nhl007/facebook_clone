'use client';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { NavBar } from '@/components';
import LoadingSpinner from '@/components/Loading';
import { useRouter } from 'next/navigation';

const HomeTab = lazy(() => import('@/components/HomeTab'));
const FriendsTab = lazy(() => import('@/components/FriendsTab'));
const NotificationTab = lazy(() => import('@/components/NotificationTab'));
const ProfileTab = lazy(() => import('@/components/ProfileTab'));

export default function Home() {
  const [currentTab, setCurrentTab] = useState('home');
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      return router.replace('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    return <LoadingSpinner />;
  }

  return (
    <main className='max-w-[600px] h-screen mx-auto'>
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'home' ? (
        <Suspense fallback={<LoadingSpinner />}>
          <HomeTab />
        </Suspense>
      ) : currentTab === 'friends' ? (
        <Suspense fallback={<LoadingSpinner />}>
          <FriendsTab />
        </Suspense>
      ) : currentTab === 'notification' ? (
        <Suspense fallback={<LoadingSpinner />}>
          <NotificationTab />
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <ProfileTab />
        </Suspense>
      )}
    </main>
  );
}
