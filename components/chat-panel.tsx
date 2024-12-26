import ChatHeader from './chat-header';
import { useOverlayStore } from '@/store/overlay';
import { cn } from '@/lib/utils';
import { useChat } from 'ai/react';
import PreviewMessages from '@/features/messages';
import StickyCard from './sticky-card';
import { Textarea } from './ui/textarea';
import { useEffect, useRef } from 'react';

export default function ChatInterface() {
  const { isOpenItemPanel, isFixedSideNav } = useOverlayStore();
  const { messages, input, setInput, handleSubmit, handleInputChange, isLoading, data, setData, reload } = useChat({
    api: 'http://127.0.0.1:8000/chat',
    streamProtocol: 'data',
  });

  const test = [
    {
      id: '1',
      content: '납부방법문의',
      role: 'user',
    },
    {
      id: '2',
      content: `납부 방법에 대한 문의를 하시려면, 정확히 어떤 납부를 말씀하시는지에 대한 추가 정보가 필요합니다. 일반적으로 납부 방법은 다음과 같은 여러 가지 방식이 있을 수 있습니다:

은행 이체: 각종 청구서나 관리비 등을 은행 계좌를 통해 직접 이체하는 방법입니다.

자동이체: 정기적으로 납부해야 하는 요금에 대해 자동이체 신청을 하시면, 매월 정해진 날짜에 해당 금액이 자동으로 이체됩니다.

신용카드 결제: 신용카드를 사용하여 온라인 또는 오프라인에서 직접 결제할 수 있습니다.

직접 납부: 지정된 장소나 기관을 방문하여 직접 현금이나 카드로 납부하는 방법입니다.

인터넷/모바일 뱅킹: 모바일 앱이나 인터넷 뱅킹 서비스를 통해 온라인으로 납부하는 방법입니다.


해당하는 납부에 대한 자세한 정보를 알려주시면, 더 구체적인 안내를 드릴 수 있습니다.
      `,
      role: 'assistant',
    },
    {
      id: '3',
      content: '요금문의',
      role: 'user',
    },
    {
      id: '4',
      content: `요금에 대한 문의를 하시려면, 어떤 서비스 또는 상품에 대한 요금인지 구체적으로 알려주셔야 더욱 정확한 정보를 제공할 수 있습니다. 일반적인 요금 문의는 다음과 같은 항목에 대해 이루어질 수 있습니다:

통신 요금
  : 휴대폰, 인터넷, IPTV 등과 관련한 요금.

공공 요금
  : 전기, 가스, 수도 등과 관련한 요금.

구독 서비스 요금
  : 넷플릭스, 유튜브 프리미엄, 스포티파이 등과 같은 구독 기반 서비스의 요금.

학비 또는 수업료
  : 학교 또는 학원의 강의 및 수업에 대한 요금.

보험료
  : 건강, 자동차, 생명 보험 등의 보험료.

이 외에도 다양한 서비스와 상품에 따라 요금 체계가 달라질 수 있으므로, 구체적인 정보를 제공해주시면 보다 정확하고 유용한 답변을 드릴 수 있습니다. 궁금한 점에 대한 세부 정보를 주시면 도움이 되겠습니다.
이 외에도 다양한 서비스와 상품에 따라 요금 체계가 달라질 수 있으므로, 구체적인 정보를 제공해주시면 보다 정확하고 유용한 답변을 드릴 수 있습니다. 궁금한 점에 대한 세부 정보를 주시면 도움이 되겠습니다.
이 외에도 다양한 서비스와 상품에 따라 요금 체계가 달라질 수 있으므로, 구체적인 정보를 제공해주시면 보다 정확하고 유용한 답변을 드릴 수 있습니다. 궁금한 점에 대한 세부 정보를 주시면 도움이 되겠습니다.
이 외에도 다양한 서비스와 상품에 따라 요금 체계가 달라질 수 있으므로, 구체적인 정보를 제공해주시면 보다 정확하고 유용한 답변을 드릴 수 있습니다. 궁금한 점에 대한 세부 정보를 주시면 도움이 되겠습니다.
이 외에도 다양한 서비스와 상품에 따라 요금 체계가 달라질 수 있으므로, 구체적인 정보를 제공해주시면 보다 정확하고 유용한 답변을 드릴 수 있습니다. 궁금한 점에 대한 세부 정보를 주시면 도움이 되겠습니다.`,
      role: 'assistant',
    },
  ];

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
    }
  };
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    adjustHeight();
  };

  return (
    <div className='min-w-0 h-dvh flex flex-col relative overflow-y-scroll'>
      <ChatHeader />
      <div className='w-full max-w-[48.571rem] flex-1 flex flex-col items-center mx-auto gap-y-8'>
        <div className='w-full flex-1 flex gap-6 flex-col overflow-y-auto relative'>
          {test.map((message, idx) => (
            <PreviewMessages
              key={message.id}
              id={message.id}
              message={message}
              isLoading={isLoading && messages.length - 1 === idx}
              isLastIndex={messages.length - 1 === idx}
              reload={reload}
            />
          ))}
        </div>
        <StickyCard className='w-full h-auto bottom-9 pt-10' id='custom-gradient'>
          <Textarea
            ref={textareaRef}
            placeholder='Send a message...'
            className='min-h-[24px] h-auto max-h-[calc(50dvh)] overflow-hidden resize-none rounded-2xl !text-base bg-muted pb-10 dark:border-zinc-700'
            rows={2}
            onChange={handleInput}
            autoFocus
            onKeyDown={event => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
              }
            }}
          />
          <button>Submit</button>
        </StickyCard>
      </div>
    </div>
  );
}
