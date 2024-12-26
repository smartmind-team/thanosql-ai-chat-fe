'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import SideNav from '@/components/side-nav';
import ChatPanel from '@/components/chat-panel';
import ItemPanel from '@/components/item-panel';
import { useOverlayStore } from '@/store/overlay';

export default function Home() {
  const isOpenItemPanel = useOverlayStore(state => state.isOpenItemPanel);

  return (
    <div className='flex-1 flex bg-sideBackground relative top-0 left-0'>
      <SideNav />
      <div className='flex-1 p-[1.143rem]'>
        <ResizablePanelGroup direction='horizontal' className='rounded-md bg-background border'>
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
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
