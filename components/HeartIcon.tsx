// React
import { FC, useContext } from 'react'

// Context
import MainContext from '../utils/contexts/MainContext'

// Props
interface HeartIconProps {
  color: string
}

const HeartIcon: FC<HeartIconProps> = ({ color }) => {
  const { allUsers, setAllUsers, selectedUser } = useContext(MainContext)

  const handleClick = () => {
    const updatedUsers = allUsers.map((user) => {
      if (user.username === selectedUser.username) {
        user.favorite = !user.favorite
      }
      return user
    })
    setAllUsers(updatedUsers)
  }

  return (
    <svg
      className="w-8 h-8 cursor-pointer"
      onClick={handleClick}
      style={{ fill: color }}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
    </svg>
  )
}

export default HeartIcon
