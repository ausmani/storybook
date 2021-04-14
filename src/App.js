
import Counter from "./components/counter";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm">

            </div>
            <div className="col-sm">
                <p>Start Learning React Story Book</p>
                <Counter initialValue={10}/>
            </div>
            <div className="col-sm">

            </div>
        </div>

    </div>
  );
}

export default App;
