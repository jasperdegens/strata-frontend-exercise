// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs'
import path from 'path'

export interface UserDetails{
  username: string,
  profileImage: string,
}

type LeaderboardData = {
  leaderboardImages: UserDetails[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeaderboardData>
) {

  // read all files from public leaderboard folder
  const imgPaths = fs.readdirSync(path.join(process.cwd(), 'public', 'users'))

  // randomize images
  imgPaths.sort(() => Math.random() - 0.5)

  
  const leaderboardImages = imgPaths.map((imgPath) => {
    return {
      // trim extensions from filenames
      username: imgPath.replace(/\.[^/.]+$/, ""),
      profileImage: `/users/${imgPath}`
    }
  })

  res.status(200).json({ leaderboardImages })
}
