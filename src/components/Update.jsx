import React,{useState,useEffect} from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'



const Update = () => {

  let {id} = useParams()
  let navigate = useNavigate()
  let [pname,setPname] = useState("")
  let [pqnty,setPqnty] = useState("")
  let [pprice,setPprice] = useState("")



  useEffect(()=>{
    let fetchdata = async ()=>{
      let {data}= await axiosInstance.get(`/posts/${id}`)
      setPname(data.pname)
      setPqnty(data.pqnty)
      setPprice(data.pprice)

    }
    fetchdata()
  },[])


  let updateproduct = (e)=>{
     e.preventDefault()
     let payload = {
     pname,pqnty,pprice
    }
    axiosInstance.put(`/posts/${id}`,payload)
    
    navigate("/cart")
}


  return (
    <div id='form1'>
    <form id='main'>
        <fieldset>
          <legend>UPDATE PRODUCT</legend>
          <br/>
          <label>pname</label>
      
         <input value={pname}type="text" onChange={(e)=>{
            setPname(e.target.value)
          }

          }/> 
          <br/>
          <br/>
          
          <label>pqnty</label>
         
          <input value={pqnty} type="text" onChange={(e)=>{
            setPqnty(e.target.value)
          }}/>
          <br/>
          <br/>
          <label>pprice</label>
          
          <input value={pprice}type="text" onChange={(e)=>{
            setPprice(e.target.value)
          }}/>
          <br/>
          <br/>
           <button onClick={updateproduct}>UPDATE PRODUCT</button>
        
        </fieldset>
      </form>
    </div>
  )
}


export default Update
