'use client';

import SideNav from '@/components/side-nav';
import ResizableLayout from '@/components/resizable-layout';

export default function Home() {
  return (
    <div className='flex-1 flex bg-sideBackground relative top-0 left-0'>
      <SideNav />
      <div className='flex-1 p-[1.143rem]'>
        <ResizableLayout />
      </div>
    </div>
  );
}
