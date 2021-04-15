import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskManagement from "./components/TaskManagement";

function App() {
    return (
        <>
            <h1 className="text-center">Task Management Application</h1>
            <div className="container">
                <TaskManagement/>
            </div>
        </>
    );
}

export default App;
