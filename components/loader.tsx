import { Loader2 as LoaderIcon } from 'lucide-react';

export default function Loader() {
  return (
    <div className='w-full flex items-center justify-center p-2 h-full'>
      <LoaderIcon className='animate-spin size-10' />
    </div>
  );
}
