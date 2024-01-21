import React,{useState} from 'react'
import axiosInstance from '../helpers/axiosInstance'

const Product = () => {

  let [pname,setPname] = useState("")
  let [pqnty,setPqnty] = useState("")
  let [pprice,setPprice] = useState("")

  let addproduct = (e)=>{
     e.preventDefault()
     let payload = {
     pname,pqnty,pprice
    }
    axiosInstance.post("/posts",payload)
}


  return (
    <div id='form1'>
    <form id='main'>
        <fieldset>
          <legend>ADD PRODUCT</legend>
          <br/>
          <label>pname</label>
      
         <input type="text" onChange={(e)=>{
            setPname(e.target.value)
          }

          }/> 
          <br/>
          <br/>
          
          <label>pqnty</label>
         
          <input type="text" onChange={(e)=>{
            setPqnty(e.target.value)
          }}/>
          <br/>
          <br/>
          <label>pprice</label>
          
          <input type="text" onChange={(e)=>{
            setPprice(e.target.value)
          }}/>
          <br/>
          <br/>
           <button onClick={addproduct}>ADD PRODUCT</button>
        
        </fieldset>
      </form>
    </div>
  )
}


export default Product
