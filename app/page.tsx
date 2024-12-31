'use client';

import { memo, useMemo } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import SideNav from '@/components/side-nav';
import ChatPanel from '@/components/chat-panel';
import ItemPanel from '@/components/item-panel';
import { useOverlayStore } from '@/store/overlay';

function Home() {
  const isOpenItemPanel = useOverlayStore(state => state.isOpenItemPanel);

  const resizablePanels = useMemo(
    () => (
      <>
        <ResizablePanel id='chat-panel' order={0} minSize={35} defaultSize={isOpenItemPanel ? 50 : 100}>
          <ChatPanel />
        </ResizablePanel>
        {isOpenItemPanel && (
          <>
            <ResizableHandle id='resizable-handler' />
            <ResizablePanel id='item-panel' order={1} minSize={35} defaultSize={50}>
              <ItemPanel />
            </ResizablePanel>
          </>
        )}
      </>
    ),
    [isOpenItemPanel],
  );

  return (
    <div className='flex-1 flex bg-sideBackground relative top-0 left-0'>
      <SideNav />
      <div className='flex-1 p-[1.143rem]'>
        <ResizablePanelGroup direction='horizontal' className='rounded-md bg-background border'>
          {resizablePanels}
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default memo(Home);
