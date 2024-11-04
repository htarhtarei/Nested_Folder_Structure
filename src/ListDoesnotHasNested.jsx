import React from 'react'

const ListDoesnotHasNested = ({data}) => {
  return (
        <div className="flex items-center my-1">
            <span className="underline">
                {data.label}
            </span>
        </div>
  )
}

export default ListDoesnotHasNested
