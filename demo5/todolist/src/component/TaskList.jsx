import React from 'react';
import ListItem from './ListItem'

const TaskList = props => {

  function renderItem () {
    return props.list.map((item,index) => <ListItem index = { index } { ...props } key = { item.id } { ...item }/>)
  }

  return (
    <div>
      <ul className="list-group">
        { renderItem() }
      </ul>
    </div>
  )
}

export default TaskList;