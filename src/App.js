import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  return (
    <div>
      <MyHeader />
      <div class='My-content'>
        <button className='btn btn-primary'>เพิ่ม</button>&nbsp;
        <button className='btn btn-danger'>ลด</button>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;