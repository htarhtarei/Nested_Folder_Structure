import React from 'react'

const ListDoesnotHasNested = ({data,isChildren}) => {
  return (
        <div className="flex items-center my-1">
            <span className={`${isChildren ? "": "underline"}`}>
                {data.label}
            </span>
        </div>
  )
}

export default ListDoesnotHasNested
