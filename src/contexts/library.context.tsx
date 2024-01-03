import { ReactNode, createContext, useState } from "react";

const baseValue = {
  library: [],
  addToLib: () => {},
  removeFromLib: () => {},
  getSize: () => {},
};

export const LibraryContext = createContext<any>(baseValue);

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [library, setLibrary] = useState<any[]>([]);
  const addToLib = (item: any) => {
    setLibrary((prev: any) => [...prev, item]);
  };

  const removeFromLib = (id: any) => {
    setLibrary((prevState: any) =>
      prevState?.filter((item: any) => item.id !== id)
    );
  };

  const getSize = () => {
    return library.length;
  };

  return (
    <LibraryContext.Provider
      value={{ library, addToLib, removeFromLib, getSize }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
