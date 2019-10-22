import React from 'react';
import './App.css';
import HocComp from './hoc/HocComp'
import AnimateComp from './components/AnimateComp';
import withTitleHoc, { connect } from './hoc/withTitleHoc';

function App({value}) {
  return (
    <div className="App">
      我的xingibe --- {value}
      <AnimateComp/>
    </div>
  );
}

// export default withTitleHoc(App);

// export default connect111(()=>{
//   return 'name';
// })(App)




export default connect(()=>{
  return 'sex';
})(App)
