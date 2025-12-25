import React, { useEffect, useState } from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  const [employee, setEmployee] = useState(props.data)

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees'))

    if (employees && props.data?.email) {
      const freshEmployee = employees.find(
        (e) => e.email === props.data.email
      )
      setEmployee(freshEmployee)
    }
  }, [props.data])

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={employee} />
      <TaskNumber data={employee} />
      <TaskList data={employee} />
    </div>
  )
}

export default EmployeeDashboard
