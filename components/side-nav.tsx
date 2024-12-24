import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ThemeToggle from "@/features/theme-toggle";
import { Button } from "@/components/ui/button";
import { useOverlayStore } from "@/store/overlay";
import { cn } from "@/lib/utils";

export default function SideNav() {
  const { isSideNavOpen, isFixedSideNav, setIsSideNavOpen } = useOverlayStore();
  const handleMouseEnter = () => setIsSideNavOpen(true);
  const handleMouseLeave = () => !isFixedSideNav && setIsSideNavOpen(false);

  return (
    <>
      {!isFixedSideNav && !isSideNavOpen && (
        <div
          className="w-4 h-full bg-transparent absolute bottom-0 left-0"
          onMouseEnter={handleMouseEnter}
        />
      )}

      <AnimatePresence>
        {isSideNavOpen && (
          <motion.div
            className={cn(
              "h-screen bg-sideBackground p-[1.143rem] flex flex-col z-40",
              isFixedSideNav ? "relative pr-0" : "absolute top-0 left-0"
            )}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "20rem", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseLeave={handleMouseLeave}
          >
            <NavHeader />
            <div className="flex-1 pt-[7.214rem]">recent</div>
            <NavFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavHeader() {
  return (
    <div className="flex flex-col gap-[0.714rem]">
      <h1 className="text-[1.5rem] font-medium">ThanoSQL</h1>

      <Button
        variant="outline"
        className="w-[10.071rem] border"
        onClick={() => console.log("새 대화 시작하기")}
      >
        <Plus /> 새 대화 시작하기
      </Button>
    </div>
  );
}

function NavFooter() {
  return <ThemeToggle />;
}
