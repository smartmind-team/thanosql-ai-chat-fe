import { useTextStreamer } from '@/hooks/use-text-streamer';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';

const LOADING_ITEMS = ['질문 확인 중입니다.', '자료 분석 중입니다.', '데이터베이스 정보를 추출 중입니다.', '관련 문서에서 정보를 추출 중입니다.'];

export default function MessageLoader() {
  const currentText = useTextStreamer({ items: LOADING_ITEMS, delay: 1250, charInterval: 18 });

  return (
    <motion.div
      className='w-full mx-auto max-w-3xl px-4 group/message'
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      data-role='assistant'>
      <div className='flex gap-4 w-full group-data-[role=user]/message:px-3 group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl'>
        <div className='size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border'>
          <SparklesIcon size={14} />
        </div>
        <div className='flex flex-col gap-2 w-full pt-[0.4rem]'>
          <motion.div className='flex flex-col gap-4 text-muted-foreground'>{currentText}</motion.div>
        </div>
      </div>
    </motion.div>
  );
}
