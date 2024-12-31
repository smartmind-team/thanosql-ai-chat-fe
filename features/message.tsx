import { memo, useMemo } from 'react';
import { cn } from '@/lib/utils';
import type { Message as IMessage } from 'ai';
import { Markdown } from '@/components/markdown';
import { SparklesIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import MessageActions from '@/features/message-actions';

interface MessagesProps {
  message: IMessage;
  isLoading: boolean;
  isLastIndex: boolean;
}

function Message({ message, isLoading, isLastIndex }: MessagesProps) {
  const isAssistant = message.role === 'assistant';
  const isShowActions = isAssistant && !isLoading;

  const content = useMemo(() => {
    return (
      <div
        className={cn('flex flex-col gap-4 pt-[0.4rem]', {
          'bg-grays-gray05 text-texts-primary-foreground px-3 py-2 rounded-xl': message.role === 'user',
        })}>
        <Markdown>{message.content as string}</Markdown>
      </div>
    );
  }, [message.content, message.role]);

  return (
    <AnimatePresence>
      <motion.div
        className='w-full mx-auto px-4 group/message'
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        data-role={message.role}>
        <div className='flex gap-4 group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-lg group-data-[role=user]/message:w-fit'>
          {isAssistant && (
            <div className='size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border bg-background'>
              <div className='translate-y-px z-0'>
                <SparklesIcon size={14} />
              </div>
            </div>
          )}
          <div className='w-full max-w-[calc(100%-3rem)] group-data-[role=user]/message:max-w-full flex flex-col gap-[0.857rem]'>
            {content}
            {isShowActions && <MessageActions isLastIndex={isLastIndex} message={message} />}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default memo(
  Message,
  (prevProps, nextProps) =>
    prevProps.message === nextProps.message && prevProps.isLoading === nextProps.isLoading && prevProps.isLastIndex === nextProps.isLastIndex,
);
