const employees = [
  {
    id: 1,
    name: "Rahul",
    email: "employee1@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        taskTitle: "UI Design",
        taskDescription: "Design user interface for the dashboard screen",
        category: "Design",
        date: "2025-12-20",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve alignment issues in navbar",
        category: "Frontend",
        date: "2025-12-21",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Testing",
        taskDescription: "Test UI responsiveness",
        category: "Testing",
        date: "2025-12-22",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    name: "Anjali",
    email: "employee2@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 2,
      completed: 0,
      failed: 1
    },

    tasks: [
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate backend APIs with frontend",
        category: "Backend",
        date: "2025-12-18",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Auth API",
        taskDescription: "Connect login API",
        category: "Backend",
        date: "2025-12-19",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Error Handling",
        taskDescription: "Fix API error handling",
        category: "Bug Fix",
        date: "2025-12-20",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    name: "Mohit",
    email: "employee3@example.com",
    password: "123",

    taskCount: {
      active: 0,
      newTask: 1,
      completed: 2,
      failed: 0
    },

    tasks: [
      {
        taskTitle: "Dashboard Layout",
        taskDescription: "Create main dashboard layout",
        category: "Frontend",
        date: "2025-12-15",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Charts",
        taskDescription: "Add charts using chart library",
        category: "Frontend",
        date: "2025-12-16",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Sidebar",
        taskDescription: "Implement sidebar navigation",
        category: "Frontend",
        date: "2025-12-17",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    name: "Pooja",
    email: "employee4@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 2
    },

    tasks: [
      {
        taskTitle: "Logo Design",
        taskDescription: "Create modern logo",
        category: "Design",
        date: "2025-12-10",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Color Palette",
        taskDescription: "Choose brand colors",
        category: "Design",
        date: "2025-12-11",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Typography",
        taskDescription: "Finalize font styles",
        category: "Design",
        date: "2025-12-12",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    name: "Aman",
    email: "employee5@example.com",
    password: "123",

    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        taskTitle: "Backend APIs",
        taskDescription: "Develop REST APIs using Node.js",
        category: "Backend",
        date: "2025-12-05",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "JWT Auth",
        taskDescription: "Implement JWT authentication",
        category: "Security",
        date: "2025-12-06",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB schema",
        category: "Database",
        date: "2025-12-07",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];



const admin = [
  {
    id: 101,
    name: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];




export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage = () =>{
    const employees =JSON.parse(localStorage.getItem('employees'))
   const admin =JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}