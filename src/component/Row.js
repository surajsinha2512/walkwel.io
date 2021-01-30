import React,{useState,useEffect} from 'react';
import { Table } from 'reactstrap';
//import a from './newdata';
import arr from './dataSet';
const fs = require('fs');


const Row = (props) => {
  useEffect(()=>{
   fetch('https://randomuser.me/api/?results=10').then((r)=> r.json()).then((r)=>{
     console.log(r.results[0].gender)
   })
  })
    const [getGender,setGender]=useState("Ervin Howell");
     let count=1;
  return (
   <>
  {arr.map((f)=>{
      return  (
        <>
        <tr>
        <td>{f.id}</td>
        <td>{f.name}</td>
        <td>{f.username}</td>
        <td>{f.email}</td>
        <td>{f.email}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        <td>{}</td>
        </tr>
      </>
      )
   })}
   </>
  );
}

export default Row;