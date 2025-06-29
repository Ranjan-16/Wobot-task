import { useState, useMemo } from "react";

const useSearch = (data) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchedData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  return { searchTerm, setSearchTerm, searchedData };
};

export default useSearch;
