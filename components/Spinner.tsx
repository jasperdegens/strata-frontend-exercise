import { RotatingLines } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="4"
      animationDuration="1"
      width="20"
      visible={true}
    />
  )
}

export default Spinner
