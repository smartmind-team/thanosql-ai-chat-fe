import { Button } from '@/components/ui/button';
import { Smartphone, MessagesSquare, AlignLeft, ChartBarStacked } from 'lucide-react';
import { useOverlayStore } from '@/store/overlay';
import StickyCard from './sticky-card';

export default function ChatHeader() {
  const { isOpenItemPanel, handleFixedSideNav } = useOverlayStore();

  return (
    <StickyCard>
      <div className='flex gap-[0.286rem] items-center'>
        <Button variant='ghost' className='w-9 h-9' onClick={handleFixedSideNav}>
          <AlignLeft size={16} />
        </Button>
        <div className='flex items-center'>
          <div className='flex items-center justify-center w-9 h-9'>
            <MessagesSquare size={16} />
          </div>
          Chat history title
        </div>
      </div>
      <div className='flex gap-[0.571rem]'>
        <Button variant='ghost' className='w-9 h-9'>
          <Smartphone size={16} />
        </Button>
        {!isOpenItemPanel && (
          <Button
            variant='ghost'
            className='w-9 h-9'
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
