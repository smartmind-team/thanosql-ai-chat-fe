import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { MessagesSquare, AlignLeft } from 'lucide-react';
import { useOverlayStore } from '@/store/overlay';
import StickyCard from '../../components/sticky-card';
import { motion } from 'framer-motion';

interface ChatHeaderProps {
  isMessageEmpty: boolean;
  isLoading: boolean;
}

function ChatHeader({ isMessageEmpty, isLoading }: ChatHeaderProps) {
  const { toggleFixedSideNav } = useOverlayStore();

  return (
    <StickyCard className='absolute top-0' id='custom-inner-gradient'>
      <div className='flex gap-[0.286rem] items-center'>
        <Button variant='ghost' className='w-9 h-9 bg-background' onClick={toggleFixedSideNav}>
          <AlignLeft size={16} />
        </Button>
        {!isMessageEmpty && (
          <motion.div className='flex items-center bg-background px-4 rounded-md' initial={{ x: 5, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <div className='flex items-center justify-center w-9 h-9'>
              <MessagesSquare size={16} />
            </div>
            Chat history title
          </motion.div>
        )}
      </div>
      {/* 
      TODO chat-control btn 
        <div className='flex gap-[0.571rem]'>
        </div> 
      */}
    </StickyCard>
  );
}

export default memo(ChatHeader, (prevProps, nextProps) => prevProps.isMessageEmpty === nextProps.isMessageEmpty);
