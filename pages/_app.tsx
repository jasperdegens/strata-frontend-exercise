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

// Types
import { UserDetails } from '../types'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [selectedUser, setSelectedUser] = useState<UserDetails>(
    {} as UserDetails
  )
  const [allUsers, setAllUsers] = useState<UserDetails[]>([])

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
