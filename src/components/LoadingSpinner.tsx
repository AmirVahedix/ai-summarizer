import { loader } from "../assets";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <img src={loader} alt="loader" className="w-20 h-20 object-contain" />;
    </div>
  );
};

export default LoadingSpinner;
