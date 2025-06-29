import { useState, useMemo } from "react";

const useFilter = (data) => {
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const uniqueLocations = [...new Set(data.map((camera) => camera.location))];


  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const statusMatch = status ? item.status.toLowerCase() === status.toLowerCase() : true;
      const locationMatch = location ? item.location.toLowerCase().includes(location.toLowerCase()) : true;
      return statusMatch && locationMatch;
    });
  }, [status, location, data]);

  return { status, setStatus, location, setLocation, filteredData, uniqueLocations };
};

export default useFilter;
