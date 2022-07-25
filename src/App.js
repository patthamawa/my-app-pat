import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import React, {useState} from 'react';

function App() {
  const [num, setNum] = useState(0); 
  return (
    <div>
      <MyHeader />
      <div class='My-content'>
        <h2>{num}</h2>
        <button className='btn btn-primary' onClick={() => setNum(num+1)}>เพิ่ม</button>&nbsp;
        <button className='btn btn-danger'onClick={() => setNum(num-1)}>ลด</button>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;