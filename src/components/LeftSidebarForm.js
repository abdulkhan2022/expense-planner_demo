import React from 'react'

export default function LeftSidebarForm() {
    const [allTasks, setAllTasks] = React.useState([])   
    
    const [formData, updateFormData] = React.useState({
        taskName: "Demo",
        description: "Demo Description"
    })

    function changeHandle(event){
        updateFormData((previousData => {
            return{
                ...previousData,
                [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
            }
        }
        
        ))
        console.log("hello")

    }
    function taskAdded(event){
        event.preventDefault();
        console.log("Task Added to the allTasks Array.")
        setAllTasks(prevData =>{
            const allDataInsideArray = prevData
            allDataInsideArray.push(formData)
            return allDataInsideArray
        })
            console.log(allTasks)
    }
    return (
    <div>This is My Left Side Bar Form Component.
        <form onSubmit={taskAdded}>
            <input type="text" name='taskName' onChange={changeHandle} value={formData.taskName} placeholder="Task Name"/>
            <textarea name='taskName' onChange={changeHandle} value={formData.description} placeholder="Give a short Description"/>
            <input type="submit">Submit</input>
        </form>
    </div>
  )
}
