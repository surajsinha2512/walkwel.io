import React,{useState,useEffect} from 'react';
import { Table } from 'reactstrap';

import arr from './dataSet'

const Row = (props) => {
    const [data,setData]=useState([]);
     let count=1;
  return (
   <>
  {arr.map((f)=>{
      return  (
        <>
        <tr>
        <td>{count++}</td>
        <td>{f.id}</td>
        <td>{f.name}</td>
        <td>{f.username}</td>
        <td>{f.email}</td>
        <td>{f.email}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        </tr>
      </>
      )
   })}
   </>
  );
}

export default Row;