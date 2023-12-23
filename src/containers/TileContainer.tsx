import IconComponent from "../components/IconComponent";

interface TileContainerProps {
  data: any;
  displayConifg?: any;
  containerConfig?: any;
}

const TileContainer = ({
  data,
  displayConifg,
  containerConfig,
}: TileContainerProps) => {
  console.log("tileContainer", data);
  return (
    <div className="mt-4 grid grid-cols-2 grid-rows-2 sm:grid-cols-1 gap-x-6 gap-y-6 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3">
      {data?.map((item: any) => {
        return (
          <div
            id={`${item.id}`}
            className="w-full h-20 bg-gray-500 rounded-md flex">
            <img src={`${item.image[1].link}`} className="rounded-md" />
            <div className="flex items-center ml-4 w-full">
              <p className="flex text-base text-white line-clamp-1 w-full">
                {item.name}
              </p>
              <div className="flex items-center w-full justify-end mr-4">
                <IconComponent
                  icon="PLAY"
                  iconStyleConfig={{ base: "flex text-green-500 h-8 w-8" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TileContainer;
