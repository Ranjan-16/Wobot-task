import locationIcon from "../assets/Location icon.svg";
import statusIcon from "../assets/rss_feed.svg";

const FilterDropdown = ({
  location,
  setLocation,
  status,
  setStatus,
  uniqueLocations,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Location Dropdown */}
      <div className="relative flex items-center border border-gray-300 rounded-md px-3 py-2 w-48 bg-white">
        <img src={locationIcon} alt="location" />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-700"
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Status Dropdown */}
      <div className="relative flex items-center border border-gray-300 rounded-md px-3 py-2 w-48 bg-white">
        <img src={statusIcon} alt="status" />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-700"
        >
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="inactive">In Active</option>
        </select>
      </div>
    </div>
  );
};

export default FilterDropdown;
