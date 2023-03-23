// React
import { FC, useContext } from 'react'

// Next
import { useRouter } from 'next/router'

const GoBackButton: FC = () => {
  // Router
  const router = useRouter()

  return (
    <button
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
      onClick={router.back}
    >
      Go back
    </button>
  )
}

export default GoBackButton
