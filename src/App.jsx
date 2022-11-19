import logo from './logo.svg';
import './App.css';
import {useSelector ,useDispatch} from "react-redux";
import {addcounteraction,minuscounteraction} from "./store/actions/index";


function App() {

  const dispatch = useDispatch()

  const {globalcounter} = useSelector((state)=>{
   
    return state
   
  })
  console.log(globalcounter)
  const add = ()=>{
    dispatch(addcounteraction())
   
  }
  const sub =()=>{
dispatch(minuscounteraction())

  }
  return (

    <div className='container'>

      <h1>redux counter</h1>


      <div className='container2'>
        <button onClick={add} className=" btn ">+</button>
       <span className='num'>{globalcounter}</span>
        <button onClick={sub} className=" btn ">-</button>
      </div>
    </div>


  );
}

export default App;
