export default function Loading() {
  return (
    <div role='status' className='space-y-2.5 animate-pulse max-w-lg'>
      <div className='flex items-center w-full'>
        <div className='h-2.5 bg-gray-200 rounded-full  w-32' />
        <div className='h-2.5 ms-2 bg-gray-300 rounded-full w-24' />
        <div className='h-2.5 ms-2 bg-gray-300 rounded-full  w-full' />
      </div>
      <div className='flex items-center w-full max-w-[480px]'>
        <div className='h-2.5 bg-gray-200 rounded-full  w-full' />
        <div className='h-2.5 ms-2 bg-gray-300 rounded-full  w-full' />
        <div className='h-2.5 ms-2 bg-gray-300 rounded-full  w-24' />
      </div>
    </div>
  );
}
