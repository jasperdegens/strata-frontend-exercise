'use client';

import { ProfileData } from '../../types';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { UserProfile } from '../../components/UserProfile';

import { BackButton } from '../../components/BackButton';
import { Spinner } from '../../components/Spinner';

const User = () => {
  const [user, setUser] = useState<ProfileData | null>(null);

  const router = useRouter();
  const { username } = router.query;

  const fetchUser = useCallback(async () => {
    const URL_STRING = `${process.env.NEXT_PUBLIC_API_URL}/api/profile/${username}`;
    const response = await fetch(URL_STRING);
    const user = await response.json();
    setUser(user);
  }, [username]);

  useEffect(() => {
    if (username) {
      fetchUser();
    }
  }, [username, fetchUser]);

  return (
    <div className='w-full flex flex-col items-center justify-center space-y-12 text-gray-900'>
      {user ? (
        <>
          <BackButton path='/leaderboard' />
          <UserProfile user={user} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default User;
