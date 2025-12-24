const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Report",
        description: "Prepare monthly sales report",
        date: "2025-01-05",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Call",
        description: "Call client for project update",
        date: "2025-01-03",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data Entry",
        description: "Enter customer data",
        date: "2025-01-02",
        category: "Data"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design UI",
        description: "Create dashboard UI",
        date: "2025-01-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Bugs",
        description: "Resolve login bugs",
        date: "2025-01-04",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Test",
        description: "Test user APIs",
        date: "2025-01-01",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Content",
        description: "Write blog post",
        date: "2025-01-07",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Update",
        description: "Update SEO keywords",
        date: "2025-01-05",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Campaign Review",
        description: "Review ad campaign",
        date: "2025-01-02",
        category: "Marketing"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Inventory Check",
        description: "Check stock levels",
        date: "2025-01-06",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Order Processing",
        description: "Process pending orders",
        date: "2025-01-04",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Supplier Call",
        description: "Call supplier for delay",
        date: "2025-01-01",
        category: "Communication"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code Review",
        description: "Review team code",
        date: "2025-01-08",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy App",
        description: "Deploy latest build",
        date: "2025-01-05",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server Setup",
        description: "Configure server",
        date: "2025-01-02",
        category: "Infrastructure"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
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
   console.log(employees,admin)

}