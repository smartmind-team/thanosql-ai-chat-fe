import ChatHeader from './chat-header';
import { useChat } from 'ai/react';
import PreviewMessages from '@/features/messages';
import MultimodalInput from '@/features/multimodal-input';

export default function ChatInterface() {
  const { messages, input, setInput, handleSubmit, isLoading, data, setData } = useChat({
    api: 'http://127.0.0.1:8000/chat',
    streamProtocol: 'data',
  });

  return (
    <div className='min-w-0 h-dvh flex flex-col relative overflow-y-scroll overflow-x-hidden'>
      <ChatHeader />
      <div className='w-full max-w-[48.571rem] flex-1 flex flex-col items-center mx-auto gap-y-8'>
        <div className='w-full flex-1 flex gap-6 flex-col relative'>
          {messages.map((message, idx) => (
            <PreviewMessages
              key={message.id}
              id={message.id}
              message={message}
              isLoading={isLoading && messages.length - 1 === idx}
              isLastIndex={messages.length - 1 === idx}
            />
          ))}
        </div>
        <MultimodalInput input={input} setInput={setInput} isLoading={isLoading} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
