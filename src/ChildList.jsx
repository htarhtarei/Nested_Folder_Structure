import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

const ChildList = (data) => {
    const [isClick , setIsClick] = useState({})

    const dynamicText = (hasChildren,index) => {
        if (!hasChildren) return null;
        return isClick[index] ? 
            <MdOutlineKeyboardArrowDown className="text-lg" />
         : 
            <MdOutlineKeyboardArrowRight className="text-lg" />
        ;
    };

    const handleClick = (index)=>{
        setIsClick((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    }


    return (
        <div className='ms-8 list-disc'>
            {data.data.map((list,index)=>{
                const hasChildren = list.children || list.children.length > 0
                return(
                    <div key={index}>
                        {list.children.length === 0 ?  
                            <h5>{list.label}</h5> : 
                            <div className="font-semibold ms-2">
                                <div className="flex items-center my-1" onClick={()=>handleClick(index)}>
                                    {dynamicText(hasChildren,index)}
                                    <span className={`${isClick[index] ? "underline" : ""}`}>
                                        {list.label}
                                    </span>
                                </div>
                                {isClick[index] && (
                                    <ul className="ms-12">
                                        {list.children.map((item) => (
                                            <li key={item.label}>{item.label}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        }
                 </div>
                )
            }
                
            )}
        </div>
    )
}

export default ChildList
