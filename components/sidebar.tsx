import React from 'react';

export default function Sidebar() {
  return (
    <div className='hidden lg:block lg:col-span-1 h-full px-4'>
      <h3 className='font-bold text-lg'>Genre</h3>
      <ul className='flex flex-col items-start gap-2 mt-6 w-full'>
        <li className='p-1 text-white/50 font-medium w-full text-sm hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>
          Adventure
        </li>
        <li className='p-1 text-white/50 font-medium w-full text-sm hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>
          Fantasy
        </li>
        <li className='p-1 text-white/50 font-medium w-full text-sm hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>
          Animation
        </li>
        <li className='p-1 text-white/50 font-medium w-full text-sm hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>
          Drama
        </li>
        <li className='p-1 text-white/50 font-medium w-full text-sm hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>
          Horror
        </li>
        <li className='p-1 text-white/50 font-medium w-full text-sm hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>
          Action
        </li>
      </ul>
    </div>
  );
}
