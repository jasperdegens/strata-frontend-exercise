import { FC, useState, useContext } from 'react'

// Next
import { useRouter } from 'next/router'
import Image from 'next/image'

// Types
import { UserDetails } from '../types'

// Utils
import { PROFILE_URL } from '../utils/constants/constants'
import MainContext from '../utils/contexts/MainContext'

// Components
import Spinner from '../components/Spinner'

// Interfaces
interface UserCardProps {
  user: UserDetails
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  const router = useRouter()

  const { setSelectedUser } = useContext(MainContext)

  const [showSpinner, setShowSpinner] = useState<boolean>(false)

  const handleClick = async () => {
    setShowSpinner(true)
    setSelectedUser(user)
    await router.push(`${PROFILE_URL}/${user.username}`)
    setShowSpinner(false)
  }

  return (
    <>
      <li key={user.username} className="border-gray-300 border-b p-2">
        <div
          className="w-80 flex flex-row items-center justify-between p-2 cursor-pointer"
          onClick={handleClick}
        >
          <Image
            className="w-125 h-125 rounded-full shadow-lg mr-5"
            src={user.profileImage}
            alt={user.username}
            width={50}
            height={50}
            priority
          />
          <div className="flex-1 mx-1 text-lg font-normal truncate flex flex-row items-center">
            <p className="mr-3">{user.username}</p>
            {showSpinner && <Spinner />}
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-400 pointer-events-none">
            <p>Score: {user.score}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default UserCard
