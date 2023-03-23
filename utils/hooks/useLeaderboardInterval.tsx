// React
import { useEffect, useContext } from 'react'

// Contexts
import MainContext from '../../utils/contexts/MainContext'

// Types
import { UserDetails } from '../../types'

export const useLeaderboardInterval = (url: string, intervalTime: number) => {
  const { allUsers, setAllUsers } = useContext(MainContext)

  useEffect(() => {
    const myInterval = setInterval(async () => {
      const data = await (await fetch(url)).json()
      const usersWithLikes = allUsers
        .filter((user) => user.favorite)
        .map((user) => user.username)

      const updatedUsers = data.leaderboard.map((user: UserDetails) => {
        return { ...user, favorite: usersWithLikes.includes(user.username) }
      })
      const sortedUpdatedUsers = updatedUsers.sort(
        (a: { score: number }, b: { score: number }) => b.score - a.score
      )
      setAllUsers(sortedUpdatedUsers)
    }, intervalTime)

    return () => {
      clearInterval(myInterval)
    }
  }, [allUsers, allUsers.length, intervalTime, setAllUsers, url])
}
