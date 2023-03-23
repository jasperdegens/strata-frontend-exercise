// React
import { createContext } from 'react'

// Types
import { MainContextType, UserDetails } from '../../types'

const MainContext = createContext<MainContextType>({
  selectedUser: {} as UserDetails,
  setSelectedUser: () => {},
  allUsers: [],
  setAllUsers: () => {},
})
export default MainContext
