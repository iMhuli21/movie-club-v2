import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import Rating from './rating';

export default function Movie() {
  return (
    <div className='w-[220px] p-2 hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
      <div className='w-full space-y-2'>
        <Image
          src='/black_adam_poster.jpg'
          alt='black adam poster'
          width={210}
          height={210}
          priority
          className='w-full rounded-xl object-center'
        />
        <div className='space-y-2 w-full'>
          <h3 className='truncate'>Black Adam</h3>
          <div className='flex items-center justify-between w-full text-sm'>
            <div className='flex items-center gap-2'>
              <FaStar className='text-yellow-400' />
              <span>7.5</span>
            </div>
            <Rating text='2023' extraStyles='text-xs' />
          </div>
        </div>
      </div>
    </div>
  );
}
