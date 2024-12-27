import { Button } from '@/components/ui/button';
import { Smartphone, MessagesSquare, AlignLeft, ChartBarStacked } from 'lucide-react';
import { useOverlayStore } from '@/store/overlay';
import StickyCard from './sticky-card';

export default function ChatHeader() {
  const { isOpenItemPanel, handleFixedSideNav } = useOverlayStore();

  return (
    <StickyCard id='custom-inner-gradient'>
      <div className='flex gap-[0.286rem] items-center'>
        <Button variant='ghost' className='w-9 h-9 bg-background' onClick={handleFixedSideNav}>
          <AlignLeft size={16} />
        </Button>
        <div className='flex items-center bg-background'>
          <div className='flex items-center justify-center w-9 h-9'>
            <MessagesSquare size={16} />
          </div>
          Chat history title
        </div>
      </div>
      <div className='flex gap-[0.571rem]'>
        {!isOpenItemPanel && (
          <Button
            variant='ghost'
            className='w-9 h-9 bg-background'
            onClick={() =>
              useOverlayStore.setState(state => ({
                isOpenItemPanel: !state.isOpenItemPanel,
              }))
            }>
            <ChartBarStacked size={16} />
          </Button>
        )}
      </div>
    </StickyCard>
  );
}
