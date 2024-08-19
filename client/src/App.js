import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { getcontact ,addcontact,deletecontact,updatecontact} from './JS/contactSlice/contactslice';
import { useEffect,useState } from 'react';

function App() {
  const dispatch=useDispatch()
  const [ping,setping]=useState(false)
  useEffect(() => {
 dispatch(getcontact())
  }, [ping])

  const contactlist=useSelector((store)=>store.contact?.contact)
 const[newcontact,setnewcontact]=useState({
  name:"",
  photo:"",
  phone:""
 })

  return (
    <div className="App">
      <header className="App-header">
        <h1>ADD CONTACT</h1>
        <input placeholder='name' type='text' onChange={(e)=>setnewcontact({...newcontact,name:e.target.value})}></input>
        <input placeholder='photo' type='text' onChange={(e)=>setnewcontact({...newcontact,photo:e.target.value})}></input>
        <input placeholder='phone' type='text' onChange={(e)=>setnewcontact({...newcontact,phone:e.target.value})}></input>
        <button onClick={()=>(dispatch(addcontact(newcontact)),setping(1))}>add</button>
     {contactlist?.map((el)=>(
      <>
      <img src={el.photo}></img>
      <h1>{el.name}</h1>
      <h2>{el.phone}</h2>
      <button onClick={()=>(dispatch(deletecontact(el._id)),setping(!ping))}>delete</button>
      <button onClick={()=>setupcontact(el)}>update</button>
      <input placeholder='name' type='text' onChange={(e)=>setupcontact({...upcontact,name:e.target.value})}></input>
      <button onClick={()=>(dispatch(updatecontact(el._id,upcontact)),setping(!ping))}>ok</button>
      </>
     ))
     }

      </header>
    </div>
  );
}

export default App;
