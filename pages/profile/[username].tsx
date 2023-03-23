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

const User: FC = () => {
  // Router
  const router = useRouter()
  const usernameFromQuery = router.query.username

  // Context
  const { selectedUser } = useContext(MainContext)

  // States
  const [userProfile, setUserProfile] = useState({} as ProfileData)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await (
        await fetch(`${API_PROFILE_URL}/${usernameFromQuery}`)
      ).json()
      setUserProfile(fetchedUser)
    }

    fetchData()
  }, [usernameFromQuery])

  return (
    <>
      {userProfile.username ? (
        <div className="w-full h-80 flex flex-col items-center justify-center space-y-12 text-black">
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
              </div>
              <span className="text-sm text-gray-500">
                Twitter: {userProfile.twitter}
              </span>
              <span className="text-sm text-gray-500">
                Mail: {userProfile.email}
              </span>
              <div className="mt-4">
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                  onClick={router.back}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default User
