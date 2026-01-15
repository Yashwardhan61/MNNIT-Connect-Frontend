// frontend/src/pages/StudentDashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  BookOpen, 
  AlertCircle, 
  Clock, 
  MapPin, 
  FileText,
  Download,
  Search,
  Bell,
  ChevronRight,
  User,
  GraduationCap
} from 'lucide-react';

// Import dummy data
import { 
  dummyAnnouncements, 
  dummyEvents, 
  dummyTimetable, 
  dummyMaterials,
  dummyLostFound 
} from '../data/dummyData';

const StudentDashboard = ({ user }) => {
  // State management
  const [stats, setStats] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Fetch dashboard data on component mount
  useEffect(() => {
    fetchDashboardData();
    
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Fetch all dashboard data
  const fetchDashboardData = async () => {
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Get user's timetable
      const userTimetable = dummyTimetable?.filter(
        tt => tt?.branch === user?.branch && tt?.semester === user?.semester
      );

      // Get today's timetable
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = days[new Date().getDay()];
      const todayClasses = userTimetable.filter(tt => tt.day === today);

      // Get upcoming events (next 3)
      const upcomingEvents = dummyEvents
        .filter(event => new Date(event.startDate) > new Date())
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        .slice(0, 3);

      // Get recent materials (latest 3)
      const recentMaterials = dummyMaterials
        ?.filter(mat => mat?.branch === user?.branch && mat?.semester === user?.semester)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);

      // Count active lost items
      const activeLostItems = dummyLostFound.filter(
        item => item.status === 'active' && item.moderationStatus === 'approved'
      ).length;

      setStats({
        upcomingEvents,
        todayClasses,
        recentMaterials,
        activeLostItems
      });

      setAnnouncements(dummyAnnouncements);
      setLoading(false);
    }, 500);
  };

  // Get current class
  const getCurrentClass = () => {
    if (!stats?.todayClasses || stats.todayClasses.length === 0) return null;
    
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const classes = stats.todayClasses[0].classes;
    
    for (let cls of classes) {
      const [startTime] = cls.timeSlot.split('-');
      const [startHour, startMinutePart] = startTime.trim().split(':');
      const startMinute = parseInt(startMinutePart);
      const isPM = startTime.includes('PM');
      let startHour24 = parseInt(startHour);
      
      if (isPM && startHour24 !== 12) startHour24 += 12;
      if (!isPM && startHour24 === 12) startHour24 = 0;
      
      const startTimeInMinutes = startHour24 * 60 + startMinute;
      const endTimeInMinutes = startTimeInMinutes + 60;

      if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
        return cls;
      }
    }
    return null;
  };

  // Get next class
  const getNextClass = () => {
    if (!stats?.todayClasses || stats.todayClasses.length === 0) return null;
    
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const classes = stats.todayClasses[0].classes;
    
    for (let cls of classes) {
      const [startTime] = cls.timeSlot.split('-');
      const [startHour, startMinutePart] = startTime.trim().split(':');
      const startMinute = parseInt(startMinutePart);
      const isPM = startTime.includes('PM');
      let startHour24 = parseInt(startHour);
      
      if (isPM && startHour24 !== 12) startHour24 += 12;
      if (!isPM && startHour24 === 12) startHour24 = 0;
      
      const startTimeInMinutes = startHour24 * 60 + startMinute;

      if (currentTimeInMinutes < startTimeInMinutes) {
        return cls;
      }
    }
    return null;
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const currentClass = getCurrentClass();
  const nextClass = getNextClass();

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome back, {user.name}! 👋
            </h1>
            <div className="flex items-center space-x-4 text-gray-600 flex-wrap">
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span>{user.branch} - Semester {user.semester}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
              <p className="text-sm opacity-90">Student ID</p>
              <p className="text-xl font-bold">{user.rollNumber}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current/Next Class Banner */}
      {(currentClass || nextClass) && (
        <div className="mb-8">
          {currentClass ? (
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm opacity-90 mb-1">🎓 Currently in Class</p>
                  <h3 className="text-2xl font-bold mb-2">{currentClass.subject}</h3>
                  <div className="flex items-center space-x-4 text-sm flex-wrap">
                    <span>⏰ {currentClass.timeSlot}</span>
                    <span>📍 {currentClass.room}</span>
                    <span>👤 {currentClass.faculty}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white bg-opacity-20 rounded-full p-4">
                    <Clock className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          ) : nextClass && (
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm opacity-90 mb-1">⏭️ Next Class</p>
                  <h3 className="text-2xl font-bold mb-2">{nextClass.subject}</h3>
                  <div className="flex items-center space-x-4 text-sm flex-wrap">
                    <span>⏰ {nextClass.timeSlot}</span>
                    <span>📍 {nextClass.room}</span>
                    <span>👤 {nextClass.faculty}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white bg-opacity-20 rounded-full p-4">
                    <Bell className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Announcements Section */}
      {announcements.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Bell className="mr-2 text-red-600" />
              Important Announcements
            </h2>
          </div>
          <div className="space-y-3">
            {announcements.slice(0, 3).map(announcement => (
              <div
                key={announcement._id}
                className={`p-4 rounded-lg border-l-4 ${getPriorityColor(announcement.priority)} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1 flex-wrap">
                      <h3 className="font-semibold text-lg">{announcement.title}</h3>
                      {announcement.priority === 'high' && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Urgent</span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{announcement.content}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatDate(announcement.createdAt)}
                    </p>
                  </div>
                  <AlertCircle className={`w-6 h-6 flex-shrink-0 ${
                    announcement.priority === 'high' ? 'text-red-600' :
                    announcement.priority === 'medium' ? 'text-yellow-600' :
                    'text-blue-600'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Link to="/events" className="block transform hover:scale-105 transition-transform">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
            <Calendar className="mb-3" size={32} />
            <h3 className="text-3xl font-bold mb-1">{stats?.upcomingEvents?.length || 0}</h3>
            <p className="text-blue-100">Upcoming Events</p>
            <ChevronRight className="mt-2 ml-auto" size={20} />
          </div>
        </Link>

        <Link to="/timetable" className="block transform hover:scale-105 transition-transform">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
            <Clock className="mb-3" size={32} />
            <h3 className="text-3xl font-bold mb-1">{stats?.todayClasses?.[0]?.classes?.length || 0}</h3>
            <p className="text-green-100">Classes Today</p>
            <ChevronRight className="mt-2 ml-auto" size={20} />
          </div>
        </Link>

        <Link to="/materials" className="block transform hover:scale-105 transition-transform">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
            <BookOpen className="mb-3" size={32} />
            <h3 className="text-3xl font-bold mb-1">{stats?.recentMaterials?.length || 0}</h3>
            <p className="text-purple-100">New Materials</p>
            <ChevronRight className="mt-2 ml-auto" size={20} />
          </div>
        </Link>

        <Link to="/lost-and-found" className="block transform hover:scale-105 transition-transform">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
            <Search className="mb-3" size={32} />
            <h3 className="text-3xl font-bold mb-1">{stats?.activeLostItems || 0}</h3>
            <p className="text-orange-100">Active Lost Items</p>
            <ChevronRight className="mt-2 ml-auto" size={20} />
          </div>
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        
        {/* Today's Classes */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <Clock className="mr-2 text-blue-600" />
                Today's Schedule
              </h2>
              <Link to="/timetable" className="text-blue-600 hover:text-blue-700 flex items-center text-sm">
                View Full
                <ChevronRight size={16} />
              </Link>
            </div>
            
            {stats?.todayClasses && stats.todayClasses.length > 0 ? (
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">
                  {stats.todayClasses[0].day}
                </h3>
                <div className="space-y-3">
                  {stats.todayClasses[0].classes.map((cls, idx) => (
                    <div 
                      key={idx} 
                      className={`border-l-4 ${
                        currentClass?.subject === cls.subject 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-blue-500 bg-blue-50'
                      } pl-4 py-3 rounded-r hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex-1">
                          <div className="font-semibold text-lg">{cls.subject}</div>
                          <div className="text-sm text-gray-600 mt-1 space-y-1">
                            <div className="flex items-center">
                              <Clock size={14} className="mr-2" />
                              <span>{cls.timeSlot}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-2" />
                              <span>{cls.room}</span>
                            </div>
                            <div className="flex items-center">
                              <User size={14} className="mr-2" />
                              <span>{cls.faculty}</span>
                            </div>
                          </div>
                        </div>
                        {currentClass?.subject === cls.subject && (
                          <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                            Now
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                <Calendar className="w-16 h-16 mx-auto mb-3 opacity-50" />
                <p>No classes scheduled for today</p>
                <p className="text-sm mt-2">Enjoy your day! 🎉</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link to="/materials" className="flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="flex items-center">
                  <BookOpen className="text-purple-600 mr-3" size={20} />
                  <span className="font-medium">Study Materials</span>
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </Link>
              
              <Link to="/lost-and-found" className="flex items-center justify-between p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="flex items-center">
                  <Search className="text-orange-600 mr-3" size={20} />
                  <span className="font-medium">Lost & Found</span>
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </Link>
              
              <Link to="/clubs" className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="flex items-center">
                  <User className="text-blue-600 mr-3" size={20} />
                  <span className="font-medium">Clubs</span>
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Your Profile</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="opacity-90">Branch</span>
                <span className="font-semibold">{user.branch}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-90">Semester</span>
                <span className="font-semibold">{user.semester}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-90">Roll No.</span>
                <span className="font-semibold">{user.rollNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center">
            <Calendar className="mr-2 text-purple-600" />
            Upcoming Events & Fests
          </h2>
          <Link to="/events" className="text-blue-600 hover:text-blue-700 flex items-center text-sm">
            View All
            <ChevronRight size={16} />
          </Link>
        </div>
        
        {stats?.upcomingEvents && stats.upcomingEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.upcomingEvents.map(event => (
              <div key={event._id} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm text-blue-600 font-semibold uppercase bg-blue-50 px-3 py-1 rounded">
                    {event.category}
                  </span>
                  <Calendar size={20} className="text-gray-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-purple-600" />
                    <span>{formatDate(event.startDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-purple-600" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-2 text-purple-600" />
                    <span>{event.organizer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
            <Calendar className="w-16 h-16 mx-auto mb-3 opacity-50" />
            <p>No upcoming events</p>
          </div>
        )}
      </div>

      {/* Recent Materials */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center">
            <BookOpen className="mr-2 text-green-600" />
            Recently Added Materials
          </h2>
          <Link to="/materials" className="text-blue-600 hover:text-blue-700 flex items-center text-sm">
            Browse All
            <ChevronRight size={16} />
          </Link>
        </div>
        
        {stats?.recentMaterials && stats.recentMaterials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.recentMaterials.map(material => (
              <div key={material._id} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm text-purple-600 font-semibold uppercase bg-purple-50 px-3 py-1 rounded">
                    {material.type}
                  </span>
                  <FileText size={20} className="text-gray-400" />
                </div>
                <h3 className="font-bold mb-1">{material.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{material.subject}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{formatDate(material.createdAt)}</span>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                    <Download size={14} className="mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
            <BookOpen className="w-16 h-16 mx-auto mb-3 opacity-50" />
            <p>No recent materials</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;