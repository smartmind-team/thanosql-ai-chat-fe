import { create } from 'zustand';

interface ChatStore {
  inputHeight: number;
  isAtBottom: boolean;
  setInputHeight: (height: number) => void;
  setIsAtBottom: (isAtBottom: boolean) => void;
  scrollToBottom: () => void;
}

export const useChatStore = create<ChatStore>(set => ({
  inputHeight: 0,
  isAtBottom: true,
  setInputHeight: height => set({ inputHeight: height }),
  setIsAtBottom: isAtBottom => set({ isAtBottom }),
  scrollToBottom: () => {
    const container = document.querySelector('#messages-container') as HTMLDivElement;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  },
}));
