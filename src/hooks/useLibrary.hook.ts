import { useContext } from "react";
import { LibraryContext } from "../contexts/library.context";

export const useLibrary = () => {
  const libraryContext = useContext(LibraryContext);
  if (!libraryContext) {
    throw new Error("useLibrary must be used within a library provider");
  }
  return libraryContext;
};
