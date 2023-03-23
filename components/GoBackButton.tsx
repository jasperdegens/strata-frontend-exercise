// React
import { FC, useState, useEffect } from 'react'

// Next
import { useRouter } from 'next/router'

// Components
import Spinner from './Spinner'

const GoBackButton: FC = () => {
  // Router
  const router = useRouter()

  const [showSpinner, setShowSpinner] = useState<boolean>(false)

  const handleClick = () => {
    setShowSpinner(true)
    router.back()
  }

  useEffect(() => {
    return () => {
      setShowSpinner(false)
    }
  }, [])

  return (
    <div className="flex">
      <button
        className="inline-flex items-center px-4 py-2 mr-4 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
        onClick={handleClick}
      >
        Go back
      </button>
      {showSpinner && <Spinner width="20" />}
    </div>
  )
}

export default GoBackButton
