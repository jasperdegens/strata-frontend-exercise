'use client';

import { LeaderboardData, UserDetails } from '../../types';
import { Leader } from '../../components/Leader';
import { checkEnvironment } from '../../helpers/checkEnvironment';
import { useEffect, useState } from 'react';

interface LeaderboardProps {
  leaders: UserDetails[];
}

const Leaderboard = ({ leaders }: LeaderboardProps) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <div className='w-full h-80 flex flex-row flex-wrap items-center justify-center text-gray-900'>
      {hydration &&
        leaders &&
        leaders.map((leader: UserDetails) => (
          <Leader key={leader.username} leader={leader} />
        ))}
    </div>
  );
};

const getLeaderboardUsers = async () => {
  const response = await fetch(checkEnvironment().concat('/api/leaderboard'), {
    next: { revalidate: 20 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};

export async function getServerSideProps() {
  const leaderboard: LeaderboardData = await getLeaderboardUsers();
  const leaders = leaderboard?.leaderboard;

  return {
    props: {
      leaders,
    },
  };
}

export default Leaderboard;
