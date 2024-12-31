import { memo, useMemo } from 'react';
import { ThumbsUp, ThumbsDown, Copy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useOverlayStore } from '@/store/overlay';
import { Message as TypeMessage } from 'ai/react';
import { useCopyToClipboard } from 'usehooks-ts';
import { motion } from 'framer-motion';

interface MessageActionsProps {
  isLastIndex: boolean;
  message: TypeMessage;
}

function MessageActions({ isLastIndex, message }: MessageActionsProps) {
  const [_, copyToClipboard] = useCopyToClipboard();

  const viewAnswerResources = isLastIndex ? (
    <Button
      variant='secondary'
      className='bg-grays-gray05 text-xs text-texts-tertiary'
      onClick={() => {
        console.log(message);
        useOverlayStore.setState(state => ({
          isOpenItemPanel: !state.isOpenItemPanel,
        }));
      }}>
      답변 참고 자료 보기 <ChevronRight className='text-texts-primary' />
    </Button>
  ) : null;

  const baseActions = useMemo(
    () => [
      {
        value: 'Like',
        icon: <ThumbsUp />,
        onClick: () => console.log('like', message.id),
      },
      {
        value: 'Dislike',
        icon: <ThumbsDown />,
        onClick: () => console.log('dislike', message.id),
      },
      {
        value: 'Copy',
        icon: <Copy />,
        onClick: () => {
          alert('copy');
          copyToClipboard(message.content);
        },
      },
    ],
    [message.id, message.content, copyToClipboard],
  );

  return (
    <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='w-full flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        {baseActions.map((item, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Button variant='ghost' onClick={item.onClick} className='px-2'>
                {item.icon}
              </Button>
            </TooltipTrigger>
            <TooltipContent side='bottom' sideOffset={5}>
              <p>{item.value}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      {viewAnswerResources}
    </motion.div>
  );
}

export default memo(
  MessageActions,
  (prevProps, nextProps) => prevProps.message === nextProps.message && prevProps.isLastIndex === nextProps.isLastIndex,
);
