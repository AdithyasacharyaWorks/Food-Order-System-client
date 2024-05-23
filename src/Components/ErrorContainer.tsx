import { BiSolidError } from "react-icons/bi";

const ErrorContainer = ({ message }) => {
  return (
    <div className="bg-gray-800 text-red-500 p-2 rounded-xl">
      <div className="flex items-center justify-center gap-2">
        Error:
        <BiSolidError /> {message}
      </div>
    </div>
  );
};

export default ErrorContainer;
