import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOverlayStore } from '@/store/overlay';
import StickyCard from '@/components/sticky-card';

export default function ItemHeader() {
  return (
    <StickyCard className='h-auto p-[1.714rem] pb-0'>
      <div className='flex-1 flex justify-between items-center'>
        <p className='text-xl font-bold'>답변 참고 자료 보기</p>
        <Button
          variant='ghost'
          className='w-9 h-9'
          onClick={() =>
            useOverlayStore.setState(state => ({
              isOpenItemPanel: !state.isOpenItemPanel,
            }))
          }>
          <ChevronRight size={16} />
        </Button>
      </div>
    </StickyCard>
  );
}
