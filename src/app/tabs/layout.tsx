import { NavBar } from '@/components';

export default function TabsLayout({ children }: onlyChildrenProps) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}
