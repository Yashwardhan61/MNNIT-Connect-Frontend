 
export const dummyUsers = {
  student: {
    id: "student123",
    name: "Rahul Kumar",
    email: "rahul@mnnit.ac.in",
    rollNumber: "20214001",
    branch: "CSE",
    semester: 5,
    role: "student"
  },
  clubAdmin: {
    id: "clubadmin123",
    name: "Priya Singh",
    email: "priya@mnnit.ac.in",
    rollNumber: "20213045",
    branch: "ECE",
    semester: 6,
    role: "club_admin",
    assignedClub: "club_cybros"
  },
  superAdmin: {
    id: "superadmin123",
    name: "Dr. Sharma",
    email: "admin@mnnit.ac.in",
    rollNumber: "ADMIN001",
    branch: "Administration",
    semester: 0,
    role: "super_admin"
  }
};

// ============================================
// ANNOUNCEMENTS
// ============================================

export const dummyAnnouncements = [
  {
    _id: "ann1",
    title: "Mid-Semester Exams Schedule Released",
    content: "The mid-semester examination schedule has been uploaded to the academic portal. Exams will be conducted from February 10-15, 2026. Please check your branch-specific timetable for detailed timings and venues. Best of luck for your preparations!",
    priority: "high",
    targetAudience: "all",
    createdAt: "2026-01-10T08:00:00.000Z",
    expiryDate: "2026-02-20T00:00:00.000Z"
  },
  {
    _id: "ann2",
    title: "Avishkar 2026 Registration Now Open!",
    content: "Get ready for the biggest technical fest of the year! Avishkar 2026 registration is now open. Register by January 20th to participate in various technical competitions, workshops, and cultural events. Prizes worth ₹5 lakhs to be won!",
    priority: "medium",
    targetAudience: "all",
    createdAt: "2026-01-08T10:00:00.000Z",
    expiryDate: "2026-03-20T00:00:00.000Z"
  },
  {
    _id: "ann3",
    title: "Library Timing Extended for Exam Preparation",
    content: "To facilitate better exam preparation, the central library will now remain open till 11:00 PM on all weekdays. Special reading rooms have been allocated for final year students. Weekend timings remain 9 AM to 6 PM.",
    priority: "low",
    targetAudience: "all",
    createdAt: "2026-01-07T15:30:00.000Z",
    expiryDate: "2026-02-28T00:00:00.000Z"
  },
  {
    _id: "ann4",
    title: "Placement Drive - Tech Giants on Campus",
    content: "Major tech companies including Google, Microsoft, and Amazon will be visiting campus for placements in February. Eligible students from CSE, IT, and ECE branches should register through the placement portal by January 25th.",
    priority: "high",
    targetAudience: "branch",
    branch: "CSE",
    createdAt: "2026-01-06T12:00:00.000Z",
    expiryDate: "2026-02-05T00:00:00.000Z"
  }
];

// ============================================
// EVENTS
// ============================================

export const dummyEvents = [
  {
    _id: "evt1",
    title: "Avishkar 2026 - Annual Technical Fest",
    description: "MNNIT's biggest technical extravaganza featuring hackathons, robotics competitions, technical workshops, guest lectures, and cultural events. Join us for three days of innovation and excitement!",
    category: "fest",
    venue: "Main Campus",
    startDate: "2026-03-15T09:00:00.000Z",
    endDate: "2026-03-17T18:00:00.000Z",
    organizer: "Technical Council",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    registrationLink: "https://avishkar.mnnit.ac.in/register",
    status: "approved",
    isClubEvent: false
  },
  {
    _id: "evt2",
    title: "HackNIIT 2.0 - 36 Hour Hackathon",
    description: "A 36-hour coding marathon where teams build innovative solutions to real-world problems. Mentorship from industry experts, amazing prizes, and a chance to showcase your skills!",
    category: "technical",
    venue: "Computer Center",
    startDate: "2026-02-01T18:00:00.000Z",
    endDate: "2026-02-03T06:00:00.000Z",
    organizer: "Cybros - Coding Club",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    registrationLink: "https://cybros.in/hacknit",
    status: "approved",
    isClubEvent: true,
    club: "club_cybros"
  },
  {
    _id: "evt3",
    title: "AI/ML Workshop by Google Developers",
    description: "Hands-on workshop on Artificial Intelligence and Machine Learning. Learn about neural networks, deep learning, and build your own ML models. Certificates provided!",
    category: "workshop",
    venue: "Seminar Hall - CC1",
    startDate: "2026-01-25T10:00:00.000Z",
    endDate: "2026-01-25T16:00:00.000Z",
    organizer: "ACM Student Chapter",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    registrationLink: "https://acm.mnnit.ac.in/aiml",
    status: "approved",
    isClubEvent: true
  },
  {
    _id: "evt4",
    title: "Culrav 2026 - Cultural Fest",
    description: "Experience the magic of arts and culture at Culrav 2026. Dance competitions, music concerts, drama performances, fashion shows, and much more!",
    category: "cultural",
    venue: "Open Air Theatre",
    startDate: "2026-02-20T17:00:00.000Z",
    endDate: "2026-02-22T22:00:00.000Z",
    organizer: "Cultural Council",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
    registrationLink: "https://culrav.mnnit.ac.in",
    status: "approved",
    isClubEvent: false
  },
  {
    _id: "evt5",
    title: "Robotics Competition - RoboWars",
    description: "Build your battle bot and compete in the ultimate robotics showdown. Categories include lightweight, middleweight, and heavyweight bots. Cash prizes worth ₹50,000!",
    category: "technical",
    venue: "Mechanical Workshop",
    startDate: "2026-02-15T10:00:00.000Z",
    endDate: "2026-02-15T17:00:00.000Z",
    organizer: "Robotics Club",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    registrationLink: null,
    status: "approved",
    isClubEvent: true
  },
  {
    _id: "evt6",
    title: "Guest Lecture: Future of Quantum Computing",
    description: "Renowned physicist Dr. Amit Patel from IIT Delhi will discuss the future of quantum computing and its applications in cryptography and AI.",
    category: "seminar",
    venue: "Auditorium",
    startDate: "2026-01-30T15:00:00.000Z",
    endDate: "2026-01-30T17:00:00.000Z",
    organizer: "Physics Department",
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800",
    registrationLink: null,
    status: "approved",
    isClubEvent: false
  }
];

// ============================================
// TIMETABLE
// ============================================

export const dummyTimetable = [
  {
    _id: "tt1",
    branch: "CSE",
    semester: 5,
    day: "Monday",
    classes: [
      {
        subject: "Data Structures & Algorithms",
        timeSlot: "9:00-10:00 AM",
        room: "LT-3",
        faculty: "Dr. Rajesh Sharma"
      },
      {
        subject: "Database Management Systems",
        timeSlot: "10:00-11:00 AM",
        room: "CC-1",
        faculty: "Prof. Anjali Kumar"
      },
      {
        subject: "Operating Systems",
        timeSlot: "2:00-3:00 PM",
        room: "LT-1",
        faculty: "Dr. Vikram Verma"
      },
      {
        subject: "Computer Networks",
        timeSlot: "3:00-4:00 PM",
        room: "CC-2",
        faculty: "Prof. Neha Singh"
      }
    ]
  },
  {
    _id: "tt2",
    branch: "CSE",
    semester: 5,
    day: "Tuesday",
    classes: [
      {
        subject: "Software Engineering",
        timeSlot: "9:00-10:00 AM",
        room: "LT-2",
        faculty: "Dr. Priya Gupta"
      },
      {
        subject: "DSA Lab",
        timeSlot: "10:00-12:00 PM",
        room: "Lab-301",
        faculty: "Dr. Rajesh Sharma"
      },
      {
        subject: "Theory of Computation",
        timeSlot: "2:00-3:00 PM",
        room: "LT-4",
        faculty: "Prof. Amit Jain"
      }
    ]
  },
  {
    _id: "tt3",
    branch: "CSE",
    semester: 5,
    day: "Wednesday",
    classes: [
      {
        subject: "Database Management Systems",
        timeSlot: "9:00-10:00 AM",
        room: "CC-1",
        faculty: "Prof. Anjali Kumar"
      },
      {
        subject: "Operating Systems",
        timeSlot: "10:00-11:00 AM",
        room: "LT-1",
        faculty: "Dr. Vikram Verma"
      },
      {
        subject: "DBMS Lab",
        timeSlot: "2:00-4:00 PM",
        room: "Lab-302",
        faculty: "Prof. Anjali Kumar"
      }
    ]
  },
  {
    _id: "tt4",
    branch: "CSE",
    semester: 5,
    day: "Thursday",
    classes: [
      {
        subject: "Data Structures & Algorithms",
        timeSlot: "9:00-10:00 AM",
        room: "LT-3",
        faculty: "Dr. Rajesh Sharma"
      },
      {
        subject: "Computer Networks",
        timeSlot: "10:00-11:00 AM",
        room: "CC-2",
        faculty: "Prof. Neha Singh"
      },
      {
        subject: "Software Engineering",
        timeSlot: "2:00-3:00 PM",
        room: "LT-2",
        faculty: "Dr. Priya Gupta"
      }
    ]
  },
  {
    _id: "tt5",
    branch: "CSE",
    semester: 5,
    day: "Friday",
    classes: [
      {
        subject: "Theory of Computation",
        timeSlot: "9:00-10:00 AM",
        room: "LT-4",
        faculty: "Prof. Amit Jain"
      },
      {
        subject: "OS Lab",
        timeSlot: "10:00-12:00 PM",
        room: "Lab-303",
        faculty: "Dr. Vikram Verma"
      },
      {
        subject: "Computer Networks",
        timeSlot: "2:00-3:00 PM",
        room: "CC-2",
        faculty: "Prof. Neha Singh"
      }
    ]
  }
];

// ============================================
// STUDY MATERIALS
// ============================================

export const dummyMaterials = [
  {
    _id: "mat1",
    title: "DSA Complete Notes - Trees & Graphs",
    subject: "Data Structures & Algorithms",
    branch: "CSE",
    semester: 5,
    type: "notes",
    fileUrl: "https://example.com/dsa-notes-chapter5.pdf",
    description: "Comprehensive notes covering Binary Trees, BST, AVL Trees, Graph Traversal algorithms with examples",
    status: "approved",
    uploadedBy: { name: "Arjun Mehta", _id: "user1" },
    createdAt: "2026-01-14T10:30:00.000Z"
  },
  {
    _id: "mat2",
    title: "DBMS Previous Year Questions (2020-2025)",
    subject: "Database Management Systems",
    branch: "CSE",
    semester: 5,
    type: "pyq",
    fileUrl: "https://example.com/dbms-pyq.pdf",
    description: "Collection of previous year questions with solutions for DBMS exam preparation",
    status: "approved",
    uploadedBy: { name: "Sneha Reddy", _id: "user2" },
    createdAt: "2026-01-13T14:20:00.000Z"
  },
  {
    _id: "mat3",
    title: "Operating Systems Lecture Slides - Week 3",
    subject: "Operating Systems",
    branch: "CSE",
    semester: 5,
    type: "ppt",
    fileUrl: "https://example.com/os-slides-week3.pptx",
    description: "Process Scheduling, CPU Scheduling Algorithms, Deadlock concepts",
    status: "approved",
    uploadedBy: { name: "Dr. Vikram Verma", _id: "faculty1" },
    createdAt: "2026-01-12T09:15:00.000Z"
  },
  {
    _id: "mat4",
    title: "Computer Networks - Socket Programming Tutorial",
    subject: "Computer Networks",
    branch: "CSE",
    semester: 5,
    type: "resource",
    fileUrl: "https://example.com/socket-programming.pdf",
    description: "Step-by-step guide for socket programming in C with client-server examples",
    status: "approved",
    uploadedBy: { name: "Karan Patel", _id: "user3" },
    createdAt: "2026-01-11T16:45:00.000Z"
  },
  {
    _id: "mat5",
    title: "Software Engineering - UML Diagrams Guide",
    subject: "Software Engineering",
    branch: "CSE",
    semester: 5,
    type: "notes",
    fileUrl: "https://example.com/uml-guide.pdf",
    description: "Complete guide to UML diagrams - Use Case, Class, Sequence, Activity diagrams",
    status: "approved",
    uploadedBy: { name: "Priya Shah", _id: "user4" },
    createdAt: "2026-01-10T11:00:00.000Z"
  }
];

// ============================================
// LOST & FOUND
// ============================================

export const dummyLostFound = [
  {
    _id: "lf1",
    title: "Lost Black Leather Wallet",
    description: "Black leather wallet containing ID cards and some cash. Lost near the library on January 12th. Has my name 'Rahul Kumar' on the ID card.",
    category: "lost",
    itemType: "Wallet",
    location: "Central Library - Ground Floor",
    date: "2026-01-12T00:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    contactInfo: "+91 98765 43210",
    status: "active",
    moderationStatus: "approved",
    postedBy: { name: "Rahul Kumar", rollNumber: "20214001", _id: "student123" },
    createdAt: "2026-01-12T15:30:00.000Z"
  },
  {
    _id: "lf2",
    title: "Found Student ID Card",
    description: "Found a student ID card near the canteen. Name: Priya Singh, Roll No: 20213045, Branch: ECE. Please contact to claim.",
    category: "found",
    itemType: "ID Card",
    location: "New Canteen Area",
    date: "2026-01-13T00:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1589395937763-7cf3067a9989?w=400",
    contactInfo: "+91 87654 32109",
    status: "active",
    moderationStatus: "approved",
    postedBy: { name: "Amit Sharma", rollNumber: "20214025", _id: "user5" },
    createdAt: "2026-01-13T10:15:00.000Z"
  },
  {
    _id: "lf3",
    title: "Lost Blue Water Bottle",
    description: "Lost my blue Milton water bottle near the sports complex. Has stickers on it. Sentimental value!",
    category: "lost",
    itemType: "Water Bottle",
    location: "Sports Complex",
    date: "2026-01-11T00:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    contactInfo: "+91 76543 21098",
    status: "active",
    moderationStatus: "approved",
    postedBy: { name: "Sneha Reddy", rollNumber: "20214089", _id: "user6" },
    createdAt: "2026-01-11T17:20:00.000Z"
  },
  {
    _id: "lf4",
    title: "Found Calculator - Casio Scientific",
    description: "Found a Casio scientific calculator in Lecture Hall 2. Has name 'Karan' written on back side.",
    category: "found",
    itemType: "Calculator",
    location: "Lecture Hall 2",
    date: "2026-01-14T00:00:00.000Z",
    imageUrl: null,
    contactInfo: "+91 65432 10987",
    status: "active",
    moderationStatus: "approved",
    postedBy: { name: "Neha Gupta", rollNumber: "20214056", _id: "user7" },
    createdAt: "2026-01-14T09:00:00.000Z"
  },
  {
    _id: "lf5",
    title: "Lost Headphones - Sony WH-1000XM4",
    description: "Lost my black Sony WH-1000XM4 headphones in the Computer Center. Please contact if found!",
    category: "lost",
    itemType: "Headphones",
    location: "Computer Center - Lab 301",
    date: "2026-01-13T00:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400",
    contactInfo: "+91 54321 09876",
    status: "active",
    moderationStatus: "approved",
    postedBy: { name: "Vikram Joshi", rollNumber: "20214102", _id: "user8" },
    createdAt: "2026-01-13T18:45:00.000Z"
  }
];

// ============================================
// CLUBS
// ============================================

export const dummyClubs = [
  {
    _id: "club_cybros",
    name: "Cybros - Coding & Development Club",
    category: "technical",
    description: "MNNIT's premier coding club dedicated to fostering a culture of competitive programming, web development, and open-source contribution. We organize hackathons, coding contests, workshops, and tech talks throughout the year.",
    achievements: [
      "Winners at Smart India Hackathon 2025",
      "Organized 15+ technical workshops in 2025",
      "50+ members placed in top tech companies",
      "Active contributors to 20+ open source projects"
    ],
    upcomingEvents: [
      "HackNIIT 2.0 - 36 Hour Hackathon (Feb 1-3)",
      "Web Development Bootcamp (Feb 10-12)",
      "Competitive Programming Contest (Feb 20)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    contactEmail: "cybros@mnnit.ac.in",
    socialLinks: {
      website: "https://cybros.in",
      instagram: "https://instagram.com/cybros_mnnit",
      linkedin: "https://linkedin.com/company/cybros",
      github: "https://github.com/cybros-mnnit"
    },
    stats: {
      totalEvents: 25,
      totalMembers: 150
    }
  },
  {
    _id: "club_robotics",
    name: "Robotics Club",
    category: "technical",
    description: "Exploring the world of robotics, automation, and mechatronics. We design, build, and compete with robots in national and international competitions.",
    achievements: [
      "1st Prize at Techfest IIT Bombay 2025",
      "Built autonomous drone for precision agriculture",
      "10+ workshops on Arduino and Raspberry Pi",
      "Participants in ABU Robocon 2025"
    ],
    upcomingEvents: [
      "RoboWars Competition (Feb 15)",
      "Drone Building Workshop (Feb 22)",
      "Line Follower Bot Contest (Mar 5)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    contactEmail: "robotics@mnnit.ac.in",
    socialLinks: {
      website: "https://robotics.mnnit.ac.in",
      instagram: "https://instagram.com/robotics_mnnit",
      youtube: "https://youtube.com/@roboticsmnnit"
    },
    stats: {
      totalEvents: 18,
      totalMembers: 85
    }
  },
  {
    _id: "club_aaveg",
    name: "Aaveg - Dance Society",
    category: "cultural",
    description: "MNNIT's vibrant dance society promoting various dance forms including contemporary, hip-hop, classical, and Bollywood. We perform at college fests and national competitions.",
    achievements: [
      "1st Prize at Inter-NIT Cultural Fest 2025",
      "Successfully organized 5 major dance workshops",
      "500+ participants in annual dance competition",
      "Featured in regional dance championships"
    ],
    upcomingEvents: [
      "Dance Workshop by Shiamak Davar (Jan 28)",
      "Annual Dance Competition (Mar 5)",
      "Flash Mob for Avishkar 2026 (Mar 15)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800",
    contactEmail: "aaveg@mnnit.ac.in",
    socialLinks: {
      instagram: "https://instagram.com/aaveg_mnnit",
      youtube: "https://youtube.com/@aavegmnnit",
      facebook: "https://facebook.com/aavegmnnit"
    },
    stats: {
      totalEvents: 20,
      totalMembers: 120
    }
  },
  {
    _id: "club_litclub",
    name: "Literary Club - Abhivyakti",
    category: "cultural",
    description: "A community of readers, writers, and poetry enthusiasts. We organize poetry slams, book discussions, creative writing workshops, and publish the college magazine.",
    achievements: [
      "Published 3 editions of college magazine 'Confluence'",
      "Organized 12 poetry nights and open mics",
      "Members published in national literary magazines",
      "Hosted renowned authors for talks"
    ],
    upcomingEvents: [
      "Poetry Slam Night (Jan 30)",
      "Book Reading Marathon (Feb 5)",
      "Creative Writing Workshop (Feb 18)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
    contactEmail: "litclub@mnnit.ac.in",
    socialLinks: {
      instagram: "https://instagram.com/abhivyakti_mnnit",
      medium: "https://medium.com/@abhivyaktimnnit"
    },
    stats: {
      totalEvents: 15,
      totalMembers: 90
    }
  },
  {
    _id: "club_sports",
    name: "Sports Committee",
    category: "sports",
    description: "Promoting fitness and sportsmanship across campus. We organize inter-branch tournaments, coach students, and represent MNNIT in inter-college competitions.",
    achievements: [
      "Gold in Basketball - Inter-NIT Sports Meet 2025",
      "Silver in Cricket Championship",
      "Bronze in Athletics Meet",
      "Organized successful sports fest with 1000+ participants"
    ],
    upcomingEvents: [
      "Inter-Branch Cricket Tournament (Feb 1-10)",
      "Marathon Run for Charity (Feb 14)",
      "Basketball Championship (Feb 20-25)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
    contactEmail: "sports@mnnit.ac.in",
    socialLinks: {
      instagram: "https://instagram.com/sports_mnnit",
      twitter: "https://twitter.com/sportsmnnit"
    },
    stats: {
      totalEvents: 30,
      totalMembers: 200
    }
  }
];

// ============================================
// CALENDAR EVENTS
// ============================================

export const dummyCalendar = [
  {
    _id: "cal1",
    title: "Republic Day",
    description: "National Holiday",
    date: "2026-01-26T00:00:00.000Z",
    type: "holiday",
    isRecurring: false
  },
  {
    _id: "cal2",
    title: "Mid-Semester Exams Begin",
    description: "Mid-semester examinations for all branches",
    date: "2026-02-10T00:00:00.000Z",
    type: "exam",
    isRecurring: false
  },
  {
    _id: "cal3",
    title: "Project Submission Deadline - SE",
    description: "Software Engineering project final submission",
    date: "2026-02-08T23:59:59.000Z",
    type: "deadline",
    isRecurring: false
  },
  {
    _id: "cal4",
    title: "Avishkar 2026",
    description: "Annual Technical Fest",
    date: "2026-03-15T00:00:00.000Z",
    type: "event",
    isRecurring: false
  }
];

// ============================================
// ADMIN STATS
// ============================================

export const dummyAdminStats = {
  totalUsers: 2450,
  totalStudents: 2400,
  totalClubAdmins: 25,
  totalSuperAdmins: 5,
  totalEvents: 45,
  pendingEvents: 3,
  totalMaterials: 350,
  pendingMaterials: 5,
  totalClubs: 18,
  activeLostFound: 15,
  pendingLostFound: 2
};

// ============================================
// EXPORT ALL
// ============================================

export default {
  users: dummyUsers,
  announcements: dummyAnnouncements,
  events: dummyEvents,
  timetable: dummyTimetable,
  materials: dummyMaterials,
  lostFound: dummyLostFound,
  clubs: dummyClubs,
  calendar: dummyCalendar,
  adminStats: dummyAdminStats
};