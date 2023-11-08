import LayoutCard from "../components/LayoutCard";

const Home = () => {
  return (
    <div className="flex h-full w-full">
       <LayoutCard variant='ROUNDED_EDGE' size="FREE" color="BLACK_LIGHT" margin={{y:0,x:3}}>
      <div className="text-green-500 h-full w-full">Music Page</div>
      </LayoutCard>
    </div>
  )
}

export default Home;