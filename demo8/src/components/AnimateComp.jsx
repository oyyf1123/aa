import React from 'react'
import  withAnimate  from '../hoc/AnimateHoc'

const AnimateComp = () => {
  
  return (
    <div>
      <span>AnimateComp</span>
    </div>
  );
}

export default withAnimate(AnimateComp)
