import React from 'react';
import { useRouter } from 'next/router';
import ArrowIcon from '../public/svg/arrow.svg';

interface BackButtonProps {
  path: string;
}

export const BackButton = ({ path }: BackButtonProps) => {
  const router = useRouter();

  return (
    <div className='fixed right-5 top-5'>
      <button
        className='flex cursor-pointer items-center'
        onClick={() => router.push(path)}
      >
        <ArrowIcon />
        <span className='ml-2'>Go back</span>
      </button>
    </div>
  );
};
