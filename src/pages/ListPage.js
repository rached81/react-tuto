import React, { useEffect, useState } from "react"
import TaskForm from "./../components/taskForm/TaskForm"
import TasksList from "./../components/tasksList/TasksList"
import { 
    fetchTasks,
    addTask as addTaskService,
    deleteTask as deleteTaskService,
    updateTask as updateTaskService,
    fetchTasksByFilter,

    } from "../services/tasks.service"
import Menu from "../components/menu/Menu"

function ListPage() {
  const [isError, setIsError] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const [loading, setLoading] = useState(false)
  const [newTasks, setNewTasks] = useState([])
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const [tasks, setTasks] = useState([
    
  ])

  const addTask = async (title, duration) => {
    try{
      setLoading(true)
      const newTask = await addTaskService({
        title,
        duration
      })
      setTasks([...tasks, newTask])
      setLoading(false)

    }catch(e){
      setLoading(false)
      console.log("error in addTask")
    }
    
  }
  const deleteTask = async (id) => {

    // setTasks(newTasks)

    try{
      setLoading(true)
      await deleteTaskService(id)
      const newTasks = tasks.filter((task) => task.id !== id)
      setTasks(newTasks)
      setLoading(false)

    }catch(e){
      setLoading(false)
      console.log("error in delete Task")
    }
  }

  const updateTask = async (id, title, duration) => {
    
    

    try{
      setLoading(true)
      const newTask = await updateTaskService(id, {title, duration} )
      const newTasks = tasks.map((task) => task.id == id? newTask: task)
      setTasks(newTasks)
      setLoading(false)

    }catch(e){
      setLoading(false)
      console.log("error in delete Task")
    }
  }
  // first method
  // async function fetchData(){
  //   const tasks = await fetchTasks()
  //   setTasks(tasks)
  // }
  // useEffect(
  //   () => {
  //     fetchData()
  //     console.log(" with useeffect")
  //   }
  // )

   // Second method
  
  // useEffect(
  //   () => {

  // async function fetchData(){
  //   setLoading(true)

  //   try{
  //     const result = await fetchTasks()
  //     setTasks(result)
  //     setLoading(false)
  //   }catch(e){
  //     setLoading(false)
  //     setIsError(true)
      
  //   }
    
  // }
  //     fetchData()
  //     console.log(" with useeffect")
  //   }, []
  // )
  
  useEffect(
    () => {
      let didCancel = false ; 
  async function fetchData(){
    setLoading(true)
    
    if(searchValue.length === 0){
    setTasks([])
    setLoading(false)
    
  }else{
    try{
      const result = await fetchTasksByFilter(searchValue)
      if(!didCancel){
        setTasks(result)
      setLoading(false)
      }
      
    }catch(e){
      setLoading(false)
      setIsError(true)
      
    }
  }
}
      fetchData()
      console.log(" with useeffect")
      return () =>{
        console.log("cleanup: ", searchValue)
        didCancel = true
      }
    }, [searchValue]
  )
  return (

    <div className="app">
      <Menu />
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      <div>
        <input type="text" searchValue={searchValue} onChange={(e) => setSearchValue(e.target.value)} align = "right" />
      </div>
      <div>
        {loading && <div>   
              <div className="Gif">
                  <img src="img/loading-bar.gif" width="833" alt="Loading Bar GIF - Loading Bar Waiting GIFs"  /> 
              </div>
            </div>}
        {!loading && isVisible && (
          <div>
            <TaskForm addTask={addTask}  />
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          </div>
        )}
        {isError && <div> Erreur lors de chargement</div>}
      </div>
    </div>
  )
}

export default ListPage
