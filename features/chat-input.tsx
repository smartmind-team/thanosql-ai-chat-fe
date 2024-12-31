import { memo, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import StickyCard from '@/components/sticky-card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, AtSign, Hash, MessageSquareCode } from 'lucide-react';
import { useChatStore } from '@/store/chat';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event?: { preventDefault?: () => void }) => void;
}

const ScrollToBottomButton = memo(({ isAtBottom, scrollToBottom }: { isAtBottom: boolean; scrollToBottom: () => void }) => (
  <AnimatePresence>
    {!isAtBottom && (
      <motion.div
        className='absolute -top-4 w-8 h-8 rounded-full border bg-background flex justify-center items-center cursor-pointer'
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        onClick={scrollToBottom}>
        <ArrowDown size={16} />
      </motion.div>
    )}
  </AnimatePresence>
));

function ChatInput({ input, isLoading, setInput, handleSubmit }: ChatInputProps) {
  const { setInputHeight, isAtBottom, scrollToBottom } = useChatStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const adjustHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(event.target.value);
      adjustHeight();
    },
    [setInput, adjustHeight],
  );

  const handleChat = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      handleSubmit();
    }
  }, [handleSubmit]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container) {
      const observer = new ResizeObserver(() => setInputHeight(container.offsetHeight));
      observer.observe(container);
      return () => observer.disconnect();
    }
  }, [setInputHeight]);

  useEffect(() => {
    adjustHeight();
  }, [adjustHeight, input]);

  return (
    <StickyCard className='max-w-[48.571rem] mx-auto h-auto bottom-0 flex flex-col pt-10' id='custom-gradient'>
      <ScrollToBottomButton isAtBottom={isAtBottom} scrollToBottom={scrollToBottom} />
      <motion.div
        ref={containerRef}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='bg-grays-gray05 w-full h-full rounded-lg p-[1.143rem] pb-[0.857rem]'>
        <Textarea
          disabled={isLoading}
          ref={textareaRef}
          value={input}
          rows={1}
          placeholder='Send a message...'
          className='max-h-[calc(35dvh)] overflow-y-scroll resize-none !text-base border-0 shadow-none focus-visible:ring-0 p-0 mb-[0.857rem]'
          onChange={handleInput}
          autoFocus
          onKeyDown={event => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              if (!isLoading) handleChat();
            }
          }}
        />
        <div className='w-full flex justify-between items-center'>
          <div className='flex gap-[0.571rem] flex-1'>
            <Button variant='ghost' disabled={isLoading} className='text-xs w-[2rem] h-[2rem] p-0 hover:bg-transparent'>
              <AtSign />
            </Button>
            <Button variant='ghost' disabled={isLoading} className='text-xs w-[2rem] h-[2rem] p-0 hover:bg-transparent'>
              <Hash />
            </Button>
            <Button variant='ghost' disabled={isLoading} className='text-xs w-auto h-[2rem] p-0 hover:bg-transparent'>
              <MessageSquareCode /> 채팅 설정
            </Button>
          </div>
          <Button
            variant='ghost'
            disabled={isLoading || !input}
            className={cn('text-xs min-w-[2.286rem] h-[2.286rem]  p-0', !!input ? 'bg-brands-main text-white' : 'bg-grays-gray04 text-grays-gray02')}
            onClick={handleChat}>
            <ArrowUp />
          </Button>
        </div>
      </motion.div>
    </StickyCard>
  );
}

export default memo(ChatInput, (prevProps, nextProps) => prevProps.input === nextProps.input && prevProps.isLoading === nextProps.isLoading);
