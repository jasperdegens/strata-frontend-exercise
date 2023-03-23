export const HOST_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export const API_LEADERBOARD_URL = `${HOST_URL}/api/leaderboard`
export const API_PROFILE_URL = `${HOST_URL}/api/profile`

export const LEADERBOARD_URL = `${HOST_URL}/leaderboard`
export const PROFILE_URL = `${HOST_URL}/profile`

export const INTERVAL_VALUE = 20000
