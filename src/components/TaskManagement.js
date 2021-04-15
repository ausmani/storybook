// @flow 
import React, {useState} from 'react';
import AddTasks from "./AddTasks";
import ListTasks from "./ListTasks";

const TaskManagement = () => {
    const initialTasks = [
        {status:"default",'desc':'This is the first Task i added which marked as default',id:1},
        {status:"pinned",'desc':'This is the first Task i added which marked as pinned',id:2},
        {status:"archived",'desc':'This is the first Task i added which marked as archived',id:3},
    ]
    const [tasks,setTasks] = useState(initialTasks);

    function changeStatus(status,id) {
        console.log(status)
        let data = [...tasks];
        let index = data.findIndex(obj => obj.id === id);
        data[index].status = status;
        setTasks(data);

    }

    function addTask(description) {
        let data = [...tasks];
      let newTask = {status:"default",desc:description , id:data.length+1}
       setTasks([...data,newTask])
    }
 return (
     <>
         <AddTasks addTask={addTask}/>
         <ListTasks tasks={tasks} changeStatus = {changeStatus}/>
     </>
 );
};
export default TaskManagement;