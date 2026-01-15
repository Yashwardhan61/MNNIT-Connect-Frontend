// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, BookOpen, Search, Users, LayoutDashboard, LogOut, LogIn } from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MNNIT Connect
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-600">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/events" className="flex items-center space-x-1 hover:text-blue-600">
              <Calendar size={18} />
              <span>Events</span>
            </Link>
            <Link to="/timetable" className="flex items-center space-x-1 hover:text-blue-600">
              <Calendar size={18} />
              <span>Timetable</span>
            </Link>
            <Link to="/materials" className="flex items-center space-x-1 hover:text-blue-600">
              <BookOpen size={18} />
              <span>Materials</span>
            </Link>
            <Link to="/lost-and-found" className="flex items-center space-x-1 hover:text-blue-600">
              <Search size={18} />
              <span>Lost & Found</span>
            </Link>
            <Link to="/clubs" className="flex items-center space-x-1 hover:text-blue-600">
              <Users size={18} />
              <span>Clubs</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  <LayoutDashboard size={18} />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;