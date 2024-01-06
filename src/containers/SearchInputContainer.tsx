import { useEffect, useState } from "react";
import { EN_CONSTANTS } from "../constants/common.constants";
import useDebounce from "../hooks/useDebounce.hook";

interface SearchInputContainerInterface {
  onSearch: (item: string) => void;
}

const SearchInputContainer = ({
  onSearch = () => {},
}: SearchInputContainerInterface) => {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 500);

  const handleInputChange = (e: any) => {
    setQuery(e?.target?.value);
  };

  useEffect(() => {
    fetchResults(debouncedQuery);
  }, [debouncedQuery]);

  const fetchResults = (debouncedQuery: string) => {
    onSearch(debouncedQuery);
  };
  return (
    <div className="flex text-green-500 h-full w-full justify-center items-center">
      <input
        type="search"
        placeholder={EN_CONSTANTS.SEARCH_PLACEHOLDER}
        value={query}
        onChange={handleInputChange}
        className="w-full p-4 px-10 rounded-xl ml-10 bg-gray-200 bg-opacity-25 font-medium text-white"
      />
      <button
        onClick={() => onSearch(query)}
        className="mx-10 bg-gray-200 bg-opacity-25 rounded-2xl w-28 h-10 text-white">
        {EN_CONSTANTS.SEARCH}
      </button>
    </div>
  );
};

export default SearchInputContainer;
