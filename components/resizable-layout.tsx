import { memo, useMemo } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useOverlayStore } from '@/store/overlay';
import ChatPanel from '@/components/chat-panel';
import ItemPanel from '@/components/item-panel';

function ResizableLayout() {
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
    <ResizablePanelGroup direction='horizontal' className='rounded-md bg-background border'>
      {resizablePanels}
    </ResizablePanelGroup>
  );
}

export default memo(ResizableLayout);
