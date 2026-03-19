import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GitCompare,
  Music,
  Search,
} from "lucide-react";
const Sidebar = () => {
  return (
    <>
      <nav className="w-60 h-screen fixed left-0 top-0 bg-sidebar flex flex-col p-8 ">
        <div className="font-display  text-5xl space-x-4 mb-8">
          <span className="text-pink">WAVE</span>
          <span className="text-purple">STAT</span>
        </div>
        <ul className="flex flex-col gap-y-5 text-xl text-gray-200 group">
          <li className="flex gap-x-2 items-center group-hover:text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " block w-full flex items-center text-pink border-l-2 border-pink bg-pink/10 px-4 py-4 rounded-2xl gap-x-2"
                  : " block w-full flex items-center flex items-center px-4 py-4  gap-x-2"
              }
            >
              <LayoutDashboard size={20} />
              Overview
            </NavLink>
          </li>
          <li className="flex gap-x-2 items-center group-hover:text-white">
            <NavLink
              to="/artists"
              className={({ isActive }) =>
                isActive
                  ? " block w-full flex items-center text-pink border-l-2 border-pink bg-pink/10 px-4 py-4 rounded-2xl gap-x-2"
                  : " block w-full flex items-center flex items-center   px-4 py-4  gap-x-2"
              }
            >
              {" "}
              <Users size={20} />
              Artists
            </NavLink>
          </li>
          <li className="flex gap-x-2 items-center group-hover:text-white">
            <NavLink
              to="/compare"
              className={({ isActive }) =>
                isActive
                  ? " block w-full flex items-center text-pink border-l-2 border-pink bg-pink/10 px-4 py-4 rounded-2xl gap-x-2"
                  : " block w-full flex items-center flex items-center   px-4 py-4  gap-x-2"
              }
            >
              {" "}
              <GitCompare size={20} />
              Compare
            </NavLink>
          </li>
          <li className="flex gap-x-2 items-center group-hover:text-white">
            <NavLink
              to="/top_tracks"
              className={({ isActive }) =>
                isActive
                  ? " block w-full flex items-center text-pink border-l-2 border-pink bg-pink/10 px-4 py-4 rounded-2xl gap-x-2"
                  : " block w-full flex items-center flex items-center   px-4 py-4  gap-x-2"
              }
            >
              <Music size={20} />
              Top Tracks
            </NavLink>
          </li>
          <li className="flex gap-x-2 items-center group-hover:text-white">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? " block w-full flex items-center text-pink border-l-2 border-pink bg-pink/10 px-4 py-4 rounded-2xl gap-x-2"
                  : " block w-full flex items-center flex items-center   px-4 py-4  gap-x-2"
              }
            >
              <Search size={20} />
              Search
            </NavLink>
          </li>
        </ul>
        <div className="mt-auto">
          <p>
            last.fm API- <span className="text-teal">live data</span>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
