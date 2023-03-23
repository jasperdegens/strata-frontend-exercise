// React
import { useState, useEffect } from 'react'

// Next
import type { AppProps } from 'next/app'

// CSS
import '../styles/globals.css'

// Components
import Navbar from '../components/navbar'

// Utils
import MainContext from '../utils/contexts/MainContext'
import { useFetch } from '../utils/hooks/useFetch'
import { API_LEADERBOARD_URL } from '../utils/constants/constants'

// Types
import { UserDetails } from '../types'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // States
  const [selectedUser, setSelectedUser] = useState<UserDetails>(
    {} as UserDetails
  )
  const [allUsers, setAllUsers] = useState<UserDetails[]>([])

  // API handling
  const { data, loading, error } = useFetch(API_LEADERBOARD_URL)

  useEffect(() => {
    if (allUsers.length === 0) {
      const updatedUsers = data.leaderboard.map((user: UserDetails) => {
        return { ...user, favorite: false }
      })
      const sortedUpdatedUsers = updatedUsers.sort(
        (a: { score: number }, b: { score: number }) => b.score - a.score
      )
      setAllUsers(sortedUpdatedUsers)
    }
  }, [allUsers.length, data])

  return (
    <MainContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        allUsers,
        setAllUsers,
      }}
    >
      <div className="bg-white min-h-screen">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </MainContext.Provider>
  )
}

export default MyApp
