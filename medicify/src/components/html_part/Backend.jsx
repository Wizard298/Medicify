import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Backend() {
   const [text, setText] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      console.log(res.data)
      setText(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      Hello
    </div>
  )
}

export default Backend
