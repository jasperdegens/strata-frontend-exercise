import { LeaderboardData, UserDetails } from '../../types';
import { Leader } from '../../components/Leader';
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
      {hydration && (
        <>
          {leaders ? (
            <>
              {leaders
                .sort((a, b) => b.score - a.score)
                .map((leader: UserDetails) => (
                  <Leader key={leader.username} leader={leader} />
                ))}
            </>
          ) : (
            <p>Something went wrong with loading the leaders</p>
          )}
        </>
      )}
    </div>
  );
};

const getLeaderboardUsers = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/leaderboard`,
    {
      next: { revalidate: 20 },
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};

export async function getStaticProps() {
  const leaderboard: LeaderboardData = await getLeaderboardUsers();
  const leaders = leaderboard?.leaderboard;

  return {
    props: {
      leaders,
    },
  };
}

export default Leaderboard;
