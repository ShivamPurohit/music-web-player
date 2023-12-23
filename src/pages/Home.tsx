import { useEffect, useState } from "react";
import LayoutCard from "../components/LayoutCard";
import TileContainer from "../containers/TileContainer";

const Home = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://saavn.me/search/songs?query=kun+faya+kun&page=1&limit=2"
        );
        if (!response.ok) {
          throw new Error("Network response  was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();
  }, []);

  console.log("state data", data);
  return (
    <div className="flex h-full w-full">
      <LayoutCard
        variant="ROUNDED_EDGE"
        size="FREE"
        color="BLACK_LIGHT"
        margin={{ y: 0, x: 3 }}>
        {data.status === "SUCCESS" ? (
          <div className="text-green-500 h-full w-full p-4">
            Music Page
            <TileContainer data={data?.data?.results} />
          </div>
        ) : (
          <p>Loading your music stay calm....</p>
        )}
      </LayoutCard>
    </div>
  );
};

export default Home;
