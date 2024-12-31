import { motion } from 'framer-motion';

interface WelcomeProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function Welcome({ setInput }: WelcomeProps) {
  const itemList = ['"가스요금은 어떤 수납방법이 있나요?"', '"가스요금은 어떤 수납방법이 있나요?"', '"가스요금은 어떤 수납방법이 있나요?"'];

  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
      <motion.h1
        className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[rgba(138,75,204,1)] to-[rgba(58,32,86,1)] dark:to-[rgba(244,237,251,1)]'
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        무엇을 도와드릴까요?
      </motion.h1>
      <motion.div className='flex flex-col gap-3 w-[90%] max-w-[37.143rem]' initial='hidden' animate='visible'>
        {itemList.map((item, idx) => (
          <motion.div
            key={idx}
            className='w-full h-[2.857rem] flex justify-center items-center border bg-background rounded-lg hover:border-brands-main cursor-pointer transition duration-300 ease-in-out'
            onClick={() => setInput(item)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.15 }}>
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
