import { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import ChildList from './ChildList';


const ListHaveNested = ({data}) => {
    const [isClick , setIsClick] = useState(false)
    
    const dynamicText = () => {
        return isClick ? 
            <MdOutlineKeyboardArrowDown className="text-lg" /> :
            <MdOutlineKeyboardArrowRight className="text-lg" />;
    };
    
    return (
        <div>
            <div className="flex items-center my-1" onClick={() => setIsClick(!isClick)}>
                {dynamicText()}
                <span className={`${ isClick ? "underline" : ""}`}>
                    {data.label}
                </span>
            </div>
            {isClick && <ChildList data={data.children}/>}
        </div>
    )
}

export default ListHaveNested
