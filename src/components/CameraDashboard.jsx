import React from "react";
import usePagination from "../hooks/usePagination";
import CameraTable from "./CameraTable";
import Pagination from "./Pagination";
import useCameraData from "../hooks/useCameraData";
import SearchBox from "./SearchBox";
import FilterDropdown from "./FilterDropdown";
import useSearch from "../hooks/useSearch";
import useFilter from "../hooks/useFilter";

const CameraDashboard = () => {
  const { cameras, handleDelete, updateStatus } = useCameraData();
  const { searchTerm, setSearchTerm, searchedData } = useSearch(cameras);
  const {
    location,
    setLocation,
    status,
    setStatus,
    filteredData,
    uniqueLocations,
  } = useFilter(searchedData);

  const {
    paginatedData,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    total,
    totalPages,
    start,
    end,
  } = usePagination(filteredData, 10);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Cameras</h2>
          <p className="text-sm text-gray-500">Manage your cameras here.</p>
        </div>

        <div className="flex w-full md:w-auto gap-2 items-center justify-end flex-1/2">
          <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <FilterDropdown
          location={location}
          setLocation={setLocation}
          status={status}
          setStatus={setStatus}
          uniqueLocations={uniqueLocations}
        />
      </div>

      <CameraTable
        data={paginatedData}
        onDelete={handleDelete}
        onUpdate={updateStatus}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        total={total}
        totalPages={totalPages}
        start={start}
        end={end}
      />
    </div>
  );
};

export default CameraDashboard;
