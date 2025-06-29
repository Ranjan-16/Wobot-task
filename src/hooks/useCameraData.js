import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const useCameraData = () => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    fetchCameras();
  }, []);

  const fetchCameras = async () => {
    try {
      const { data } = await api.get("fetch/cameras");
      console.log(data, "=======")
      setCameras(data.data);
    } catch (error) {
      console.error("Error fetching cameras:", error);
    }
  };

  const handleDelete = (id) => {
    setCameras((prev) => prev.filter((cam) => cam.id !== id));
  };

  const updateStatus = async (id, status) => {
    console.log(id, status)
    try {
      await api.put("update/camera/status", { id, status })
      setCameras((prev) =>
        prev.map((cam) =>
          cam.id === id ? { ...cam, status } : cam
        )
      );

    } catch (error) {
      console.error("Status update failed:", error);
    }
  }

  return { cameras, handleDelete, updateStatus };
};

export default useCameraData;
