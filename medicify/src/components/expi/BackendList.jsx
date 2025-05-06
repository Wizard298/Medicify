import React, {useEffect, useState} from 'react'
import axios from 'axios';

function BackendList() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:2300/medicify')
    .then((response)=>{
      console.log("1: ",response.data)
      setList(response.data)
      console.log('2', list)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <>

    <div>
      <h1>Medicine List</h1>
      {/* if(list.length !=0){ console.log(list[0]) } */}
      <ul>
        {/* <li>Name: {list[0]}</li> */}
      </ul>
    </div>
    
    </>
  )
}

export default BackendList

