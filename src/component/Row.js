import React,{useState,useEffect} from 'react';
import newArr from './newData';

const Row = (props) => {
  let count=1;
  return (
   <>
{/* filter Logic */}

  {newArr.map((f)=>{
    if(props.Gender==f.gender||props.Gender=="Gender")
      return  (
        <>
        <tr>
        <td>{count++}</td>
        <td>{f.DOB}</td>
        <td>{f.firstName}</td>
        <td>{f.lastName}</td>
        <td>{f.email}</td>
        <td>{f.gender}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        <td>{f.IQ}</td>
        </tr>
      </>
      )
   })}
   </>
  );
}

export default Row;