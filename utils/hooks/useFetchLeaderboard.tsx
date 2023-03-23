import { useEffect, useState } from 'react'

export const useFetchLeaderboard = (url: RequestInfo | URL) => {
  const [data, setData] = useState({ leaderboard: [] })
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await (await fetch(url)).json()
        setData(response)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
