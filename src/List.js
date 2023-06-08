import React from 'react'
import ListItems from './ListItems'

const List = ( {items} ) => {
  return (
    <ul>
        <ListItems 
            key={items.id} items = {items}
        />
    </ul>
  )
}

export default List