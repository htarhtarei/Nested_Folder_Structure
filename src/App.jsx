import ListDynamicAppAndChildList from "./ListDynamicAppAndChildList";
import DUMMY_DATA from "./data"


function App() {
  const datas = DUMMY_DATA

  return (
    <div>
      <ListDynamicAppAndChildList datas={datas} isChildItem={false}/>
    </div>
  )
}

export default App
