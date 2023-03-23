// React
import { FC, useContext } from 'react'

// Types
import { UserDetails } from '../../types'

// Components
import UserCard from '../../components/UserCard'

// Utils
import MainContext from '../../utils/contexts/MainContext'
import {
  API_LEADERBOARD_URL,
  INTERVAL_VALUE,
} from '../../utils/constants/constants'

// Hooks
import { useLeaderboardInterval } from '../../utils/hooks/useLeaderboardInterval'

const Leaderboard: FC = () => {
  const { allUsers } = useContext(MainContext)

  useLeaderboardInterval(API_LEADERBOARD_URL, INTERVAL_VALUE)

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center text-black">
        <ul>
          {allUsers &&
            allUsers.map((user: UserDetails) => (
              <UserCard user={user} key={user.username} />
            ))}
        </ul>
      </div>
    </>
  )
}

export default Leaderboard
