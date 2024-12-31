import { memo, useMemo, useRef, useEffect } from 'react';
import { Message as IMessage } from 'ai/react';
import Messages from '@/features/message';
import { useChatStore } from '@/store/chat';
import MessageLoader from '@/components/message-loader';

interface ChatInterfaceProps {
  messages: IMessage[];
  isLoading: boolean;
}

function ChatInterface({ messages, isLoading }: ChatInterfaceProps) {
  const { inputHeight, setIsAtBottom } = useChatStore();
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const paddingBottom = useMemo(() => `${Number(inputHeight) / 14 + 1}rem`, [inputHeight]);
  const isChatLoadingCondition = isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user';

  const renderedMessages = useMemo(
    () =>
      messages.map((message, idx) => (
        <Messages key={message.id} message={message} isLoading={isLoading && messages.length - 1 === idx} isLastIndex={messages.length - 1 === idx} />
      )),
    [messages, isLoading],
  );

  useEffect(() => {
    const container = messagesContainerRef.current;
    const end = messagesEndRef.current;

    if (container && end) {
      const observer = new MutationObserver(() => {
        end.scrollIntoView({ behavior: 'instant', block: 'end' });
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (container) {
      const handleScroll = () => {
        const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 10;
        setIsAtBottom(atBottom);
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [setIsAtBottom]);

  return (
    <div id='messages-container' ref={messagesContainerRef} className='w-full h-full flex flex-col overflow-y-scroll'>
      <div className='w-full h-auto max-w-[48.571rem] flex flex-col items-center mx-auto pt-[3.429rem] gap-6' style={{ paddingBottom }}>
        {renderedMessages}
        {isChatLoadingCondition && <MessageLoader />}
      </div>

      <div ref={messagesEndRef} className='shrink-0 min-w-6 min-h-6' />
    </div>
  );
}

export default memo(
  ChatInterface,
  (prevProps, nextProps) => prevProps.messages === nextProps.messages && prevProps.isLoading === nextProps.isLoading,
);
