import { useState, useMemo } from "react";

const usePagination = (data, initialPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialPerPage);

  const total = data.length;
  const totalPages = Math.ceil(total / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  return {
    paginatedData,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    total,
    totalPages,
    start: (currentPage - 1) * itemsPerPage + 1,
    end: Math.min(currentPage * itemsPerPage, total),
  };
};

export default usePagination;
