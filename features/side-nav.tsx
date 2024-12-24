import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeft, ArrowLeftFromLine, Plus } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => !isFixed && setIsOpen(false);
  const toggleFixed = () => {
    setIsFixed((prev) => {
      const newFixed = !prev;
      setIsOpen(newFixed);
      return newFixed;
    });
  };

  return (
    <>
      {!isFixed && !isOpen && (
        <div
          className="w-8 h-screen absolute top-0 left-0"
          onMouseEnter={handleMouseEnter}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`h-screen bg-sideBackground p-[1.143rem] flex flex-col  ${
              isFixed ? "relative pr-0" : "absolute top-0 left-0"
            }`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "20rem", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseLeave={handleMouseLeave}
          >
            <NavHeader toggleFixed={toggleFixed} isFixed={isFixed} />
            <div className="flex-1 pt-[7.214rem]">recent</div>
            <NavFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavHeader({
  toggleFixed,
  isFixed,
}: {
  toggleFixed: () => void;
  isFixed: boolean;
}) {
  return (
    <div className="flex flex-col gap-[0.714rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-[1.5rem] font-medium">ThanoSQL</h1>
        <Button
          variant="ghost"
          className="w-8 h-8 flex items-center justify-center"
          onClick={toggleFixed}
        >
          {isFixed ? <ArrowLeftFromLine size={16} /> : <PanelLeft size={16} />}
        </Button>
      </div>
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
