// React
import { FC } from 'react'

// Packages
import { RotatingLines } from 'react-loader-spinner'

// Interfaces
interface SpinnerProps {
  width: string
}

const Spinner: FC<SpinnerProps> = ({ width }) => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="4"
      animationDuration="1"
      width={width}
      visible={true}
    />
  )
}

export default Spinner
