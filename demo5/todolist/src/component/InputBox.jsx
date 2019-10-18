import React from 'react';

const InputBox = props => {

  function handleAdd (e){
    if (e.keyCode == 13 && e.target.value != '') {
      props.handleList(e.target.value);
      e.target.value = '';
    };
  }

  return (
    <div className="form-group">
      <label htmlFor="task"> 请输入要添加的任务事项 </label>
      <input  onKeyUp = { handleAdd } type="text" className="form-control" name="task" id="task" aria-describedby="helpId" placeholder=""/>
    </div>
  )
}

export default InputBox;