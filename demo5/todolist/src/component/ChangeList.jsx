import React from 'react';

const ChangeList = props => {

function  handleChange (e)  {
    if (e.target.value != '' && e.keyCode == 13) {
      props.changeFlag();
      props.changeList(e.target.value,props.index)
    }
  }

  return (
    <div className = "form-group">
      <input onKeyUp = { handleChange } type="text" className="form-control" name="task" id="task" aria-describedby="helpId" placeholder=""/>
    </div>
  )
}

export default ChangeList;