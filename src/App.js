import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import React, {useState} from 'react';

function App() {
  const [num, setNum] = useState(0); 
  const [primeR, setPrime] = useState("");

  function AddPrimeNumber(){
    let prime = true;
    let num_x = num + 1;
    setNum(num_x);
    if (num_x == 0 || num_x == 1) setPrime("ไม่เป็นจำนวนเฉพาะ")
    else {
    for (let i = 2; i <num_x; i++) {
        if (num_x % i == 0) {
          prime = false;
        break;
    }
  }
    if (prime) setPrime ("เป็นจำนวนเฉพาะ");
    else setPrime ("ไม่เป็นจำนวนเฉพาะ");
  }
}

  function SubtractPrimeNumber() {
    return setNum(num-1);
  }
  return (
    <div>
      <MyHeader />
      <div class='My-content'>
        <h2>{num}</h2>
        <button className='btn btn-primary' onClick={() => setNum(num+1)}>เพิ่ม</button>&nbsp;
        <button className='btn btn-danger'onClick={() => setNum(num-1)}>ลด</button>
        <p>{num} {primeR}</p>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;