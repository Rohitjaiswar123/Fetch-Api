import React from 'react'
import Cell from './Cell'

const Row = ( {item} ) => {
  return (
    <tr>
        {/* object.entries() static method returns an array of given object own enumerable(huge) string-keyed property key-value pairs   */}

        {Object.entries(item).map(([key, value]) => {
            return(
                <Cell key={key} Celldata ={JSON.stringify(value)} />
            )
        })}
    </tr>
  )
}

export default Row