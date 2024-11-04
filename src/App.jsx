import ListDoesnotHasNested from "./ListDoesnotHasNested";
import ListHaveNested from "./ListHaveNested";
import DUMMY_DATA from "./data"


function App() {
  const datas = DUMMY_DATA

  return (
    <div>
      {datas.map((data,index)=>{
        const hasNotChildren = !data.children || data.children.length === 0;

        return(
          <div key={index} className="font-semibold ms-2">
            {hasNotChildren ? <ListDoesnotHasNested data={data}/> : <ListHaveNested data={data}/>}
          </div>
        )

      })}
    </div>
  )
}

export default App
