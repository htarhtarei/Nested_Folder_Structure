import ListDynamicAppAndChildList from "./ListDynamicAppAndChildList";

const ChildList = (data) => {
    return (
        <div className='ms-8 list-disc'>
            <ListDynamicAppAndChildList datas={data.data} isChildItem={true}/>
        </div>
    )
}

export default ChildList
