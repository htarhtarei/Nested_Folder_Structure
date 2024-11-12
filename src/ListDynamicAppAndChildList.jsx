import ChildListHasNested from "./ChildListHasNested";
import ListDoesnotHasNested from "./ListDoesnotHasNested";
import ListHaveNested from "./ListHaveNested";

const ListDynamicAppAndChildList = ({datas,isChildItem}) => {
  return (
    <div>
        {datas?.map((list,index)=>{
            const hasNotChildren = !list.children || list.children.length === 0;

            return(
              <div key={index} className="font-semibold ms-2">
                {hasNotChildren ? 
                    <ListDoesnotHasNested data={list} isChildren={isChildItem}/> 
                    : isChildItem ?                         
                       <ChildListHasNested hasChildren={!hasNotChildren} index={index} list={list}/>
                        :
                        <ListHaveNested data={list}/>}
              </div>
            )

          })}
    </div>
  )
}

export default ListDynamicAppAndChildList
