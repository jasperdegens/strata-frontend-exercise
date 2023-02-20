import { FC } from "react"
import { GetStaticProps } from "next"



const Leaderboard: FC = () => {


  return (<>
    <div className="w-full h-80 flex flex-col items-center justify-center space-y-12">
      <h1 className="text-4xl font-bold">Leaderboard</h1>
      <h1>Leaderboard</h1>
      <p>TODO: complete.</p>
      <p>All leaderboard entries should be links to user profile page.</p>
    </div>
  </>)

}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/leaderboard");
  const data = await response.json();
  const leaderboard = data.leaderboard;
  console.log(leaderboard);

  return {
    props: { leaderboard }
  };
}


export default Leaderboard