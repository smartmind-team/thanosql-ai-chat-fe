import { cn } from '@/lib/utils';

interface StickyCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function StickyCard({ children, className, id }: StickyCardProps) {
  return (
    <div
      className={cn('w-full h-[3.429rem] flex justify-between items-center p-[0.857rem] sticky top-0 left-0 bg-background z-10', className)}
      id={id}>
      {children}
    </div>
  );
}
