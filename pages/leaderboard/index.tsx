// React
import { FC, useContext } from 'react'

// Types
import { UserDetails } from '../../types'

// Components
import UserCard from '../../components/UserCard'

// Utils
import MainContext from '../../utils/contexts/MainContext'

const Leaderboard: FC = () => {
  const { allUsers } = useContext(MainContext)

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
