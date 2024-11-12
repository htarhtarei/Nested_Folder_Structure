import { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import ChildList from './ChildList';


const ListHaveNested = ({data}) => {
    const [isClick , setIsClick] = useState(false)
    
    const dynamicUpAndDownArrow = () => {
        return isClick ? 
            <MdOutlineKeyboardArrowDown className="text-lg" /> :
            <MdOutlineKeyboardArrowRight className="text-lg" />;
    };
    
    return (
        <ul>
            <li className="flex items-center my-1" onClick={() => setIsClick(!isClick)}>
                {dynamicUpAndDownArrow()}
                <span className={`${ isClick ? "underline" : ""}`}>
                    {data.label}
                </span>
            </li>
            {isClick && <ChildList data={data.children}/>}
        </ul>
    )
}

export default ListHaveNested
