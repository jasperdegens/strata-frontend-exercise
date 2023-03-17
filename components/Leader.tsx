import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { UserDetails } from '../types';
import { useUserStore } from '../store/store';
import { UserStoreInterface } from '../store/store';

interface LeaderProps {
  leader: UserDetails;
}

export const Leader = ({ leader }: LeaderProps) => {
  const likedUsers = useUserStore(
    (state: UserStoreInterface) => state.likedUsers
  );
  const isLiked = likedUsers.find((likedUser) => likedUser === leader.username);

  return (
    <Link key={leader.username} href={`/profile/${leader.username}`}>
      <div className='relative flex flex-col p-5 items-center pb-10'>
        <Image
          width={125}
          height={125}
          src={leader.profileImage}
          alt={leader.username}
          priority
          className='w-125 h-125 rounded-full shadow-lg'
        />
        <span className=' text-center absolute right-4 top-4'>
          {isLiked ? (
            <p className='text-5xl mb-1 text-indigo-600	'>♥︎</p>
          ) : (
            <p className='text-5xl text-indigo-600'>♡</p>
          )}
        </span>
        <h5 className='text-xl font-medium text-gray-900 mt-3'>
          {leader.username}
        </h5>
        <p>
          Score <span className='text-blue-800'>{leader.score}</span>
        </p>
      </div>
    </Link>
  );
};
