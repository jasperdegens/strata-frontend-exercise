// React
import { FC, useContext, useState, useEffect } from 'react'

// Next
import { useRouter } from 'next/router'
import Image from 'next/image'

// Context
import MainContext from '../../utils/contexts/MainContext'
import { API_PROFILE_URL } from '../../utils/constants/constants'

// Types
import { ProfileData } from '../../types'

// Components
import Spinner from '../../components/Spinner'
import HeartIcon from '../../components/HeartIcon'
import GoBackButton from '../../components/GoBackButton'

const User: FC = () => {
  // Router
  const router = useRouter()
  const usernameFromQuery = router.query.username

  // Context
  const { allUsers, selectedUser, setSelectedUser } = useContext(MainContext)

  // States
  const [userProfile, setUserProfile] = useState({} as ProfileData)

  useEffect(() => {
    if (!selectedUser.username) {
      const newSeletedUser = allUsers.find(
        (user) => user.username == usernameFromQuery
      )
      newSeletedUser && setSelectedUser(newSeletedUser)
    }
  }, [allUsers, selectedUser.username, setSelectedUser, usernameFromQuery])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await (
        await fetch(`${API_PROFILE_URL}/${usernameFromQuery}`)
      ).json()
      setUserProfile(fetchedUser)
    }

    fetchData()
  }, [selectedUser, usernameFromQuery])

  return (
    <>
      <div className="w-full h-80 flex flex-col items-center justify-center space-y-12 text-black">
        {userProfile.username && selectedUser.username ? (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <div className="flex flex-col items-center pb-10 pt-10">
              <Image
                className="w-125 h-125 rounded-full shadow-lg"
                src={selectedUser.profileImage}
                alt={selectedUser.username}
                width={100}
                height={100}
                priority
              />
              <div className="space-x-3 flex mt-4">
                <h5 className="mb-1 text-xl font-medium">
                  {selectedUser.username}
                </h5>
                <HeartIcon color={selectedUser.favorite ? 'red' : 'gray'} />
              </div>
              <span className="text-sm text-gray-500">
                Twitter: {userProfile.twitter}
              </span>
              <span className="text-sm text-gray-500">
                Mail: {userProfile.email}
              </span>
              <div className="mt-4">
                <GoBackButton />
              </div>
            </div>
          </div>
        ) : (
          <Spinner width="50" />
        )}
      </div>
    </>
  )
}

export default User
