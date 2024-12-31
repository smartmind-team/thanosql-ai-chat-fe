import ContentHeader from '@/features/content/content-header';

export default function ContentPanel() {
  return (
    <div className='w-full h-full flex flex-col'>
      <ContentHeader />
      <div className='flex flex-1 justify-center items-center'>Item panel</div>
    </div>
  );
}
