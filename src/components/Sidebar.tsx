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
      <nav className="z-50 fixed bottom-0 left-0 w-full h-16 bg-sidebar flex flex-row items-center justify-around px-4 md:flex-col md:justify-start md:w-60 md:h-screen md:top-0 md:bottom-auto md:px-8 md:py-8">
        <div className="font-display hidden md:flex text-5xl space-x-2 mb-8">
          <span className="text-pink">WAVE</span>
          <span className="text-purple">STAT</span>
        </div>
        <ul className="flex flex-row md:flex-col w-full justify-around md:justify-start gap-y-2 md:text-xl text-gray-200">
          <li className="flex gap-x-2 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col md:flex-row items-center text-pink border-b-2 md:border-b-0 md:border-l-2 border-pink bg-pink/10 px-2 py-2 md:px-4 md:py-4 rounded-2xl gap-x-2 gap-y-1"
                  : "flex flex-col md:flex-row items-center px-2 py-2 md:px-4 md:py-4 gap-x-2 gap-y-1"
              }
            >
              <LayoutDashboard size={20} />
              <span className="text-xs md:text-xl">Overview</span>
            </NavLink>
          </li>
          <li className="flex gap-x-2 items-center">
            <NavLink
              to="/artists"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col md:flex-row items-center text-pink border-b-2 md:border-b-0 md:border-l-2 border-pink bg-pink/10 px-2 py-2 md:px-4 md:py-4 rounded-2xl gap-x-2 gap-y-1"
                  : "flex flex-col md:flex-row items-center px-2 py-2 md:px-4 md:py-4 gap-x-2 gap-y-1"
              }
            >
              <Users size={20} />
              <span className="text-xs md:text-xl">Artists</span>
            </NavLink>
          </li>
          <li className="flex gap-x-2 items-center">
            <NavLink
              to="/compare"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col md:flex-row items-center text-pink border-b-2 md:border-b-0 md:border-l-2 border-pink bg-pink/10 px-2 py-2 md:px-4 md:py-4 rounded-2xl gap-x-2 gap-y-1"
                  : "flex flex-col md:flex-row items-center px-2 py-2 md:px-4 md:py-4 gap-x-2 gap-y-1"
              }
            >
              <GitCompare size={20} />
              <span className="text-xs md:text-xl">Compare</span>
            </NavLink>
          </li>
          <li className="flex gap-x-2 items-center">
            <NavLink
              to="/top_tracks"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col md:flex-row items-center text-pink border-b-2 md:border-b-0 md:border-l-2 border-pink bg-pink/10 px-2 py-2 md:px-4 md:py-4 rounded-2xl gap-x-2 gap-y-1"
                  : "flex flex-col md:flex-row items-center px-2 py-2 md:px-4 md:py-4 gap-x-2 gap-y-1"
              }
            >
              <Music size={20} />
              <span className="text-xs md:text-xl">Top Tracks</span>
            </NavLink>
          </li>
          <li className="flex gap-x-2 items-center">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col md:flex-row items-center text-pink border-b-2 md:border-b-0 md:border-l-2 border-pink bg-pink/10 px-2 py-2 md:px-4 md:py-4 rounded-2xl gap-x-2 gap-y-1"
                  : "flex flex-col md:flex-row items-center px-2 py-2 md:px-4 md:py-4 gap-x-2 gap-y-1"
              }
            >
              <Search size={20} />
              <span className="text-xs md:text-xl">Search</span>
            </NavLink>
          </li>
        </ul>

        <div className="mt-auto hidden md:flex">
          <p>
            last.fm API- <span className="text-teal">live data</span>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
