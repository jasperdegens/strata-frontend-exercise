import React from 'react';
import Image from 'next/image';

import { useUserStore } from '../store/store';

import TwitterIcon from '../public/svg/twitter.svg';
import MailIcon from '../public/svg/mail.svg';

import { ProfileData } from '../types';

interface UserProfileInterface {
  user: ProfileData;
}

export const UserProfile = ({ user }: UserProfileInterface) => {
  const likedUsers = useUserStore((state) => state.likedUsers);
  const likeUser = useUserStore((state) => state.likeUser);
  const dislikeUser = useUserStore((state) => state.dislikeUser);

  const isLiked = likedUsers.find((likedUser) => likedUser === user.username);

  return (
    <>
      {user && (
        <div className='absolute top-10 max-w-md w-full border rounded-3xl shadow-md border-gray-200 p-4 bg-white'>
          <div className='flex-none bg-cover rounded-t text-center overflow-hidden'>
            <Image
              width={125}
              height={125}
              src={`/users/${user.username}.png`}
              alt={user.username}
              priority
              className='w-125 h-125 rounded-full shadow-lg p-3 mb-3'
            />
          </div>
          <div className='p-4 flex flex-col justify-between leading-normal'>
            <h1 className='text-gray-900 font-bold text-xl mb-3'>
              {user.username}
            </h1>
            <h3 className='text-gray-700 text-base mb-3'>{user.birthday}</h3>
            <p className='text-gray-700 text-base mb-3'>
              {user.bio.substring(0, 200)}...
            </p>
            <div className='text-sm'>
              {isLiked ? (
                <button
                  className='mb-1'
                  onClick={() => dislikeUser(user.username)}
                >
                  <span className='text-indigo-600 text-lg mr-2 ml-1'>♥︎</span>
                  <span>You like {user.username}</span>
                </button>
              ) : (
                <button
                  className='mb-1'
                  onClick={() => likeUser(user.username)}
                >
                  <span className='text-indigo-600 text-lg mr-2 ml-1'>♡</span>
                  <span>Like</span>
                </button>
              )}
              <a
                target='_blank'
                rel='noreferrer'
                href={`mailto:${user.email}`}
                className='flex justify-start items-center text-gray-900 leading-none mb-2'
              >
                <MailIcon />
                <span className='ml-1'>{user.email}</span>
              </a>
              <a
                href={`https://twitter.com/${user.twitter}`}
                target='_blank'
                rel='noreferrer'
                className='flex justify-start items-center text-gray-900 leading-none mb-2'
              >
                <TwitterIcon />
                <span className='ml-1'>{user.twitter}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
