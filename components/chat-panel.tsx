import { memo } from 'react';
import Welcome from '@/features/chat/welcome';
import ChatHeader from '@/components/chat-header';
import ChatInterface from '@/features/chat/chat-interface';
import ChatInput from '@/features/chat/chat-input';
import { useChat } from 'ai/react';

function ChatPanel() {
  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
    api: 'http://127.0.0.1:8000/chat',
    streamProtocol: 'data',
  });

  const isMessageEmpty = messages.length === 0;

  return (
    <div className='w-full h-full overflow-hidden relative'>
      <ChatHeader isMessageEmpty={isMessageEmpty} isLoading={isLoading} />
      {isMessageEmpty ? <Welcome setInput={setInput} /> : <ChatInterface messages={messages} isLoading={isLoading} />}
      <ChatInput input={input} setInput={setInput} isLoading={isLoading} handleSubmit={handleSubmit} />
    </div>
  );
}

export default memo(ChatPanel);
