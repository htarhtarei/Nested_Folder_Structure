import ChildListHasNested from "./ChildListHasNested";

const ChildList = (data) => {
    return (
        <div className='ms-8 list-disc'>
            {data.data.map((list,index)=>{
                const hasChildren = list.children || list.children.length > 0
                return(
                    <div key={index}>
                        {list.children.length === 0 ?  
                            <h5>{list.label}</h5> : 
                            <ChildListHasNested hasChildren={hasChildren} index={index} list={list}/>
                        }
                 </div>
                )
            }
                
            )}
        </div>
    )
}

export default ChildList
