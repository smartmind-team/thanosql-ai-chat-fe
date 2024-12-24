import { Button } from "@/components/ui/button";
import { Smartphone, MessagesSquare, AlignLeft } from "lucide-react";
import { useOverlayStore } from "@/store/overlay";
import { cn } from "@/lib/utils";

export default function ChatHeader() {
  const { isOpenItemPanel, isFixedSideNav, handleFixedSideNav } =
    useOverlayStore();

  return (
    <div
      className={cn(
        "w-full h-[3.429rem] flex justify-between items-center p-[0.607rem] ",
        !isOpenItemPanel && !isFixedSideNav
          ? "absolute top-[1.143rem] left-[1.143rem] w-[calc(100%-2.286rem)]"
          : "w-full top-0 left-0"
      )}
    >
      <div className="flex gap-[0.286rem] items-center">
        <Button
          variant="ghost"
          className="w-9 h-9"
          onClick={handleFixedSideNav}
        >
          <AlignLeft size={16} />
        </Button>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-9 h-9">
            <MessagesSquare size={16} />
          </div>
          Chat history title
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" className="w-9 h-9">
          <Smartphone size={16} />
        </Button>
      </div>
    </div>
  );
}
