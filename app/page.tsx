"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
import SideNav from "@/features/side-nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isItem, setIsItem] = useState<boolean>(false);

  return (
    <div className="flex-1 flex bg-sideBackground relative top-0 left-0">
      <SideNav />
      <div className="flex-1 p-[1.143rem]">
        <ResizablePanelGroup
          direction="horizontal"
          className="rounded-md bg-background border"
        >
          <ResizablePanel
            id="chat-panel"
            order={0}
            minSize={25}
            defaultSize={isItem ? 50 : 100}
          >
            <Button variant="ghost" onClick={() => setIsItem((prev) => !prev)}>
              One
            </Button>
          </ResizablePanel>
          {isItem && (
            <>
              <ResizableHandle id="resizable-handler" />
              <ResizablePanel
                id="item-panel"
                order={1}
                minSize={25}
                defaultSize={50}
              >
                <Button variant="ghost">Two</Button>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
