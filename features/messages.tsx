import { cn } from '@/lib/utils';
import type { ChatRequestOptions, Message } from 'ai';
import { Markdown } from '@/components/markdown';
import { SparklesIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface MessagesProps {
  id: string;
  message: Message;
  isLoading: boolean;
  isLastIndex?: boolean;
  reload: (chatRequestOptions?: ChatRequestOptions) => Promise<string | null | undefined>;
}

export default function Messages({ id, message, isLoading, isLastIndex, reload }: MessagesProps) {
  const isAssistant = message.role === 'assistant';
  const mode = 'view';

  return (
    <AnimatePresence>
      <motion.div
        className='w-full mx-auto max-w-3xl px-4 group/message'
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        data-role={message.role}>
        <div className='flex gap-4 w-full group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:w-fit'>
          {isAssistant && (
            <div className='size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border bg-background'>
              <div className='translate-y-px z-0'>
                <SparklesIcon size={14} />
              </div>
            </div>
          )}
          <div
            className={cn('flex flex-col gap-4', {
              'bg-primary text-primary-foreground px-3 py-2 rounded-xl': message.role === 'user',
            })}>
            <Markdown>{message.content as string}</Markdown>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
