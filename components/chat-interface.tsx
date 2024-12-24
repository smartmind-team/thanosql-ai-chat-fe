import { Button } from "@/components/ui/button";
import ChatHeader from "./chat-header";
import { useOverlayStore } from "@/store/overlay";
import { cn } from "@/lib/utils";

export default function ChatInterface() {
  const { isOpenItemPanel, isFixedSideNav } = useOverlayStore();
  return (
    <div className="w-full h-full flex flex-col">
      <ChatHeader />
      <div
        className={cn(
          "w-full max-w-[48.571rem] flex-1 flex flex-col items-center justify-center gap-6 mx-auto",
          !isOpenItemPanel && !isFixedSideNav ? "mt-[3.429rem]" : "mt-0"
        )}
      >
        Chat Interface
        <Button
          onClick={() =>
            useOverlayStore.setState((state) => ({
              isOpenItemPanel: !state.isOpenItemPanel,
            }))
          }
        >
          Test Open Item Panel
        </Button>
      </div>
    </div>
  );
}
