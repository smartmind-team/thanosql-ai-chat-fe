import ItemHeader from '@/components/item-header';

export default function ItemPanel() {
  return (
    <div className='w-full h-full flex flex-col'>
      <ItemHeader />
      <div className='flex flex-1 justify-center items-center'>Item panel</div>
    </div>
  );
}
