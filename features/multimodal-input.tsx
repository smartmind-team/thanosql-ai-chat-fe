import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import StickyCard from '@/components/sticky-card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AtSign, Hash, MessageSquareCode, ArrowUp } from 'lucide-react';

export default function MultimodalInput({
  input,
  isLoading,
  setInput,
  handleSubmit,
}: {
  input: string;
  isLoading: boolean;
  setInput: Dispatch<SetStateAction<string>>;
  handleSubmit: (event?: { preventDefault?: () => void }) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '20px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
    }
  };
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    adjustHeight();
  };

  return (
    <StickyCard className='w-full h-auto bottom-9 flex flex-col pt-10' id='custom-gradient'>
      <div className='bg-grays-gray05 w-full h-full rounded-lg p-[1.143rem] pb-[0.857rem]'>
        <Textarea
          disabled={isLoading}
          ref={textareaRef}
          value={input}
          rows={1}
          placeholder='Send a message...'
          className='max-h-[calc(35dvh)] overflow-hidden resize-none !text-base border-0 shadow-none focus-visible:ring-0 p-0 mb-[0.857rem]'
          onChange={handleInput}
          autoFocus
          onKeyDown={event => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();

              if (!isLoading) {
                handleSubmit();
              }
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
            disabled={isLoading}
            className='text-xs min-w-[2.286rem] h-[2.286rem] bg-brands-main text-white p-0'
            onClick={() => {
              console.log('test');
              handleSubmit();
            }}>
            <ArrowUp />
          </Button>
        </div>
      </div>
    </StickyCard>
  );
}
