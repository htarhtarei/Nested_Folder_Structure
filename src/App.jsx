import List from "./List";
import DUMMY_DATA from "./data"


function App() {

  const datas = DUMMY_DATA

  return (
    <div>
      {datas.map((data,index)=><List key={index} data={data}/>)}
    </div>
  )
}

export default App
