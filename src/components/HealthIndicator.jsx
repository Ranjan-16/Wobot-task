import cloud from '../assets/Cloud.svg'
import device from '../assets/Edge.svg'

const HealthIndicator = ({ health }) => {
   const getBorderColor = (value) => {
    if (value === "A") return "border-green-500";
    if (value === "NA") return "border-gray-400";
    return "border-orange-500";
  };

  const Ring = ({ value, icon }) => (
    <div className="flex items-center gap-1">
      {icon}
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[12px] font-semibold ${getBorderColor(
          value
        )}`}
      >
        {value}
      </div>
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      <Ring value={health.cloud} icon={<img src={cloud} className="text-gray-500" />} />
      <Ring value={health.device} icon={<img src={device} className="text-gray-500" />} />
    </div>
  );
};

export default HealthIndicator;
