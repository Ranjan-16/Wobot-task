import React from "react";
import HealthIndicator from "./HealthIndicator";
import closeIcon from "../assets/not-interested.svg";
import warning from "../assets/Warning.svg";

const CameraTable = ({ data, onDelete, onUpdate }) => {
  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    console.log(newStatus);
    onUpdate(id, newStatus);
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto bg-white border-separate border-spacing-x-4 border-spacing-y-2">
        <thead className="bg-white text-left text-sm text-gray-600">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Health</th>
            <th className="p-3">Location</th>
            <th className="p-3">Recorder</th>
            <th className="p-3">Tasks</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((camera) => (
            <tr key={camera.id} className="text-sm">
              <td className="p-3 whitespace-nowrap font-medium text-blue-700">
                <div className="flex items-center gap-1">
                  {camera.current_status === "Online" ? (
                    <div className="h-[10px] w-[10px] bg-green-500 rounded-full" />
                  ) : (
                    <div className="h-[10px] w-[10px] bg-red-500 rounded-full" />
                  )}
                  {camera.name}
                  {camera.hasWarning && (
                    <img src={warning} alt="warning" className="w-4 h-4" />
                  )}
                </div>
              </td>
              <td className="p-3">
                <HealthIndicator
                  health={camera.health}
                  hasWarning={camera.hasWarning}
                />
              </td>
              <td className="p-3">{camera.location}</td>
              <td className="p-3">{camera.recorder || "N/A"}</td>
              <td className="p-3">
                {camera.tasks} Task{camera.tasks > 1 ? "s" : ""}
              </td>
              <td className="p-3">
                <button
                  onClick={() => handleToggleStatus(camera.id, camera.status)}
                  className={`px-2 py-1 font-medium ${
                    camera.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {camera.status}
                </button>
              </td>
              <td className="p-3">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDelete(camera.id)}
                >
                  <img src={closeIcon} alt="close-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CameraTable;
