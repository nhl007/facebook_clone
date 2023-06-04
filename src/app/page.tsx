'use client';

import {
  FriendsTab,
  HomeTab,
  NavBar,
  NotificationTab,
  ProfileTab,
} from '@/components';
import LoadingSpinner from '@/components/Loading';
import { useState } from 'react';

export default function Home() {
  const [currentTab, setCurrentTab] = useState('home');
  const [loading, setloading] = useState(false);

  return (
    <main className='max-w-[600px] h-screen mx-auto'>
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {loading && <LoadingSpinner />}

      {currentTab === 'home' ? (
        <HomeTab />
      ) : currentTab === 'friends' ? (
        <FriendsTab />
      ) : currentTab === 'notification' ? (
        <NotificationTab />
      ) : (
        <ProfileTab />
      )}
    </main>
  );
}
