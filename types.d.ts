export interface UserDetails {
  username: string
  profileImage: string
  score: number
  favorite: boolean
}

export type LeaderboardData = {
  leaderboard: UserDetails[]
}

export type ProfileData = {
  username: string
  bio: string
  age: number
  twitter: string
  email: string
  birthday: string
}

export interface MainContextType {
  selectedUser: UserDetails
  allUsers: UserDetails[]
  setSelectedUser: (user: UserDetails) => void
  setAllUsers: (allUsers: UserDetails[]) => void
}
