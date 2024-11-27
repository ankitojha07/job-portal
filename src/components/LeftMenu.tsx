// LeftMenu.tsx
import { PiBagSimple } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div className="h-screen w-64 text-white flex flex-col p-6">
      {/* Logo Section */}
      <div className="text-lg font-bold mb-8">Logo Here</div>
      <div className="flex-grow space-y-6">
        {/* Navigation Links */}
        <Link
          to="/"
          className="flex items-center space-x-2 hover:text-gray-300 border p-2 rounded-md border-purple-800"
        >
          <PiBagSimple className="text-xl" />
          <span>Jobs</span>
        </Link>
        <Link
          to="/applications"
          className="flex items-center space-x-2 hover:text-gray-300  border p-2 rounded-md border-purple-800"
        >
          <PiBagSimple className="text-xl" />
          <span>Applications</span>
        </Link>
        <Link
          to="/resume"
          className="flex items-center space-x-2 hover:text-gray-30  border p-2 rounded-md border-purple-800"
        >
          <PiBagSimple className="text-xl" />
          <span>Resume</span>
        </Link>
        <Link
          to="/edit-profile"
          className="flex items-center space-x-2 hover:text-gray-300  border p-2 rounded-md border-purple-800"
        >
          <PiBagSimple className="text-xl" />
          <span>Edit Profile</span>
        </Link>
      </div>
      {/* Logout */}
      <div className="mt-auto">
        <Link
          to="/logout"
          className="flex items-center space-x-2 hover:text-red-300"
        >
          <FiLogOut className="text-xl" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default LeftMenu;
