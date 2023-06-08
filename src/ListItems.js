import  React from 'react'

const ListItems = ({items}) => {
  return (
    <li>
        {JSON.stringify(items)}
    </li>
  )
}

export default ListItems