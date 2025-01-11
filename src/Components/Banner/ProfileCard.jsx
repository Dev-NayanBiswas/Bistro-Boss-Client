import { FaUserTie } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-4xl h-auto bg-blue-500 flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-6">
          {/* Dummy Image */}
          <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
            <FaUserTie className="text-gray-500 text-7xl" />
          </div>
          <h1 className="text-white text-3xl font-bold mt-6">DENNIS HARTRAMPF</h1>
          <p className="text-white text-lg mt-2">Team Lead Software Development</p>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex-1 bg-blue-400 relative">
          <div className="absolute bottom-0 w-full h-1/3 bg-white rounded-t-full" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
