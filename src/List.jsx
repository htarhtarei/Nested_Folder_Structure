import ChildList from "./ChildList"
import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

const List = ({data}) => {
    const [isClick , setIsClick] = useState(false)
    const hasNotChildren = !data.children || data.children.length === 0;

    const dynamicText = () => {
        if (!hasNotChildren) {
            return isClick ? 
                <MdOutlineKeyboardArrowDown className="text-lg" /> :
                <MdOutlineKeyboardArrowRight className="text-lg" />;
        }
        return null;
    };

    return (
        <div className="font-semibold ms-2">
            <div className="flex items-center my-1" onClick={() => setIsClick(!isClick)}>
                {dynamicText()}
                <span className={`${hasNotChildren || isClick ? "underline" : ""}`}>
                    {data.label}
                </span>
            </div>
            {!hasNotChildren && isClick && <ChildList data={data.children}/>}
        </div>
    )
}

export default List
