import React,{useState,useEffect} from 'react';
import { Table } from 'reactstrap';

import arr from './dataSet'

const Row = (props) => {
    const [data,setData]=useState([]);
  return (
   <>
  {arr.map((f)=>{
      return  (
        <>
        <td>{f.id}</td>
        <td>{f.name}</td>
        <td>{f.username}</td>
        <td>{f.city}</td>
        <td>{f.email}</td>
        <td>{}</td>
      </>
      )
   })}
   </>
  );
}

export default Row;