'use client';

import FeatureProvider from '@/context/feature/FeatureContext';
import { SessionProvider } from 'next-auth/react';

export default function AppProvider({ children }: onlyChildrenProps) {
  return (
    <>
      <FeatureProvider>
        <SessionProvider>{children}</SessionProvider>
      </FeatureProvider>
    </>
  );
}
