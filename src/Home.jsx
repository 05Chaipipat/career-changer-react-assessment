import { useEffect, useState } from "react"
import HomeAdmin from "./Home-Admin"
import HomeUser from "./Home-User"
import Nav from "./Nav"



const mockEmployees = [
  {
    id: 1,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 2,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 3,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
   const [employees,setEmployees] = useState([])
   const [sector,setSector] = useState("")
  useEffect(()=>{
     setEmployees(mockEmployees)
  },[])

    const deleteData = (id) =>{
      const dataFilter = employees.filter((employee)=>employee.id!==id)
      setEmployees(dataFilter)
    }

    
  return (
    <div>
      <Nav/>
      {sector === "user"?(<h1>Generation Thailand Home - User sector</h1>): sector==="admin"?(<h1>Generation Thailand Home - Admin sector</h1>):(<h1>Generation Thailand React - Assessment</h1>) }
      
      <button onClick={()=>setSector("user")}>User Home Sector</button>
      <button onClick={()=>setSector("admin")}>Admin Home Sector</button>
      {sector==="user"&&<HomeUser dataEmployees={employees}/>} 
      {sector==="admin"&&<HomeAdmin dataEmployees={employees} deleteData={deleteData} setEmployees={setEmployees}/>}

    </div>
  )
}



export default Home
